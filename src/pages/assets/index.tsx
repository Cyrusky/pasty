import React from "react";
import "./index.less";
import { PageContainer } from "@/libs/components/containers/PageContainer.tsx";
import { observer } from "mobx-react-lite";
import { MdDeleteOutline, MdOutlineContentCopy } from "react-icons/md";
import { FaRegPaste } from "react-icons/fa6";
import { TiPinOutline } from "react-icons/ti";
import { useStore } from "@/hooks";
import { StoreNames } from "@/libs/constants";
import { ConfigKeys } from "@/types";

const size = 40;

export const Assets: React.FC = observer(() => {
  const configStore = useStore(StoreNames.Configs);

  const icons = [
    {
      components: <MdOutlineContentCopy size={size / 2} />,
      onClick: () => {
        configStore.updateConfig({
          key: ConfigKeys.AppLocal,
          value: "zh_CN",
        });
      },
    },
    {
      components: <FaRegPaste size={size / 2} />,
      onClick: () => {},
    },
    {
      components: <MdDeleteOutline size={size / 2} />,
      onClick: () => {},
    },
    {
      components: <TiPinOutline size={size / 2} />,
      onClick: () => {},
    },
  ];

  return (
    <PageContainer className="flex flex-row w-full">
      <div
        style={{
          padding: 20,
          width: "100%",
          display: "flex",
          flexFlow: "row wrap",
          gap: 10,
        }}
      >
        {icons.map((icon, index) => {
          return (
            <div
              key={index}
              style={{
                backgroundColor: `var(--color-base-200)`,
                height: size,
                width: size,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: 10,
                borderRadius: 10,
                boxShadow: "0 0 10px var(--color-success-content)",
              }}
              onClick={() => {
                icon.onClick();
              }}
            >
              {icon.components}
            </div>
          );
        })}
      </div>
    </PageContainer>
  );
});
