use once_cell::sync::OnceCell;
use parking_lot::Mutex;
use std::sync::Arc;
use tauri::{AppHandle, Manager, WebviewWindow};

#[derive(Debug, Default, Clone)]
pub struct Handle {
    pub app_handle: Arc<Mutex<Option<AppHandle>>>,
}

impl Handle {
    pub fn global() -> &'static Handle {
        static HANDLE: OnceCell<Handle> = OnceCell::new();

        HANDLE.get_or_init(|| Handle {
            app_handle: Arc::new(Mutex::new(None)),
        })
    }

    pub fn init(&self, app_handle: &AppHandle) {
        let handle = app_handle.clone();
        *self.app_handle.lock() = Some(handle)
    }

    pub fn get_window(&self) -> Option<WebviewWindow> {
        self.app_handle
            .lock()
            .as_ref()
            .and_then(|a| a.get_webview_window("main"))
    }
}
