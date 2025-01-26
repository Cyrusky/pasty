import { IoSettingsSharp } from "react-icons/io5";
import { MdGTranslate, MdOutlineTipsAndUpdates } from "react-icons/md";
import { useService } from "@/hooks/useService.ts";
import { ServiceNames } from "@/libs/constants";
import { Link } from "react-router";
import { paths } from "@/router/routes.tsx";

export const FooterPanel = () => {
  const appService = useService(ServiceNames.App);

  const handleI18nClick = () => {
    appService.switchLocales();
  };

  return (
    <div className="footer-panel">
      <div className="left-tips"></div>
      <div className="right-tips">
        <MdGTranslate onClick={handleI18nClick} />
        <MdOutlineTipsAndUpdates />
        <Link to={paths.settings}>
          <IoSettingsSharp />
        </Link>
      </div>
    </div>
  );
};
