const getDetailMessage = (error) => {
  if (error.response?.data?.detail) {
    return error.response.data.detail;
  }
  return null;
};

const getStatusMessage = (status) => {
  switch (status) {
    case 500:
      return 'Internal Server Error. Please contact support.';
    default:
      return null;
  }
};

const getErrorMessageFromCode = (code) => {
  switch (code) {
    case 'ECONNABORTED':
      return 'Connection Timeout. Please try again.';
    case 'ERR_NETWORK':
      return 'Please check your internet connection.';
    default:
      return null;
  }
};

const axiosCatchErrorMsg = (error) => {
  if (error.response) {
    const detailMessage = getDetailMessage(error);
    if (detailMessage !== null) {
      return detailMessage;
    }

    const statusMessage = getStatusMessage(error.response.status);
    if (statusMessage !== null) {
      return statusMessage;
    }

    if (error.response.statusText) {
      return error.response.statusText;
    }

    return 'An error occurred. please try again.';
  }

  const codeMessage = getErrorMessageFromCode(error.code);
  if (codeMessage !== null) {
    return codeMessage;
  }

  if (error.message) {
    return error.message;
  }

  return 'An error occurred. please try again.';
};

export default axiosCatchErrorMsg;
