use crate::core::handler::Handle;
use arboard::{Clipboard, ImageData};
use log;
use std::borrow::Cow;
use std::thread;
use std::time::Duration;
use tauri::Emitter;
use utils::string_util::{md5, md5_by_bytes};

pub struct ClipboardWatcher;
// pub struct ClipboardOperator;

impl ClipboardWatcher {
    pub fn start() {
        tauri::async_runtime::spawn(async {
            let bytes = [];
            let empty_image = ImageData {
                width: 0,
                height: 0,
                bytes: Cow::from(bytes.as_ref()),
            };

            let mut previous_text_md5 = String::new();
            let mut previous_img_md5 = String::new();

            let mut current_text = String::new();
            let mut current_image = empty_image;
            println!("Start watching clipboard.");
            let mut clipboard = Clipboard::new().unwrap();
            loop {
                let current_text_md5 = match clipboard.get_text() {
                    Ok(text) => {
                        current_text = text.clone();
                        md5(text.as_str())
                    }
                    Err(_) => previous_img_md5.clone(),
                };
                if current_text_md5 != previous_text_md5 {
                    log::info!("Get new text content: {}", current_text);
                    match Handle::global().get_window() {
                        None => {
                            log::info!("Can not get the main window.")
                        }
                        Some(window) => {
                            window
                                .emit("clipboard-change", &current_text)
                                .expect("Can not emit message");
                        }
                    };
                    previous_text_md5 = current_text_md5;
                }
                let current_image_md5 = match clipboard.get_image() {
                    Ok(img) => {
                        current_image = img.clone();
                        md5_by_bytes(&img.bytes)
                    }
                    Err(_) => previous_img_md5.clone(),
                };
                if current_image_md5 != previous_img_md5 {
                    log::info!(
                        "Get new image content: {}",
                        md5_by_bytes(&current_image.bytes)
                    );
                    previous_img_md5 = current_image_md5;
                }
                thread::sleep(Duration::from_secs(1));
            }
        });
    }
}
//
// impl ClipboardOperator {
//     pub fn set_text(text: String) {
//         let mut clipboard = Clipboard::new().unwrap();
//         clipboard.set_text(text).unwrap();
//     }
// }
