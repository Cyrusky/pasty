import "./emptyRender.scss";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { IconPreview } from "@/components/icons";

export const EmptyPreviewRender: FC = () => {
  const { t } = useTranslation();
  return (
    <div className="render-preview empty-render-preview">
      <div>
        <IconPreview size={80} color={"var(--color-neutral-content)"} />
      </div>
      <div>{t("tips.nothing-to-preview")}</div>
    </div>
  );
};
