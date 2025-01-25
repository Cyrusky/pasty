import { useEffect } from "react";
import { listen } from "@tauri-apps/api/event";

export const EventListeners = () => {
  const createListener = async () => {
    return await listen("clipboard-change", (event) => {
      console.log(event);
    });
  };

  useEffect(() => {
    const dispose = createListener();
    return () => {
      dispose.then((dispose) => dispose());
    };
  }, []);
  return <></>;
};
