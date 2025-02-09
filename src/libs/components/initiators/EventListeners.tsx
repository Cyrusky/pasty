import { useEffect } from "react";
import { listen } from "@tauri-apps/api/event";
import { useService } from "@/hooks/useService.ts";
import { ServiceNames } from "@/libs/constants";

export const EventListeners = () => {
  const pastyService = useService(ServiceNames.PastyService);

  const createListener = async () => {
    try {
      return await listen("clipboard-monitor/update", () => {
        pastyService.loadPasty().then((res) => {
          console.trace("load pasty", res);
        });
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
