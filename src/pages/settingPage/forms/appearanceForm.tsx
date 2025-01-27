import { observer } from "mobx-react";
import { map } from "lodash-es";
import { Themes } from "@/libs/constants/configs.ts";
import { ServiceNames, StoreNames } from "@/libs/constants";
import { useService } from "@/hooks/useService.ts";
import clsx from "clsx";
import { useStore } from "@/hooks";
import camelcase from "camelcase";
import { FaRegCheckCircle } from "react-icons/fa";
import { ConfigKeys } from "@/types";
import { changeTheme } from "@/libs/utils/dom.ts";

export const AppearanceForm = observer(() => {
  const colors = ["primary", "secondary", "accent", "neutral"];
  const appService = useService(ServiceNames.App);
  const settingStore = useStore(StoreNames.Configs);

  const handleClickTheme = (theme: Themes) => {
    appService.setTheme(theme);
    changeTheme(theme);
  };

  return (
    <div className="flex-1 overflow-scroll">
      <div className="rounded-box grid gap-4 grid-cols-3 pr-3">
        {map(Themes, (theme, key) => (
          <div
            onClick={() => handleClickTheme(theme)}
            key={key}
            className={clsx(
              "rounded-md cursor-pointer relative border-2 overflow-hidden",
              settingStore.configs[ConfigKeys.AppTheme] === theme
                ? "border-green-500"
                : "border-base-content/20",
              { active: settingStore.configs[ConfigKeys.AppTheme] === theme },
            )}
            data-act-class="!outline-base-content"
            data-set-theme={theme}
          >
            <div className="theme-preview" data-theme={theme}>
              <div className="grid grid-cols-5 grid-rows-3">
                <div className="theme-color-1"></div>
                <div className="theme-color-2"></div>
                <div className="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
                  <div className="font-bold">{camelcase(theme)}</div>
                  <div className="flex flex-wrap gap-1">
                    {colors.map((color, index) => (
                      <div
                        className={`bg-${color} theme-color-text w-5 text-center`}
                      >
                        <div
                          className={`text-${color}-content text-sm font-bold`}
                        >
                          {["A", "B", "C", "D", "E", "F"][index]}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {settingStore.configs[ConfigKeys.AppTheme] === theme && (
              <FaRegCheckCircle className="absolute right-2 bottom-2 text-green-500" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
});
