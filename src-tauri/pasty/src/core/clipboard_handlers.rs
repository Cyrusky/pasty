use crate::biz::config::get_config;
use crate::biz::pasty::{create_pasty, remove_old_pasty_by_number, try_update_pasty_by_hash};
use crate::core::constants::{CONFIG_KEYS, CONFIG_VALUES};
use entities::pasty::Model as PastyModel;
use utils::string_util::md5;

pub async fn remove_pasty_overflow() {
    let length = match get_config(String::from(CONFIG_KEYS.max_pasty_history_length)).await {
        Ok(config) => config
            .value
            .parse::<u64>()
            .unwrap_or_else(|_| CONFIG_VALUES.max_pasty_history_length.clone()),
        Err(_) => CONFIG_VALUES.max_pasty_history_length.clone(),
    };

    remove_old_pasty_by_number(length.clone())
        .await
        .expect("Remove old pasty failed.");
}

pub async fn handle_text_content(text: String) {
    let text_hash = md5(text.as_str());
    if try_update_pasty_by_hash(&text_hash).await {
        return;
    } else {
        remove_pasty_overflow().await;
        let pasty: PastyModel = PastyModel {
            id: Default::default(),
            pasty_type: "Text".to_string(),
            hash: text_hash,
            thumbnail: "".to_string(),
            content: text,
            created_at: Default::default(),
            updated_at: Default::default(),
        };
        create_pasty(pasty)
            .await
            .expect("Can not create a new text pasty.");
        return;
    };
}

pub async fn handle_html_content(html: String) {
    let html_hash = md5(html.as_str());
    if try_update_pasty_by_hash(&html_hash).await {
        return;
    } else {
        remove_pasty_overflow().await;
        let pasty: PastyModel = PastyModel {
            id: Default::default(),
            pasty_type: "Html".to_string(),
            hash: html_hash,
            thumbnail: "".to_string(),
            content: html,
            created_at: Default::default(),
            updated_at: Default::default(),
        };
        create_pasty(pasty)
            .await
            .expect("Can not create a new html pasty.");
        return;
    };
}

pub async fn handle_rtf_content(rtf: String) {
    let rtf_hash = md5(rtf.as_str());
    if try_update_pasty_by_hash(&rtf_hash).await {
        return;
    } else {
        remove_pasty_overflow().await;
        let pasty: PastyModel = PastyModel {
            id: Default::default(),
            pasty_type: "Rtf".to_string(),
            hash: rtf_hash,
            thumbnail: "".to_string(),
            content: rtf,
            created_at: Default::default(),
            updated_at: Default::default(),
        };
        create_pasty(pasty)
            .await
            .expect("Can not create a new html pasty.");
        return;
    };
}

pub async fn handle_image_content(image: String) {
    remove_pasty_overflow().await;
    println!("Get image: {}", image)
}

pub async fn handle_file_content(files: Vec<String>) {
    remove_pasty_overflow().await;
    println!("Get files: {}", files.join(",\n"))
}
