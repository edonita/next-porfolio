// hooks/use-toast.ts
import { useState } from "react";

export function useToast() {
  const [toasts, setToasts] = useState<string[]>([]);

  const addToast = (message: string) => setToasts([...toasts, message]);
  const removeToast = (message: string) =>
    setToasts(toasts.filter((t) => t !== message));

  return { toasts, addToast, removeToast };
}
