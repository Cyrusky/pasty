use dirs::{cache_dir, home_dir};
use std::fs;

use std::path::Path;

pub fn get_cache_path() -> String {
    let cache_path = match cache_dir() {
        None => panic!("Impossible to get your cache dir!"),
        Some(path) => path.as_os_str().to_str().unwrap().to_string(),
    };
    cache_path
}

pub fn get_asset_path() -> String {
    let data_path = get_data_path();
    let app_dir = Path::new(data_path.as_str())
        .join("assets")
        .to_str()
        .unwrap()
        .to_string();
    if fs::metadata(&app_dir).is_err() {
        match fs::create_dir_all(&app_dir) {
            Ok(_) => (),
            Err(e) => panic!("Could not create asset directory: {}", e),
        }
    }
    app_dir
}

pub fn get_home_path() -> String {
    let home_path = match home_dir() {
        None => panic!("Impossible to get your home dir!"),
        Some(path) => path.as_os_str().to_str().unwrap().to_string(),
    };
    home_path
}

pub fn get_data_path() -> String {
    let home_path = get_home_path();
    let app_dir = Path::new(home_path.as_str())
        .join(".pasty")
        .to_str()
        .unwrap()
        .to_string();
    if fs::metadata(&app_dir).is_err() {
        match fs::create_dir_all(&app_dir) {
            Ok(_) => (),
            Err(e) => panic!("Could not create data directory: {}", e),
        }
    }
    app_dir
}

pub fn get_db_path() -> String {
    let data_dir = Path::new(get_data_path().as_str())
        .join("pasty.sqlite")
        .to_str()
        .unwrap()
        .to_string();
    data_dir
}
