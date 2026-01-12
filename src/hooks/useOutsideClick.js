import { useEffect } from "react";

export function useOutsideClick(onClose) {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return handleOverlayClick;
}
