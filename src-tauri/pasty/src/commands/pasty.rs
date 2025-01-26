use crate::biz::pasty::{query_pasty_by_page, query_pasty_number};
use crate::biz::types::{PagedResult, PaginationRequest};
use entities::pasty::Model as PastyModel;

#[tauri::command(rename_all = "snake_case")]
pub async fn get_paged_pasty(
    request: PaginationRequest,
) -> Result<PagedResult<PastyModel>, String> {
    let number = query_pasty_number().await.unwrap_or_else(|_| 0);
    let mut error_msg: String = String::from("");

    let data = match query_pasty_by_page(request.page, request.page_size).await {
        Ok(result) => result,
        Err(err) => {
            error_msg = err;
            Vec::new()
        }
    };

    let result = PagedResult {
        status: error_msg == "",
        total: number,
        page: request.page,
        page_size: request.page_size,
        data: data,
        msg: match error_msg == "" {
            true => String::from("OK"),
            false => error_msg,
        },
    };
    Ok(result)
}
