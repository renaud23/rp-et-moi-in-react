import { useCallback } from "react";
import classnames from "classnames";
import "./Popper.scss";

function Popper({ className, display, close, children, id }) {
  const onTouchEnd = useCallback(
    function (e) {
      e.stopPropagation();
      close();
    },
    [close]
  );

  if (display) {
    return (
      <div
        className={classnames("popper", className)}
        onTouchEnd={onTouchEnd}
        id={id}
      >
        {children}
      </div>
    );
  }
  return null;
}

export default Popper;
