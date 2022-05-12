import useResponsive from "../use-responsive";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import LayoutContainer from "./LayoutContainer";
import "./Layout.scss";

function Layout({ children }) {
  const mediaType = useResponsive();
  return (
    <LayoutContainer mediaType={mediaType}>
      <Header mediaType={mediaType} />
      <Content mediaType={mediaType}>{children}</Content>
      <Footer mediaType={mediaType} />
    </LayoutContainer>
  );
}

export default Layout;
