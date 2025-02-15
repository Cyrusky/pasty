use tauri::{LogicalPosition, Window, Wry};

#[cfg(target_os = "macos")]
pub fn get_mouse_coordinates() -> (i32, i32) {
    use core_graphics::event::CGEvent;
    use core_graphics::event_source::{CGEventSource, CGEventSourceStateID};

    let source = CGEventSource::new(CGEventSourceStateID::HIDSystemState)
        .expect("failed to create event source");
    let event = CGEvent::new(source).expect("failed to create event");

    (event.location().x as i32, event.location().y as i32)
}

#[cfg(target_os = "windows")]
pub fn get_mouse_coordinates() -> (i32, i32) {
    use std::mem;
    use winapi::shared::windef::POINT;
    use winapi::um::winuser::GetCursorPos;

    unsafe {
        let mut point: POINT = mem::zeroed();
        GetCursorPos(&mut point);

        (point.x, point.y)
    }
}

#[cfg(target_os = "linux")]
pub fn get_mouse_coordinates() -> (i32, i32) {
    use std::os::raw::{c_int, c_uint};
    use std::os::unix::ffi::OsStringExt;
    use std::ptr;

    extern "C" {
        fn XOpenDisplay(display_name: *const u8) -> *mut std::ffi::c_void;
        fn XDefaultRootWindow(display: *mut std::ffi::c_void) -> c_uint;
        fn XQueryPointer(
            display: *mut std::ffi::c_void,
            window: c_uint,
            root_return: *mut c_uint,
            child_return: *mut c_uint,
            root_x_return: *mut c_int,
            root_y_return: *mut c_int,
            win_x_return: *mut c_int,
            win_y_return: *mut c_int,
            mask_return: *mut c_uint,
        ) -> c_int;
        fn XCloseDisplay(display: *mut std::ffi::c_void) -> c_int;
    }

    unsafe {
        let display_name = std::ffi::CString::new(ptr::null())?;
        let display = XOpenDisplay(display_name.as_ptr());

        let root_window = XDefaultRootWindow(display);
        let mut root_x = 0;
        let mut root_y = 0;
        let mut win_x = 0;
        let mut win_y = 0;
        let mut mask = 0;

        XQueryPointer(
            display,
            root_window,
            ptr::null_mut(),
            ptr::null_mut(),
            &mut root_x,
            &mut root_y,
            &mut win_x,
            &mut win_y,
            &mut mask,
        );

        XCloseDisplay(display);

        (root_x, root_y)
    }
}


pub fn show_window_to_current_position(window: &Window<Wry>) -> bool {
    let is_visible = window.is_visible().unwrap();
    if is_visible {
        window.hide().unwrap();
        return false;
    } else {
        window.show().unwrap();
    }

    // 系统 api 调度获取到是逻辑坐标
    let mouse_position = get_mouse_coordinates();
    let mouse_position_x = mouse_position.0 as f64;
    let mouse_position_y = mouse_position.1 as f64;

    let window_dpi = window.scale_factor().unwrap();
    // 获取当前窗口大小，需要还原 dpi 将坐标还原为逻辑坐标
    let window_size = window.inner_size().unwrap().to_logical::<f64>(window_dpi);
    let window_width = window_size.width;
    let window_height = window_size.height;

    let all_monitor = window.available_monitors().unwrap();

    let current_monitor = all_monitor
        .iter()
        .find(|monitor| {
            let monitor_dpi = monitor.scale_factor();
            let monitor_position = monitor.position().to_logical::<f64>(monitor_dpi);
            let monitor_position_x = monitor_position.x;
            let monitor_position_y = monitor_position.y;
            let monitor_size = monitor.size().to_logical::<f64>(monitor_dpi);
            let monitor_width = monitor_size.width;
            let monitor_height = monitor_size.height;

            // 判断鼠标位置是否在当前显示器内
            mouse_position_x >= monitor_position_x
                && mouse_position_x <= monitor_position_x + monitor_width
                && mouse_position_y >= monitor_position_y
                && mouse_position_y <= monitor_position_y + monitor_height
        })
        .unwrap();

    let current_monitor_dpi = current_monitor.scale_factor();

    // 设置窗口位置到当前鼠标位置
    let current_monitor_position = current_monitor
        .position()
        .to_logical::<f64>(current_monitor_dpi);
    let current_monitor_position_x = current_monitor_position.x;
    let current_monitor_position_y = current_monitor_position.y;
    let current_monitor_size = current_monitor
        .size()
        .to_logical::<f64>(current_monitor_dpi);
    let current_monitor_width = current_monitor_size.width;
    let current_monitor_height = current_monitor_size.height;

    // 计算窗口位置
    let window_position_x = mouse_position_x - window_width / 2.0;
    let window_position_y = mouse_position_y - window_height / 2.0;

    // 判断窗口位置是否超出当前显示器
    let window_position_x = if window_position_x < current_monitor_position_x {
        current_monitor_position_x
    } else if window_position_x + window_width > current_monitor_position_x + current_monitor_width
    {
        current_monitor_position_x + current_monitor_width - window_width
    } else {
        window_position_x
    };

    let window_position_y = if window_position_y < current_monitor_position_y {
        current_monitor_position_y
    } else if window_position_y + window_height
        > current_monitor_position_y + current_monitor_height
    {
        current_monitor_position_y + current_monitor_height - window_height
    } else {
        window_position_y
    };

    let current_temp = LogicalPosition::new(window_position_x, window_position_y);

    window.set_position(current_temp).expect("无法设置窗口位置");

    true
}