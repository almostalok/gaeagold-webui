export const getBaseUrl = () => {
  return process.env.NEXT_PUBLIC_SERVICE_BASE_URL || 'http://localhost:8000/api';
};
