import { useCallback } from "react";
import classnames from "classnames";
import { usePopper } from "../Popper";
import loupe from "./picto-loupe-bleu.png";
import SearchbarDesktop from "./SearchbarDesktop";

function SearchbarMobile({ className, onChange, onSearch }) {
  const { open, Popper, close } = usePopper();

  const onTouchEnd = useCallback(
    function () {
      open();
    },
    [open]
  );

  const onSearchEx = useCallback(
    function (search) {
      onSearch(search);
      close();
    },
    [open, close]
  );

  return (
    <div className={classnames("rp-et-moi-searchbar", "mobile", className)}>
      <img
        className="icon"
        role="bouton"
        aria-controls="modal-searchbar"
        src={loupe}
        alt="recherche"
        onTouchEnd={onTouchEnd}
      />

      <Popper id="modal-searchbar" className="searchbar-mobile-popper">
        <div className="searchbar-mobile-container">
          <SearchbarDesktop
            focused={true}
            onChange={onChange}
            onSearch={onSearchEx}
          />
        </div>
      </Popper>
    </div>
  );
}

export default SearchbarMobile;
