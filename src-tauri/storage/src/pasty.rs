use entities::pasty;
use sea_orm::*;

pub struct PastyStore;

impl PastyStore {
    pub async fn create_paste(
        db: &DbConn,
        form_data: pasty::Model,
    ) -> Result<pasty::ActiveModel, DbErr> {
        pasty::ActiveModel {
            pasty_type: Set(form_data.pasty_type.to_owned()),
            content: Set(form_data.content.to_owned()),
            ..Default::default()
        }
        .save(db)
        .await
    }

    pub async fn list_pastes(db: &DbConn) -> Result<Vec<pasty::Model>, DbErr> {
        pasty::Entity::find()
            .order_by_desc(pasty::Column::CreatedAt)
            .all(db)
            .await
    }

    pub async fn list_pastes_by_type(
        db: &DbConn,
        pasty_type: &str,
    ) -> Result<Vec<pasty::Model>, DbErr> {
        pasty::Entity::find()
            .filter(pasty::Column::PastyType.contains(pasty_type))
            .order_by_desc(pasty::Column::CreatedAt)
            .all(db)
            .await
    }

    pub async fn clear_pastes(db: &DbConn) -> Result<DeleteResult, DbErr> {
        pasty::Entity::delete_many().exec(db).await
    }

    pub async fn delete_pasty_by_created_at(
        db: &DbConn,
        created_at: &str,
    ) -> Result<DeleteResult, DbErr> {
        pasty::Entity::delete_many()
            .filter(pasty::Column::CreatedAt.lt(created_at))
            .exec(db)
            .await
    }
}
