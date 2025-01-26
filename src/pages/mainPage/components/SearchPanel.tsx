import { FaSearch } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export const SearchPanel = () => {
  const { t } = useTranslation();

  return (
    <div className="search-box">
      <label className="input input-bordered flex items-center gap-2 w-full">
        <input
          type="text"
          className="grow"
          placeholder={t("main.search-panel.search")}
        />
        <FaSearch />
      </label>
    </div>
  );
};
