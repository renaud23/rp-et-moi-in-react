import { useCallback } from "react";
import Img from "./Logo_Insee.png";
import classnames from "classnames";

function LogoInsee({ mediaType }) {
  const onTouchEnd = useCallback(function () {
    window.location.replace("https://www.insee.fr");
  }, []);

  const onClick = useCallback(
    function () {
      if (mediaType === "desktop") {
        window.location.replace("https://www.insee.fr");
      }
    },
    [mediaType]
  );

  return (
    <div
      className={classnames("logo-insee")}
      onTouchEnd={onTouchEnd}
      onClick={onClick}
    >
      <img src={Img} alt="logo-insee" />
    </div>
  );
}

export default LogoInsee;
