// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
use migration::migrate;
use tracing;
use tracing_subscriber;

#[tokio::main]
async fn main() {
    tracing_subscriber::fmt()
            .with_max_level(tracing::Level::DEBUG)
            .with_test_writer()
            .init();
    migrate().await;
    pasty_lib::run();
}
