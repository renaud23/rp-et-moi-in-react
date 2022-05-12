import classnames from "classnames";
import "./menu.scss";

function Menu({ mediaType, children }) {
  return (
    <div className={classnames("rp-et-moi-menu", mediaType)}>
      <div className="menu-content">{children}</div>
    </div>
  );
}

export default Menu;
