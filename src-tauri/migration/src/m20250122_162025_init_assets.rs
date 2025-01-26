use entities::assets::Asset;
use sea_orm_migration::{prelude::*, schema::*};

#[derive(DeriveMigrationName)]
pub struct Migration;

#[async_trait::async_trait]
impl MigrationTrait for Migration {
    async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        manager
            .create_table(
                Table::create()
                    .table(Asset::Table)
                    .if_not_exists()
                    .col(pk_uuid(Asset::Id))
                    .col(string(Asset::PastyId).not_null())
                    .col(string(Asset::PastyType).not_null())
                    .col(string(Asset::AssetPath))
                    .col(date_time(Asset::CreatedAt).not_null())
                    .to_owned(),
            )
            .await
    }

    async fn down(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        manager
            .drop_table(Table::drop().table(Asset::Table).to_owned())
            .await
    }
}
