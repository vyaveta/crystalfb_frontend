import { useEffect } from "react";

export const useClickOutside = (ref, fun) => {
  try {
    useEffect(() => {
      const listener = (e) => {
        try {
          console.log("[CLICK_OUTSIDE-REF]", ref.current.contains(e.target));
          if (!ref?.current || ref?.current.contains(e.target)) return;
          fun();
        } catch (_) {
          // not gonna do anything
        }
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart",listener);
      };
    }, [ref]);
  } catch (_) {
    // no gonna do anything :)
  }
};
