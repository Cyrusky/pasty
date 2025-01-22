pub use sea_orm_migration::prelude::*;
mod m20250122_161132_init_pasty;
mod m20250122_162019_init_config;
mod m20250122_162025_init_assets;

use crate::sea_orm::Database;
use utils::path::get_db_path;

pub struct Migrator;

#[async_trait::async_trait]
impl MigratorTrait for Migrator {
    fn migrations() -> Vec<Box<dyn MigrationTrait>> {
        vec![
            Box::new(m20250122_161132_init_pasty::Migration),
            Box::new(m20250122_162019_init_config::Migration),
            Box::new(m20250122_162025_init_assets::Migration),
        ]
    }
}

pub async fn migrate() {
    let data_file_path = get_db_path();
    let data_base_url = format!("sqlite://{}?mode=rwc", data_file_path);
    println!("Database URL: {}", data_base_url);
    let connect = match Database::connect(data_base_url.as_str()).await {
        Ok(connection) => connection,
        Err(_) => panic!("Could not connect to the database"),
    };
    match Migrator::up(&connect, None).await {
        Ok(_) => (),
        Err(_) => panic!("Migration failed"),
    }
}
