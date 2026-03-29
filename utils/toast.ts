import { toast } from 'sonner';

export const showToast = {
  success: (message: string) =>
    toast.success(message, {
      duration: 3000,
      className: 'toast-success',
    }),

  error: (message: string) =>
    toast.error(message, {
      duration: 4000,
      className: 'toast-error',
    }),

  info: (message: string) =>
    toast.info(message, {
      duration: 3000,
      className: 'toast-info',
    }),

  warning: (message: string) =>
    toast.warning(message, {
      duration: 4000,
      className: 'toast-warning',
    }),

  loading: (message: string) =>
    toast.loading(message, {
      duration: 2000,
      className: 'toast-loading',
    }),
};
