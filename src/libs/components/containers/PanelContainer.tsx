import "./PanelContainer.scss";
import { observer } from "mobx-react-lite";
import type { FC, PropsWithChildren } from "react";
import { MacScrollbar } from "mac-scrollbar";

export const PanelContainer: FC<PropsWithChildren> = observer(
  ({ children }) => {
    return <MacScrollbar className="panel-container">{children}</MacScrollbar>;
  },
);
