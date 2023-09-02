"use client"

import { createContext, useRef, type FC, type ReactNode } from "react"

interface ToastContextProps {
  showToast: (message: string, duration: number) => void
}
interface ToastProviderProps {
  children: ReactNode
}

const ToastContext = createContext<ToastContextProps | null>(null)

export const ToastProvider: FC<ToastProviderProps> = ({ children }) => {
  const toastContainerRef = useRef<HTMLDivElement | null>(null)

  const showToast = (message: string, duration: number) => {
    const toastContainer = toastContainerRef.current

    if (toastContainer) {
      const toast = document.createElement("div")
      toast.className = "bg-primary-gradient text-off-white rounded-lg p-5 border border-grey-dark"
      toast.innerHTML = message

      toastContainer.appendChild(toast)

      setTimeout(() => {
        if (toastContainer.contains(toast)) {
          toastContainer.removeChild(toast)
        }
      }, duration)
    }
  }
  return (
    <ToastContext.Provider value={{ showToast }}>
      <div
        id="toast-container"
        className="fixed inset-x-2  bottom-4 z-50 md:left-auto md:right-4"
        ref={toastContainerRef}
      />
      {children}
    </ToastContext.Provider>
  )
}

export default ToastContext
