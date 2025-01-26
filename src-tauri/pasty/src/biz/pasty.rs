use crate::core::database::get_connect;
use entities::pasty::{Entity as PastyEntity, Model as PastyModel};
use sea_orm::{EntityTrait, PaginatorTrait, QuerySelect};

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
