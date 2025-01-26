import clsx from "clsx";
import { useState } from "react";
import { uniqueId } from "lodash-es";
import { useService } from "@/hooks/useService.ts";
import { ServiceNames } from "@/libs/constants";
import { observer } from "mobx-react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const EmptyText = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
`;

export const ContentPanel = observer(() => {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState(false);
  const pastyService = useService(ServiceNames.PastyService);

  return (
    <div className="content-panel">
      {pastyService.hasPasty ? (
        <EmptyText>{t("main.empty-text")}</EmptyText>
      ) : (
        <>
          <div
            className={clsx("paste-list", {
              "paste-list-collapsed": collapsed,
              "paste-list-expand": !collapsed,
            })}
          >
            {Array(200)
              .fill(0)
              .map(() => (
                <div
                  onClick={() => setCollapsed(!collapsed)}
                  className="past-item"
                  key={uniqueId("id")}
                >
                  {Math.random()}
                </div>
              ))}
          </div>
          <div className="divider divide-y"></div>
          <div
            className={clsx("preview-panel", {
              "preview-panel-collapsed": !collapsed,
              "preview-panel-expand": collapsed,
            })}
          >
            aaa
          </div>
        </>
      )}
    </div>
  );
});
