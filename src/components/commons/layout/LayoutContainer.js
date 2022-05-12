import classnames from "classnames";

function LayoutContainer({ children, mediaType }) {
  return (
    <div className={classnames("rp-et-moi-layout", mediaType)}>{children}</div>
  );
}

export default LayoutContainer;
