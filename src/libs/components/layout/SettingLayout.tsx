import { FC, ReactNode } from "react";

interface SettingLayoutProps {
  leftPanel: ReactNode;
  rightPanel: ReactNode;
}

export const SettingLayout: FC<SettingLayoutProps> = ({
  leftPanel,
  rightPanel,
}) => {
  return (
    <div className="flex flex-row h-full bg-base-200">
      <div className="w-56 border-r-2 border-r-base-100">{leftPanel}</div>
      <div className="flex-1 p-3">{rightPanel}</div>
    </div>
  );
};
