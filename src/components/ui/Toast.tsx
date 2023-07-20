import { useState, useEffect, type FC } from "react";

interface ToastProps {
  message: string;
  duration: number;
}
const Toast: FC<ToastProps> = ({ message, duration }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [duration]);

  return isVisible ? (
    <div className="fixed top-4 right-4 bg-grey-dark text-off-white rounded-lg p-4 z-50">
      <div>{message}</div>
    </div>
  ) : null;
};

export default Toast;
