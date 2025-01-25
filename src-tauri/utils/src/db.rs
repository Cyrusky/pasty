use uuid::Uuid;
pub fn gen_uuid() -> Uuid {
    let uuid = Uuid::new_v4();
    uuid
}
