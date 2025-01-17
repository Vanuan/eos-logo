import { useEffect, useState } from "react";
const useOrientation = () => {
  const [isLandscape, setIsLandscape] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(orientation: landscape)");
    setIsLandscape(mediaQuery.matches);

    const handleOrientationChange = (e: MediaQueryListEvent) => {
      setIsLandscape(e.matches);
    };

    mediaQuery.addEventListener("change", handleOrientationChange);
    return () =>
      mediaQuery.removeEventListener("change", handleOrientationChange);
  }, []);

  return isLandscape;
};
export default useOrientation;
