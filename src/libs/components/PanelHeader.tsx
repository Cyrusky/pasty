import { observer } from "mobx-react";
import { FC, PropsWithChildren } from "react";

export const PanelHeader: FC<PropsWithChildren> = observer(({ children }) => {
  return (
    <>
      <div className="h-6 size-3 w-full mt-2">{children}</div>
      <div className="divider p-0 m-1"></div>
    </>
  );
});
