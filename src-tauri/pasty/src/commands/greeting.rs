#[tauri::command]
pub fn greeting() -> String {
    "Hello from Rust!".to_string()
}

// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
#[tauri::command]
pub fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}
