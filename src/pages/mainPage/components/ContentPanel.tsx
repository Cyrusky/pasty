import clsx from "clsx";
import { useState } from "react";
import { uniqueId } from "lodash-es";

export const ContentPanel = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="content-panel">
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
    </div>
  );
};
