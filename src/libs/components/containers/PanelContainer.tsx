import "./PanelContainer.less";
import { observer } from "mobx-react-lite";
import type { FC, PropsWithChildren } from "react";

export const PanelContainer: FC<PropsWithChildren> = observer(
  ({ children }) => {
    return <div className="panel-container">{children}</div>;
  },
);
