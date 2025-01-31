use base64::engine::{general_purpose, Engine as _};
use clipboard_rs::common::RustImage;
use clipboard_rs::{
    Clipboard as ClipboardRS, ClipboardContent, ClipboardContext as ClipboardRsContext,
    ClipboardHandler, ClipboardWatcher, ClipboardWatcherContext, ContentFormat, RustImageData,
    WatcherShutdown,
};
use image::EncodableLayout;
use serde::{Deserialize, Serialize};
use std::sync::{Arc, Mutex};
use tauri::{AppHandle, Emitter, Runtime};

pub struct Clipboard {
    pub clipboard: Arc<Mutex<ClipboardRsContext>>,
    pub watcher_shutdown: Arc<Mutex<Option<WatcherShutdown>>>,
}

pub fn init() -> Result<Clipboard, String> {
    Ok(Clipboard {
        clipboard: Arc::new(Mutex::new(ClipboardRsContext::new().unwrap())),
        watcher_shutdown: Arc::default(),
    })
}

#[derive(Debug, Serialize, Deserialize)]
pub struct AvailableTypes {
    pub text: bool,
    pub html: bool,
    pub rtf: bool,
    pub image: bool,
    pub files: bool,
}

/// Content checker
impl Clipboard {
    pub fn has(&self, format: ContentFormat) -> Result<bool, String> {
        Ok(self
            .clipboard
            .lock()
            .map_err(|err| err.to_string())?
            .has(format))
    }

    pub fn available_types(&self) -> Result<AvailableTypes, String> {
        Ok(AvailableTypes {
            text: self.has_text()?,
            html: self.has_html()?,
            rtf: self.has_rtf()?,
            image: self.has_image()?,
            files: self.has_files()?,
        })
    }

    pub fn has_text(&self) -> Result<bool, String> {
        self.has(ContentFormat::Text)
    }

    pub fn has_rtf(&self) -> Result<bool, String> {
        self.has(ContentFormat::Rtf)
    }

    pub fn has_image(&self) -> Result<bool, String> {
        self.has(ContentFormat::Image)
    }

    pub fn has_html(&self) -> Result<bool, String> {
        self.has(ContentFormat::Html)
    }

    pub fn has_files(&self) -> Result<bool, String> {
        self.has(ContentFormat::Files)
    }
}

/// Read content
impl Clipboard {
    pub fn read_text(&self) -> Result<String, String> {
        self.clipboard
            .lock()
            .map_err(|err| err.to_string())?
            .get_text()
            .map_err(|err| err.to_string())
    }

    pub fn read_html(&self) -> Result<String, String> {
        self.clipboard
            .lock()
            .map_err(|err| err.to_string())?
            .get_html()
            .map_err(|err| err.to_string())
    }

    pub fn read_rtf(&self) -> Result<String, String> {
        self.clipboard
            .lock()
            .map_err(|err| err.to_string())?
            .get_rich_text()
            .map_err(|err| err.to_string())
    }

    /// read files from clipboard and return a `Vec<String>`
    /// Will return a vector of strings, in uri format: `file:///path/to/file`. File path is absolute path.
    /// On Windows, the path will be in the format `C:\\path\\to\\file`. This method is the same as read_files on windows
    pub fn read_files_uris(&self) -> Result<Vec<String>, String> {
        let files = self
            .clipboard
            .lock()
            .map_err(|err| err.to_string())?
            .get_files()
            .map_err(|err| err.to_string())?;
        Ok(files)
    }

    /// read files from clipboard and return a `Vec<String>`
    /// Will return a vector of strings, in absolute path format: `/path/to/file`.
    /// On Windows, the path will be in the format `C:\\path\\to\\file`. This method is the same as read_files_uris on windows
    pub fn read_files(&self) -> Result<Vec<String>, String> {
        let files = self.read_files_uris()?;
        // iterate through the files and remove the `file://` prefix if there is any. Only remove the prefix if it's in the beginning
        let files_str = files
            .iter()
            .map(|file| {
                if file.starts_with("file://") {
                    file.strip_prefix("file://").unwrap().to_string()
                } else {
                    file.to_string()
                }
            })
            .collect::<Vec<_>>();
        Ok(files_str)
    }

    /// read image from clipboard and return a base64 string
    pub fn read_image_base64(&self) -> Result<String, String> {
        let image_bytes = self.read_image_binary()?;
        let base64_str = general_purpose::STANDARD.encode(image_bytes);
        Ok(base64_str)
    }

    /// read image from clipboard and return a `Vec<u8>`
    pub fn read_image_binary(&self) -> Result<Vec<u8>, String> {
        let image = self
            .clipboard
            .lock()
            .map_err(|err| err.to_string())?
            .get_image()
            .map_err(|err| err.to_string())?;
        let bytes = image
            .to_png()
            .map_err(|err| err.to_string())?
            .get_bytes()
            .to_vec();
        // let bytes = util::image_data_to_bytes(&image);
        Ok(bytes)
    }
}

