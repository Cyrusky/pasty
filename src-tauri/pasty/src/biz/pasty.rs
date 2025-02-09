use crate::core::database::get_connect;
use entities::pasty::{
    ActiveModel as PastyActiveModel, Column as PastyColumn, Entity as PastyEntity,
    Model as PastyModel,
};
use sea_orm::ActiveValue::Set;
use sea_orm::{ActiveModelTrait, ActiveValue, ColumnTrait, EntityTrait, IntoActiveModel, PaginatorTrait, QueryFilter, QueryOrder, QuerySelect};
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
    let mut active_model: PastyActiveModel = pasty.into_active_model();
    // Set the ID to "NotSet" to make sure the field using auto_increment
    active_model.id = ActiveValue::NotSet;
    active_model.created_at = Set(get_now_time());
    active_model.updated_at = Set(get_now_time());
    match active_model.insert(&conn).await {
        Ok(model) => Ok(model),
        Err(err) => Err(err.to_string()),
    }
}

pub async fn query_all_pasty() -> Result<Vec<PastyModel>, String> {
    let conn = get_connect();
    match PastyEntity::find().order_by_desc(PastyColumn::UpdatedAt).all(&conn).await {
        Ok(pasty) => Ok(pasty),
        Err(err) => Err(err.to_string()),
    }
}

pub async fn remove_old_pasty_by_number(num: u64) -> Result<bool, String> {
    let conn = get_connect();
    match PastyEntity::find()
        .order_by_desc(PastyColumn::UpdatedAt)
        .offset(num - 1)
        .one(&conn)
        .await
    {
        Ok(pasty) => match pasty {
            None => Ok(true),
            Some(pasty) => {
                PastyEntity::delete_many()
                    .filter(PastyColumn::UpdatedAt.lte(pasty.updated_at))
                    .exec(&conn)
                    .await
                    .unwrap();
                Ok(true)
            }
        },
        Err(err) => Err(err.to_string()),
    }
}

pub async fn try_update_pasty_by_hash(hash: &String) -> bool {
    let conn = get_connect();
    let pasty = PastyEntity::find()
        .filter(PastyColumn::Hash.eq(hash))
        .one(&conn)
        .await
        .unwrap_or(None);
    match pasty {
        None => false,
        Some(pasty) => {
            let mut pasty_active_model: PastyActiveModel = pasty.into_active_model();
            pasty_active_model.updated_at = Set(get_now_time());
            match pasty_active_model.update(&conn).await {
                Ok(_) => true,
                Err(_) => false,
            }
        }
    }
}
