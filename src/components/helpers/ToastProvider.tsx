"use client";
import { type FC, createContext, useRef } from "react";

interface ToastContextProps {
  showToast: (message: string, duration: number) => void;
}
interface ToastProviderProps {
  children: React.ReactNode;
}

const ToastContext = createContext<ToastContextProps | null>(null);

export const ToastProvider: FC<ToastProviderProps> = ({ children }) => {
  const toastContainerRef = useRef<HTMLDivElement | null>(null);

  const showToast = (message: string, duration: number) => {
    const toastContainer = toastContainerRef.current;

    if (toastContainer) {
      const toast = document.createElement("div");
      toast.className = "toast bg-grey-dark text-off-white rounded-lg p-5";
      toast.innerHTML = message;

      toastContainer.appendChild(toast);

      setTimeout(() => {
        if (toastContainer.contains(toast)) {
          toastContainer.removeChild(toast);
        }
      }, duration);
    }
  };
  return (
    <ToastContext.Provider value={{ showToast }}>
      <div
        id="toast-container"
        className="fixed top-4 md:top  inset-x-2 md:right-4 md:left-auto z-50"
        ref={toastContainerRef}
      />
      {children}
    </ToastContext.Provider>
  );
};

export default ToastContext;
