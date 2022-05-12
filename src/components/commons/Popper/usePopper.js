import { useState, useCallback } from "react";
import Popper from "./Popper";

function usePopper() {
  const [display, setDisplay] = useState(false);

  const open = useCallback(
    function () {
      if (!display) {
        setDisplay(true);
      }
    },
    [display]
  );

  const close = useCallback(
    function () {
      if (display) {
        setDisplay(false);
      }
    },
    [display]
  );

  return {
    open,
    close,
    Popper: ({ className, children }) => (
      <Popper className={className} display={display} close={close}>
        {children}
      </Popper>
    ),
  };
}

export default usePopper;
