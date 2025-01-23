use sea_orm::entity::prelude::*;
use serde::{Deserialize, Serialize};
use std::fmt::Debug;

#[derive(Clone, Debug, PartialEq, Eq, DeriveEntityModel, Serialize, Deserialize)]
#[sea_orm(table_name = "posts")]
pub struct Model {
    #[sea_orm(primary_key)]
    #[sea_orm(unique)]
    pub id: Uuid,
    pub past_type: String,
    pub content: String,
    pub created_at: DateTime,
}

#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]
pub enum Relation {}

impl ActiveModelBehavior for ActiveModel {}

#[derive(DeriveIden)]
pub enum Pasty {
    Table,
    Id,
    PastType,
    Content,
    CreatedAt,
}
