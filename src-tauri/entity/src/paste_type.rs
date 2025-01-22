use sea_orm;
use sea_orm::prelude::StringLen;
use sea_orm::{DeriveActiveEnum, EnumIter};

#[derive(EnumIter, DeriveActiveEnum)]
#[sea_orm(
    rs_type = "String",
    db_type = "String(StringLen::None)",
    rename_all = "camelCase"
)]
pub enum PasteType {
    PlanText,
    Scripts,
    Url,
    Image,
    Video,
    Audio,
    File,
}
