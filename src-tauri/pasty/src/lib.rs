mod biz;
mod commands;
mod core;

use commands::config::{
    add_config, clear_all_config, delete_config_by_key, get_config_by_key, list_all_config,
};
use commands::pasty::get_paged_pasty;
use tauri::{App, Manager};
fn setup(app: &mut App) {
    core::handler::Handle::global().init(app.app_handle());
    core::database::init();
    core::clipboard::ClipboardWatcher::start();
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_log::Builder::new().build())
        .plugin(tauri_plugin_opener::init())
        .plugin(tauri_plugin_clipboard::init())
        .plugin(tauri_plugin_log::Builder::new().build())
        .setup(|app| {
            setup(app);
            log::trace!("Setup finished.");
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![
            // Pasty Command
            get_paged_pasty,
            // Config Commands
            list_all_config,
            add_config,
            clear_all_config,
            get_config_by_key,
            delete_config_by_key,
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
