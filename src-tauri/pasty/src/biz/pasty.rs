use crate::core::database::get_connect;
use entities::pasty::{
    ActiveModel as PastyActiveModel, Column as PastyColumn, Entity as PastyEntity,
    Model as PastyModel,
};
use sea_orm::ActiveValue::Set;
use sea_orm::{
    ActiveModelTrait, ColumnTrait, EntityTrait, IntoActiveModel, PaginatorTrait,
    QueryFilter, QuerySelect,
};
use utils::time::get_now_time;

pub async fn query_pasty_by_page(page: u64, page_size: u64) -> Result<Vec<PastyModel>, String> {
    let conn = get_connect();
    match PastyEntity::find()
        .limit(page_size)
        .offset(page_size * (page - 1))
        .all(&conn)
        .await
    {
        Ok(entities) => Ok(entities),
        Err(error) => Err(error.to_string()),
    }
}

pub async fn query_pasty_number() -> Result<u64, bool> {
    let conn = get_connect();
    match PastyEntity::find().count(&conn).await {
        Ok(num) => Ok(num),
        Err(_) => Err(false),
    }
}

pub async fn clear_pasty() -> Result<u64, String> {
    let conn = get_connect();
    match PastyEntity::delete_many().exec(&conn).await {
        Ok(res) => Ok(res.rows_affected),
        Err(err) => Err(err.to_string()),
    }
}

pub async fn renew_pasty_time(hash: String) -> Result<PastyModel, String> {
    let conn = get_connect();
    let now = get_now_time();

    match get_pasty_by_hash(hash).await {
        Ok(pasty) => {
            let mut new_pasty: PastyActiveModel = pasty.into();
            new_pasty.updated_at = Set(now);
            match new_pasty.update(&conn).await {
                Ok(model) => Ok(model),
                Err(err) => Err(err.to_string()),
            }
        }
        Err(err) => Err(err),
    }
}

pub async fn get_pasty_by_hash(hash: String) -> Result<PastyModel, String> {
    let conn = get_connect();
    match PastyEntity::find()
        .filter(PastyColumn::Hash.eq(hash.clone()))
        .one(&conn)
        .await
    {
        Ok(pasty) => match pasty {
            None => Err("Pasty Not Found.".to_string()),
            Some(pasty) => Ok(pasty),
        },
        Err(_) => Err("Query failed.".to_string()),
    }
}

pub async fn create_pasty(pasty: PastyModel) -> Result<PastyModel, String> {
    let conn = get_connect();
    let mut active_pasty: PastyActiveModel = pasty.into_active_model();
    active_pasty.created_at = Set(get_now_time());
    active_pasty.updated_at = Set(get_now_time());
    match active_pasty.insert(&conn).await {
        Ok(model) => Ok(model),
        Err(err) => Err(err.to_string()),
    }
}

pub async fn query_all_pasty() -> Result<Vec<PastyModel>, String> {
    let conn = get_connect();
    match PastyEntity::find().all(&conn).await {
        Ok(pasty) => Ok(pasty),
        Err(err) => Err(err.to_string()),
    }
}