/// Write content
impl Clipboard {
    /// Write files uris to clipboard. The files should be in uri format: `file:///path/to/file` on Mac and Linux. File path is absolute path.
    /// On Windows, the path should be in the format `C:\\path\\to\\file`.
    pub fn write_files_uris(&self, files: Vec<String>) -> Result<(), String> {
        // iterate through files, check if it starts with files://, if not throw error (only linux and mac)
        #[cfg(any(target_os = "linux", target_os = "macos"))]
        {
            for file in &files {
                if !file.starts_with("file://") {
                    return Err(format!(
                        "Invalid file uri: {}. File uri should start with file://",
                        file
                    ));
                }
            }
        }
        // On Windows, we don't need the file:// prefix, so we remove it if it's there
        #[cfg(target_os = "windows")]
        {
            for file in &files {
                if file.starts_with("file://") {
                    return Err(format!(
                        "Invalid file uri: {}. File uri on Windows should not start with file://",
                        file
                    ));
                }
            }
        }

        self.clipboard
            .lock()
            .map_err(|err| err.to_string())?
            .set_files(files)
            .map_err(|err| err.to_string())
    }

    // Write to Clipboard APIs
    pub fn write_text(&self, text: String) -> Result<(), String> {
        self.clipboard
            .lock()
            .map_err(|err| err.to_string())?
            .set_text(text)
            .map_err(|err| err.to_string())
    }

    pub fn write_html(&self, html: String) -> Result<(), String> {
        self.clipboard
            .lock()
            .map_err(|err| err.to_string())?
            .set_html(html)
            .map_err(|err| err.to_string())
    }

    pub fn write_html_and_text(&self, html: String, text: String) -> Result<(), String> {
        self.clipboard
            .lock()
            .map_err(|err| err.to_string())?
            .set(vec![
                ClipboardContent::Text(text),
                ClipboardContent::Html(html),
            ])
            .map_err(|err| err.to_string())
    }

    pub fn write_rtf(&self, rtf: String) -> Result<(), String> {
        self.clipboard
            .lock()
            .map_err(|err| err.to_string())?
            .set_rich_text(rtf)
            .map_err(|err| err.to_string())
    }

    /// write base64 png image to clipboard
    pub fn write_image_base64(&self, base64_image: String) -> Result<(), String> {
        let decoded = general_purpose::STANDARD
            .decode(base64_image)
            .map_err(|err| err.to_string())?;
        self.write_image_binary(decoded)
            .map_err(|err| err.to_string())?;
        Ok(())
    }

    pub fn write_image_binary(&self, bytes: Vec<u8>) -> Result<(), String> {
        let img = RustImageData::from_bytes(bytes.as_bytes()).map_err(|err| err.to_string())?;
        self.clipboard
            .lock()
            .map_err(|err| err.to_string())?
            .set_image(img)
            .unwrap();
        Ok(())
    }
}

/// Operations
impl Clipboard {
    pub fn clear(&self) -> Result<(), String> {
        self.clipboard.lock().unwrap().clear().unwrap();
        Ok(())
    }

    pub fn start_monitor<R: Runtime>(&self, app_handle: AppHandle<R>) -> Result<(), String> {
        let _ = app_handle.emit("clipboard-monitor/status", true);
        let clipboard_monitor = ClipboardMonitor::new(app_handle);
        let mut watcher: ClipboardWatcherContext<ClipboardMonitor<R>> =
            ClipboardWatcherContext::new().unwrap();
        let watcher_shutdown = watcher
            .add_handler(clipboard_monitor)
            .get_shutdown_channel();
        let mut watcher_shutdown_state = self.watcher_shutdown.lock().unwrap();
        if (*watcher_shutdown_state).is_some() {
            return Ok(());
        }
        *watcher_shutdown_state = Some(watcher_shutdown);
        std::thread::spawn(move || {
            watcher.start_watch();
        });
        Ok(())
    }

    pub fn stop_monitor<R: Runtime>(&self, app_handle: AppHandle<R>) -> Result<(), String> {
        let _ = app_handle.emit("clipboard-monitor/status", false);
        let mut watcher_shutdown_state = self.watcher_shutdown.lock().unwrap();
        if let Some(watcher_shutdown) = (*watcher_shutdown_state).take() {
            watcher_shutdown.stop();
        }
        *watcher_shutdown_state = None;
        Ok(())
    }

    pub fn is_monitor_running(&self) -> bool {
        (*self.watcher_shutdown.lock().unwrap()).is_some()
    }
}

pub struct ClipboardMonitor<R>
where
    R: Runtime,
{
    app_handle: AppHandle<R>,
}
impl<R> ClipboardMonitor<R>
where
    R: Runtime,
{
    pub fn new(app_handle: tauri::AppHandle<R>) -> Self {
        Self { app_handle }
    }
}

impl<R> ClipboardHandler for ClipboardMonitor<R>
where
    R: Runtime,
{
    fn on_clipboard_change(&mut self) {
        let _ = self
            .app_handle
            .emit("clipboard-monitor/update", "clipboard update");
    }
}
