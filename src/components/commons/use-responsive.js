import { useEffect, useCallback, useState } from "react";

function getWindowHeight() {
  return (
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth
  );
}

function getType() {
  const width = getWindowHeight();
  if (width <= 1200) {
    return "mobile";
  }
  return "desktop";
}

function useResponsive() {
  const [type, setType] = useState(undefined);

  const onResize = useCallback(function (args) {
    setType(getType());
  }, []);

  useEffect(
    function () {
      setType(getType());
      window.addEventListener("resize", onResize);
      return () => {
        window.removeEventListener("resize", onResize);
      };
    },
    [onResize]
  );

  return type;
}

export default useResponsive;
