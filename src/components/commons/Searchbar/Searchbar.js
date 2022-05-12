import SearchbarDesktop from "./SearchbarDesktop";
import SearchbarMobile from "./SearchbarMobile";
import "./Searchbar.scss";

function Searchbar({ onChange, onSearch, mediaType, className }) {
  if (mediaType === "desktop") {
    return (
      <SearchbarDesktop
        className={className}
        onChange={onChange}
        onSearch={onSearch}
      />
    );
  }
  return (
    <SearchbarMobile
      className={className}
      onChange={onChange}
      onSearch={onSearch}
    />
  );
}

Searchbar.defaultProps = {
  onChange: () => null,
  mediaType: "mobile",
};

export default Searchbar;
