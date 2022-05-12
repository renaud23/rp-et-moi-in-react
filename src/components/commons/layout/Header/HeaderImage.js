import classnames from "classnames";
import ImageDesktop from "./header-desktop-logo.svg";
import ImageMobile from "./header-mobile-logo.svg";
import "./header-image.scss";

function getImage(mediaType) {
  if (mediaType === "desktop") {
    return ImageDesktop;
  }
  return ImageMobile;
}

function HeaderImage({ mediaType }) {
  return (
    <div className={classnames("header-image", mediaType)}>
      <img src={getImage(mediaType)} alt="image header" />
    </div>
  );
}

export default HeaderImage;
