import "./PanelContainer.less";
import { observer } from "mobx-react-lite";
import type { FC, PropsWithChildren } from "react";
import { MacScrollbar } from "mac-scrollbar";

export const PanelContainer: FC<PropsWithChildren> = observer(
  ({ children }) => {
    return (
      <div className="panel-container">
        <MacScrollbar trackGap={8} skin={"light"}>
          {children}
        </MacScrollbar>
      </div>
    );
  },
);
