import type { AxiosError } from 'axios';

type ErrorResponse = {
  detail?: string;
};

const getDetailMessage = (error: AxiosError<ErrorResponse> | undefined | null): string | null => {
  if (error?.response?.data?.detail) {
    return error.response.data.detail;
  }
  return null;
};

const getStatusMessage = (status: number | undefined): string | null => {
  switch (status) {
    case 500:
      return 'Internal Server Error. Please contact support.';
    default:
      return null;
  }
};

const getErrorMessageFromCode = (code: string | undefined): string | null => {
  switch (code) {
    case 'ECONNABORTED':
      return 'Connection Timeout. Please try again.';
    case 'ERR_NETWORK':
      return 'Please check your internet connection.';
    default:
      return null;
  }
};

const axiosCatchErrorMsg = (error: unknown): string => {
  if (!error || typeof error !== 'object') {
    return 'An error occurred. please try again.';
  }

  const axiosError = error as AxiosError<ErrorResponse>;

  if (axiosError.response) {
    const detailMessage = getDetailMessage(axiosError);
    if (detailMessage !== null) {
      return detailMessage;
    }

    const statusMessage = getStatusMessage(axiosError.response.status);
    if (statusMessage !== null) {
      return statusMessage;
    }

    if (axiosError.response.statusText) {
      return axiosError.response.statusText;
    }

    return 'An error occurred. please try again.';
  }

  const codeMessage = getErrorMessageFromCode(axiosError.code);
  if (codeMessage !== null) {
    return codeMessage;
  }

  if (typeof (axiosError as { message?: unknown }).message === 'string') {
    return axiosError.message as string;
  }

  return 'An error occurred. please try again.';
};

export default axiosCatchErrorMsg;
