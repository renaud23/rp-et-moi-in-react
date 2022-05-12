import FooterMobile from "./FooterMobile";
import FooterDesktop from "./FooterDesktop";

function Footer({ mediaType }) {
  if (mediaType === "desktop") {
    return <FooterDesktop />;
  }
  return <FooterMobile />;
}

export default Footer;
