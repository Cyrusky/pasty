pub struct ConfigKeys {
    pub max_pasty_history_length: &'static str,
}

pub struct ConfigValues {
    pub max_pasty_history_length: &'static u64,
}

pub const CONFIG_KEYS: ConfigKeys = ConfigKeys {
    max_pasty_history_length: "config_key_max_pasty_history_length",
};

pub const CONFIG_VALUES: ConfigValues = ConfigValues {
    max_pasty_history_length: &50,
};
