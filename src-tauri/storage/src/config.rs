use entities::configs;
use sea_orm::prelude::*;
use sea_orm::ActiveValue::Set;
use sea_orm::DbErr;

pub struct ConfigStore;

impl ConfigStore {
    pub async fn get_config_by_key(
        db: &DbConn,
        key: &str,
    ) -> Result<Option<configs::Model>, DbErr> {
        println!("Call Api get_config_by_key");
        configs::Entity::find()
            .filter(configs::Column::Key.eq(key))
            .one(db)
            .await
    }

    pub async fn set_config(
        db: &DbConn,
        key: &str,
        value: &str,
    ) -> Result<configs::ActiveModel, DbErr> {
        println!("Call Api set_config");
        let config = ConfigStore::get_config_by_key(db, key).await?;
        let mut config: configs::ActiveModel = match config {
            Some(config) => config.into(),
            None => {
                return configs::ActiveModel {
                    key: Set(key.to_owned()),
                    value: Set(value.to_owned()),
                    ..Default::default()
                }
                .save(db)
                .await
            }
        };

        config.key = Set(key.to_owned());
        config.value = Set(value.to_owned());
        let config = config.update(db).await?;
        Ok(configs::ActiveModel::from(config))
    }

    pub async fn list_all_configs(db: &DbConn) -> Result<Vec<configs::Model>, DbErr> {
        println!("Call Api list_all_configs");
        configs::Entity::find().all(db).await
    }
}
