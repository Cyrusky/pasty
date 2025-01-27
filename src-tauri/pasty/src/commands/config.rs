use crate::biz::config::{
    clear_config, delete_config, get_config, query_all_configs, update_config,
};
use entities::configs::Model as ConfigModel;

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
pub async fn update_config_by_key(key: String, value: String) -> Result<ConfigModel, String> {
    update_config(key, value).await
}

#[tauri::command]
pub async fn clear_all_config() -> Result<u64, String> {
    clear_config().await
}
