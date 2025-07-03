import { useEffect, useRef } from "react";

export const useOutsideClick = (callback: () => void) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const element = event.target as HTMLElement;

      const dialog = document.getElementsByTagName("dialog");
      const openedDialog = dialog[0].hasAttribute("open");
      if (
        openedDialog &&
        element.classList.value.indexOf("modal-dialog") !== 0
      ) {
        dialog[0].close();
      }

      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener("mouseup", handleClickOutside);
    document.addEventListener("touchend", handleClickOutside);

    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
      document.removeEventListener("touchend", handleClickOutside);
    };
  }, [callback]);

  return ref;
};
