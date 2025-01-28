mod biz;
mod commands;
mod core;

use commands::config::{
    add_config, clear_all_config, delete_config_by_key, get_config_by_key, list_all_config,
};
use commands::pasty::{clear_all_pasty, get_all_pasty, get_paged_pasty};
use tauri::{App, Manager, Runtime};
fn setup(app: &mut App) {
    core::handler::Handle::global().init(app.app_handle());
    core::database::init();
    let clipboard = core::clipboard::init().unwrap();
    clipboard.start_monitor(app.app_handle().clone());
    app.manage(clipboard);
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
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![
            // Pasty Command
            get_paged_pasty,
            clear_all_pasty,
            get_all_pasty,
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
