import { useState, useRef, useEffect, useCallback } from "react";
import classnames from "classnames";
import loupe from "./picto-loupe-bleu.png";

function stopPropagation(e) {
  e.stopPropagation();
}

function SearchbarDesktop({
  className,
  onSearch,
  focused: focusedProps = false,
}) {
  const inputEl = useRef();
  const [focused, setFocused] = useState(focusedProps);

  useEffect(
    function () {
      const { current } = inputEl;
      if (focused) {
        current.focus();
      }
    },
    [focused, inputEl]
  );

  const onSearchEx = useCallback(
    function (e) {
      e.stopPropagation();
      onSearch(inputEl.current.value);
    },
    [onSearch, inputEl]
  );

  return (
    <div
      className={classnames("rp-et-moi-searchbar", "desktop", className, {
        focused,
      })}
      role="search"
    >
      <input
        tabIndex="0"
        type="text"
        className="recherche"
        ref={inputEl}
        onTouchEnd={stopPropagation}
      />
      <button
        className="on-search"
        onTouchEnd={onSearchEx}
        onClick={onSearchEx}
      >
        <img src={loupe} alt="recherche" className="icon" />
      </button>
    </div>
  );
}

export default SearchbarDesktop;
