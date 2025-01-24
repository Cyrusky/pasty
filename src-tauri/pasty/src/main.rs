// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
use migration::migrate;

#[tokio::main]
async fn main() {
    migrate().await;
    pasty_lib::run()
}
