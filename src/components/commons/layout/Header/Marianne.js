import { Logo } from "@dataesr/react-dsfr";
import classnames from "classnames";

function Marianne({ mediaType, className }) {
  return (
    <Logo className={classnames("Marianne", className)} mediaType={mediaType}>
      République Française
    </Logo>
  );
}

export default Marianne;
