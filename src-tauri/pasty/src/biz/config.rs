use crate::core::database::get_connect;
use entities::configs::{
    ActiveModel as ConfigActiveModel, Column as ConfigColumn, Entity as ConfigEntity,
    Model as ConfigModel,
};
use sea_orm::ActiveValue::Set;
use sea_orm::{ActiveModelTrait, ColumnTrait, EntityTrait, ModelTrait, QueryFilter};

pub async fn query_all_configs() -> Result<Vec<ConfigModel>, String> {
    let conn = get_connect();
    match ConfigEntity::find().all(&conn).await {
        Ok(config) => Ok(config),
        Err(err) => Err(err.to_string()),
    }
}

pub async fn get_config(key: String) -> Result<ConfigModel, String> {
    let conn = get_connect();
    match ConfigEntity::find()
        .filter(ConfigColumn::Key.eq(&key))
        .one(&conn)
        .await
    {
        Ok(config) => match config {
            None => Err(format!("Can not found the config with key {}", key)),
            Some(config) => Ok(config),
        },
        Err(err) => Err(err.to_string()),
    }
}

pub async fn delete_config(key: String) -> Result<ConfigModel, String> {
    let conn = get_connect();
    match get_config(key.clone()).await {
        Ok(config) => match ConfigEntity::delete_by_id(config.id).exec(&conn).await {
            Ok(_) => Ok(config),
            Err(_) => Err(format!("Can not delete the config {}", key.clone())),
        },
        Err(err) => Err(err),
    }
}

async fn update_config(config: ConfigModel, value: String) -> Result<ConfigModel, String> {
    let conn = get_connect();
    let mut new_config: ConfigActiveModel = config.into();
    new_config.value = Set(value);
    match new_config.update(&conn).await {
        Ok(config) => Ok(config),
        Err(err) => Err(err.to_string()),
    }
}

async fn create_config(key: String, value: String) -> Result<ConfigModel, String> {
    let conn = get_connect();
    let mut config_model: ConfigActiveModel = ConfigActiveModel {
        id: Default::default(),
        key: Set(key),
        value: Set(value),
    };
    match config_model.insert(&conn).await {
        Ok(model) => Ok(model),
        Err(err) => Err(err.to_string()),
    }
}

pub async fn create_or_update_config(key: String, value: String) -> Result<ConfigModel, String> {
    let conn = get_connect();
    match ConfigEntity::find()
        .filter(ConfigColumn::Key.eq(key.clone()))
        .one(&conn)
        .await
    {
        Ok(config) => match config {
            None => create_config(key, value).await,
            Some(config) => update_config(config, value).await,
        },
        Err(_) => Err(format!(
            "Can not operate database when finding config key: {}",
            key.clone()
        )),
    }
}

pub async fn clear_config() -> Result<u64, String> {
    let conn = get_connect();
    match ConfigEntity::delete_many()
        .filter(ConfigColumn::Key.ne("".to_string()))
        .exec(&conn)
        .await
    {
        Ok(res) => Ok(res.rows_affected),
        Err(err) => Err(err.to_string()),
    }
}
