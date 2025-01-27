use chrono::{DateTime, Utc};
use sea_orm::entity::prelude::*;
use serde::{Deserialize, Serialize};
#[derive(Clone, Debug, Eq, PartialEq)]
pub enum PastType {
    PlanText,
    Scripts,
    Url,
    Image,
    Video,
    Audio,
    File,
}

#[derive(Clone, Debug, PartialEq, Eq, DeriveEntityModel, Serialize, Deserialize)]
#[sea_orm(table_name = "asset")]
pub struct Model {
    #[sea_orm(primary_key)]
    #[sea_orm(unique)]
    pub id: Uuid,
    pub pasty_id: Uuid,
    pub pasty_type: String,
    pub asset_path: String,
    pub created_at: DateTime<Utc>,
}

#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]
pub enum Relation {}

impl ActiveModelBehavior for ActiveModel {}

#[derive(DeriveIden)]
pub enum Asset {
    Table,
    Id,
    PastyId,
    PastyType,
    AssetPath,
    CreatedAt,
}
