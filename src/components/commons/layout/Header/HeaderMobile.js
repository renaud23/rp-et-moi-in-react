import { useCallback, useEffect, useState } from "react";
import classnames from "classnames";
import Marianne from "./Marianne";
import HeaderImage from "./HeaderImage";
import LogoInsee from "../../LogoInsee";
import Searchbar from "../../Searchbar";
import useDocumentAddEventListener from "../../use-document-add-event-listener";
import LogoShort from "./logo-short.png";
import Burger from "./Burger";
import { getWindowYScroll } from "../../getScrollPercent";
import Menu from "./Menu";
import "./header-mobile.scss";

function LongHeader({ onSearch, onChange, long }) {
  return (
    <div className="rp-et-moi-layout-header">
      <div className="bandeau">
        <div className={classnames("logo", "mobile")}>
          <Marianne mediaType="mobile" />
          <LogoInsee mediaType="mobile" />
        </div>
        <div
          className={classnames("rp-et-moi-layout-header-searchbar", "mobile")}
        >
          <div className="icons">
            <Burger />
            <Searchbar
              onChange={onChange}
              mediaType="mobile"
              onSearch={onSearch}
            />
          </div>
        </div>
      </div>
      <HeaderImage mediaType="mobile" />
      <Menu mediaType="mobile" />
    </div>
  );
}

function ShortHeader({ onSearch, onChange, long }) {
  if (long) {
    return <div className={classnames("rp-et-moi-layout-short-header")} />;
  }
  return (
    <div className={classnames("rp-et-moi-layout-short-header", "display")}>
      <div
        className={classnames("rp-et-moi-layout-header-searchbar", "mobile")}
      >
        <img className="logo" src={LogoShort} alt="logo recensement" />
        <div className="icons">
          <Burger />
          <Searchbar
            onChange={onChange}
            mediaType="mobile"
            onSearch={onSearch}
          />
        </div>
      </div>
    </div>
  );
}

function HeaderMobile({ onSearch, onChange }) {
  const [longHeader, setLongHeader] = useState(true);
  const onScroll = useCallback(function () {
    if (getWindowYScroll() > 400) {
      setLongHeader(false);
    } else {
      setLongHeader(true);
    }
  }, []);

  useDocumentAddEventListener("scroll", onScroll);

  return (
    <>
      <LongHeader onSearch={onSearch} onChange={onChange} long={longHeader} />
      <ShortHeader onSearch={onSearch} onChange={onChange} long={longHeader} />
    </>
  );
}

export default HeaderMobile;
