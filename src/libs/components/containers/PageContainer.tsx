import "./PageContainer.scss";
import { CSSProperties, FC, PropsWithChildren } from "react";
import clsx from "clsx";

interface PageContainerProps extends PropsWithChildren {
  style?: CSSProperties;
  className?: string;
}

export const PageContainer: FC<PageContainerProps> = ({
  children,
  style,
  className,
}) => {
  return (
    <section className={clsx(["page-container", className])} style={style}>
      {children}
    </section>
  );
};
