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
                    .col(pk_uuid(Pasty::Id))
                    .col(string(Pasty::PastType))
                    .col(string(Pasty::Content))
                    .col(date_time(Pasty::CreatedAt))
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
