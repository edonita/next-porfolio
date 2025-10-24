"use client";
import { Toast, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from "@/components/ui/toast";

export function Toaster() {
  return (
    <ToastProvider>
      <Toast>
        <ToastTitle>Notification</ToastTitle>
        <ToastDescription>Your portfolio is live!</ToastDescription>
        <ToastClose />
      </Toast>
      <ToastViewport />
    </ToastProvider>
  );
}
