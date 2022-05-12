import classnames from "classnames";
import Marianne from "./Marianne";
import HeaderImage from "./HeaderImage";
import LogoInsee from "../../LogoInsee";
import Searchbar from "../../Searchbar";
import MenuItem from "./Menu/MenuItem";
import Separator from "./Menu/Separator";
import Menu from "./Menu";
import "./header-desktop.scss";

function HeaderDesktop({ onSearch, onChange }) {
  return (
    <div className="rp-et-moi-layout-header">
      <div className="bandeau">
        <div className={classnames("logo", "desktop")}>
          <Marianne mediaType="desktop" />
          <LogoInsee mediaType="desktop" />
        </div>
        <div
          className={classnames("rp-et-moi-layout-header-searchbar", "desktop")}
        >
          <Searchbar
            onChange={onChange}
            mediaType="desktop"
            onSearch={onSearch}
          />
        </div>
      </div>
      <div className="header-image-container">
        <HeaderImage mediaType="desktop" />
        <Menu mediaType="desktop">
          <MenuItem
            title="C'est utile"
            subTitle="des chiffres pour construire demain"
            link="/home"
          />
          <Separator />
          <MenuItem
            title="c'est simple"
            subTitle="comment ça marche"
            link="/home"
          />
          <Separator />
          <MenuItem
            title="c'est sûr"
            subTitle="vos information sont protégées"
            link="/home"
          />
          <Separator />
          <MenuItem title="vos questions" subTitle="" link="/home" />
        </Menu>
      </div>
    </div>
  );
}

export default HeaderDesktop;
