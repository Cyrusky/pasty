use parking_lot::Mutex;
use sea_orm::{Database, DatabaseConnection};
use utils::path::get_db_path;

use once_cell::sync::OnceCell;
use std::sync::Arc;

pub struct DatabaseHandler {
    pub connection: Arc<Mutex<Option<DatabaseConnection>>>,
}

impl DatabaseHandler {
    pub fn global() -> &'static DatabaseHandler {
        static HANDLER: OnceCell<DatabaseHandler> = OnceCell::new();

        HANDLER.get_or_init(|| DatabaseHandler {
            connection: Arc::new(Mutex::new(None)),
        })
    }

    pub async fn init(&self) {
        let connection = connect_to_db().await;
        *self.connection.lock() = Some(connection)
    }
}

pub async fn connect_to_db() -> DatabaseConnection {
    let data_base_url = format!("sqlite://{}?mode=rwc", get_db_path());
    match Database::connect(data_base_url.as_str()).await {
        Ok(connection) => connection,
        Err(_) => panic!("Could not connect to the database"),
    }
}

pub fn get_connect() -> DatabaseConnection {
    let handler = DatabaseHandler::global();
    handler.connection.lock().clone().unwrap()
}

pub fn init() {
    tauri::async_runtime::spawn(async { DatabaseHandler::global().init().await });
}
