use entities::pasty::Pasty;
use sea_orm_migration::{prelude::*, schema::*};

#[derive(DeriveMigrationName)]
pub struct Migration;

#[async_trait::async_trait]
impl MigrationTrait for Migration {
    async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        manager
            .create_table(
                Table::create()
                    .table(Pasty::Table)
                    .if_not_exists()
                    .col(integer(Pasty::Id).not_null().unsigned().auto_increment().primary_key())
                    .col(string(Pasty::Hash).unique_key())
                    .col(string(Pasty::PastyType).not_null())
                    .col(string(Pasty::Thumbnail).null())
                    .col(string(Pasty::Content))
                    .col(date_time(Pasty::CreatedAt))
                    .col(date_time(Pasty::UpdatedAt))
                    .to_owned(),
            )
            .await
    }

    async fn down(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        manager
            .drop_table(Table::drop().table(Pasty::Table).to_owned())
            .await
    }
}
