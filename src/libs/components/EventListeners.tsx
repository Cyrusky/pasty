import { useEffect } from "react";
import { listen } from "@tauri-apps/api/event";

export const EventListeners = () => {
  const createListener = async () => {
    try {
      return await listen("clipboard-change", (event) => {
        console.log(event);
      });
    } catch (e) {
      console.log("Events are not working in browser");
    }
  };

  useEffect(() => {
    const dispose = createListener();
    return () => {
      dispose
        ?.then((dispose) => dispose?.())
        .catch(() => {
          console.log("Events are not working in browser");
        });
    };
  }, []);
  return <></>;
};
