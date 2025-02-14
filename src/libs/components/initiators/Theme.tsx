import { observer } from "mobx-react-lite";
import { useStore } from "@/hooks";
import { StoreNames } from "@/libs/constants";
import { useEffect } from "react";
import { ConfigKeys } from "@/types";
import dayJs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayJs.extend(relativeTime);

export const ThemeInitiator = observer(() => {
  const configStore = useStore(StoreNames.Configs);

  useEffect(() => {
    const html = document.getElementsByTagName("html")[0];
    html.dataset["theme"] = configStore.configs[ConfigKeys.AppTheme];
  }, [configStore.configs[ConfigKeys.AppTheme]]);

  return <></>;
});
