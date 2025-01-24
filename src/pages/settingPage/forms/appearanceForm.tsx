import { observer } from "mobx-react";
import { map } from "lodash-es";
import { Themes } from "@/libs/constants/settings.ts";
import { ServiceNames, StoreNames } from "@/libs/constants";
import { useService } from "@/hooks/useService.ts";
import clsx from "clsx";
import { useStore } from "@/hooks";
import camelcase from "camelcase";

export const AppearanceForm = observer(() => {
  const colors = ["primary", "secondary", "accent", "neutral"];
  const appService = useService(ServiceNames.App);
  const settingStore = useStore(StoreNames.Setting);

  const handleClickTheme = (e: Themes) => {
    appService.setTheme(e);
  };

  return (
    <div className="flex-1 overflow-scroll">
      <div className="rounded-box grid gap-4 grid-cols-3 pr-3">
        {map(Themes, (theme, key) => (
          <div
            onClick={() => handleClickTheme(theme)}
            key={key}
            className={clsx(
              "rounded-box border-base-content/20 hover:border-base-content/40 cursor-pointer",
              { active: settingStore.theme === theme },
            )}
            data-act-class="!outline-base-content"
            data-set-theme={theme}
          >
            <div className="theme-preview border-2" data-theme={theme}>
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
          </div>
        ))}
      </div>
    </div>
  );
});
