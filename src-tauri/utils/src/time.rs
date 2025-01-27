use chrono::{DateTime, Utc};

pub fn get_now_time() -> DateTime<Utc> {
    Utc::now()
}
