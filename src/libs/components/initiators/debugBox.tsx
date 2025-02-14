import { isWebDev } from "@/libs/utils/env.ts";

const colors = [
  "primary",
  "primary-content",
  "secondary",
  "secondary-content",
  "accent",
  "accent-content",
  "neutral",
  "neutral-content",
  "base-100",
  "base-200",
  "base-300",
  "base-content",
  "info",
  "info-content",
  "success",
  "success-content",
  "warning",
  "warning-content",
  "error",
  "error-content",
];

const colorBoxSize = 20;
export const DebugBox = () => {
  if (!isWebDev) {
    return null;
  }

  return (
    <div
      style={{
        position: "fixed",
        width: colorBoxSize,
        height: "100vh",
        left: colorBoxSize,
        top: colorBoxSize,
        display: "flex",
        flexFlow: "column nowrap",
        gap: 10,
      }}
    >
      {colors.map((color) => {
        return (
          <div
            key={color}
            style={{
              backgroundColor: `var(--color-${color})`,
              width: colorBoxSize * 3,
              height: colorBoxSize,
              fontSize: 10,
              whiteSpace: "nowrap",
              padding: 3,
              overflow: "hidden",
            }}
          >{`--color-${color}`}</div>
        );
      })}
    </div>
  );
};
