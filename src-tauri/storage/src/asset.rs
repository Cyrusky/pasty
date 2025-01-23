use entities::assets;
use sea_orm::prelude::*;
use sea_orm::DeleteResult;
use std::fs;
use utils::path::get_asset_path;

pub struct AssetStore;

impl AssetStore {
    pub async fn get_asset_by_id(db: &DbConn, id: Uuid) -> Result<Option<assets::Model>, DbErr> {
        assets::Entity::find_by_id(id).one(db).await
    }

    pub async fn list_assets(db: &DbConn) -> Result<Vec<assets::Model>, DbErr> {
        assets::Entity::find().all(db).await
    }

    pub async fn clear_assets(db: &DbConn) -> Result<DeleteResult, DbErr> {
        let asset_path = get_asset_path();
        match fs::remove_dir(asset_path) {
            Ok(_) => (),
            Err(_) => panic!("Could not delete asset directory."),
        }
        assets::Entity::delete_many().exec(db).await
    }

    pub async fn delete_asset(db: &DbConn, id: Uuid) -> Result<DeleteResult, DbErr> {
        let asset = match assets::Entity::find_by_id(id).one(db).await? {
            Some(asset) => asset,
            None => {
                return Err(DbErr::RecordNotFound(
                    format!("Asset not found: {}", id).to_owned(),
                ))
            }
        };
        let path = asset.asset_path;
        let abs_path = get_asset_path() + &path;
        let delete_result = match fs::remove_file(abs_path) {
            Ok(_) => true,
            Err(_) => panic!("Could not delete asset file."),
        };
        if delete_result {
            assets::Entity::delete_by_id(id)
                .filter(assets::Column::Id.eq(id))
                .exec(db)
                .await
        } else {
            Err(DbErr::Custom("Could not delete asset.".to_owned()))
        }
    }
}
