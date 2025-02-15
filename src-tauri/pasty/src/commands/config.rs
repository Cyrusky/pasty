use crate::biz::config::{
    clear_config, create_or_update_config, delete_config, get_config, query_all_configs,
};
use entities::configs::Model as ConfigModel;
use tauri::{AppHandle, Manager};

#[tauri::command]
pub async fn list_all_config() -> Result<Vec<ConfigModel>, String> {
    query_all_configs().await
}

#[tauri::command]
pub async fn get_config_by_key(key: String) -> Result<ConfigModel, String> {
    get_config(key).await
}

#[tauri::command]
pub async fn delete_config_by_key(key: String) -> Result<ConfigModel, String> {
    delete_config(key).await
}

#[tauri::command]
pub async fn add_config(key: String, value: String) -> Result<ConfigModel, String> {
    create_or_update_config(key, value).await
}

#[tauri::command]
pub async fn clear_all_config() -> Result<u64, String> {
    clear_config().await
}

#[tauri::command]
pub async fn set_shadow(app: AppHandle, shadow: bool){
    let window = app.get_window("main").unwrap();
    window.set_shadow(shadow).expect("TODO: panic message");
}

#[tauri::command]
pub async fn set_always_on_top(app: AppHandle, enable: bool){
    let window = app.get_window("main").unwrap();
    window.set_always_on_top(enable).expect("TODO: panic message");
}