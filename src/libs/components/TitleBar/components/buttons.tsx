import "./buttons.less";
import {
  minimize,
  randomTheme,
  switchLocale,
} from "@/libs/components/TitleBar/utils.ts";
import { FC } from "react";
import { GiPin } from "react-icons/gi";
import { RiTranslateAi } from "react-icons/ri";
import { IoColorPaletteSharp } from "react-icons/io5";
import { observer } from "mobx-react-lite";
import { useStore } from "@/hooks";
import { StoreNames } from "@/libs/constants";
import { ConfigKeys } from "@/types";

export const WindowButtons: FC = observer(() => {
  const configStore = useStore(StoreNames.Configs);

  return (
    <div className="button-container">
      <div className="button">{configStore.configs[ConfigKeys.AppTheme]}</div>
      <div className="button">
        <IoColorPaletteSharp onClick={randomTheme} />
      </div>
      <div className="button">
        <RiTranslateAi onClick={switchLocale} />
      </div>
      <div className={"button"} onClick={minimize}>
        <GiPin />
      </div>
    </div>
  );
});
