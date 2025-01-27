use crate::biz::pasty as BizPasty;
use crate::biz::types::{ApiResult, PagedApiResult, PaginationRequest};
use entities::pasty::Model as PastyModel;

#[tauri::command(rename_all = "snake_case")]
pub async fn get_paged_pasty(
    request: PaginationRequest,
) -> Result<PagedApiResult<PastyModel>, String> {
    let number = BizPasty::query_pasty_number().await.unwrap_or_else(|_| 0);
    let mut error_msg: String = String::from("");

    let data = match BizPasty::query_pasty_by_page(request.page, request.page_size).await {
        Ok(result) => result,
        Err(err) => {
            error_msg = err;
            Vec::new()
        }
    };

    let result = PagedApiResult {
        status: error_msg == "",
        total: number,
        page: request.page,
        page_size: request.page_size,
        data,
        msg: match error_msg == "" {
            true => String::from("OK"),
            false => error_msg,
        },
    };
    Ok(result)
}

#[tauri::command]
pub async fn clear_all_pasty() -> Result<ApiResult<u64>, String> {
    match BizPasty::clear_pasty().await {
        Ok(rows_affected) => Ok(ApiResult {
            status: true,
            data: rows_affected,
            msg: "OK".to_string(),
        }),
        Err(err) => Err(err),
    }
}

#[tauri::command]
pub async fn get_all_pasty() -> Result<ApiResult<Vec<PastyModel>>, String> {
    match BizPasty::query_all_pasty().await {
        Ok(pasty) => Ok(ApiResult {
            status: true,
            data: pasty,
            msg: "OK".to_string(),
        }),
        Err(err) => Err(err),
    }
}
