import { Link } from "react-router-dom";

function block(e) {
  e.nativeEvent.stopImmediatePropagation();
}

function MenuItem({ title, subTitle, link, onTouchEnd = block }) {
  return (
    <div className="menu-item" onTouchEnd={onTouchEnd}>
      <Link to={link}>
        <div className="titre">{title}</div>
        <div className="sous-titre">{subTitle}</div>
      </Link>
    </div>
  );
}

export default MenuItem;
