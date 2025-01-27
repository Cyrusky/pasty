use serde::{Deserialize, Serialize};

#[derive(Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PaginationRequest {
    pub page: u64,
    pub page_size: u64,
}

#[derive(Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PagedApiResult<T> {
    pub total: u64,
    pub status: bool,
    pub page: u64,
    pub page_size: u64,
    pub data: Vec<T>,
    pub msg: String,
}

#[derive(Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ApiResult<T> {
    pub status: bool,
    pub data: T,
    pub msg: String,
}
