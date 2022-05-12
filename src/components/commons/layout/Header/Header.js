import { useCallback } from "react";

import HeaderMobile from "./HeaderMobile";
import HeaderDesktop from "./HeaderDesktop";

function Header({ mediaType }) {
  const onChange = useCallback(function () {}, []);

  const onSearch = useCallback(function (search) {
    console.log({ search });
  }, []);

  if (mediaType === "desktop") {
    return <HeaderDesktop onChange={onChange} onSearch={onSearch} />;
  }
  return <HeaderMobile onChange={onChange} onSearch={onSearch} />;
}

export default Header;
