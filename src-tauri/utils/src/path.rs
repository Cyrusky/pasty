use dirs::{cache_dir, home_dir};

use std::path::Path;

pub fn get_cache_path() -> String {
    let cache_path = match cache_dir() {
        None => panic!("Impossible to get your cache dir!"),
        Some(path) => path.as_os_str().to_str().unwrap().to_string(),
    };
    cache_path
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
        .join("data")
        .to_str()
        .unwrap()
        .to_string();
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
