export const SearchPanel = () => {
  return (
    <div className="search-box">
      <div className="hidden w-full max-w-sm lg:flex">
        <label className="searchbox relative mx-3 w-full">
          <div
            data-svelte-typeahead=""
            role="combobox"
            aria-haspopup="listbox"
            className="svelte-4tg1b1"
            aria-controls="typeahead-0.o53wgbl3h8-listbox"
            aria-expanded="false"
            id="typeahead-0.o53wgbl3h8-typeahead"
          >
            <form data-svelte-search="">
              <label
                className="svelte-wqugyy"
                id="typeahead-0.o53wgbl3h8-label"
                htmlFor="typeahead-0.o53wgbl3h8"
              >
                Search
              </label>{" "}
              <input
                name="search"
                type="search"
                placeholder="Search…"
                autoComplete="off"
                spellCheck="true"
                aria-autocomplete="list"
                aria-controls="typeahead-0.o53wgbl3h8-listbox"
                aria-labelledby="typeahead-0.o53wgbl3h8-label"
                id="typeahead-0.o53wgbl3h8"
                className="svelte-wqugyy"
              />
            </form>

            <ul
              role="listbox"
              className="svelte-4tg1b1 svelte-typeahead-list"
              aria-labelledby="typeahead-0.o53wgbl3h8-label"
              id="typeahead-0.o53wgbl3h8-listbox"
            >
              {" "}
            </ul>
          </div>

          <div className="pointer-events-none absolute end-10 top-2.5 gap-1 opacity-50 rtl:flex-row-reverse hidden lg:flex">
            <kbd className="kbd kbd-sm">⌘</kbd>{" "}
            <kbd className="kbd kbd-sm">K</kbd>
          </div>
        </label>
      </div>
    </div>
  );
};
