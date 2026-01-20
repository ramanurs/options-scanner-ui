/**
 * API Configuration
 * Centralized configuration for API endpoints and settings
 */

// For development, use relative path (proxied by Vite)
// For production, use full URL from environment variable
const API_BASE_URL = import.meta.env.PROD
  ? import.meta.env.VITE_API_BASE_URL || 'https://api.yourdomain.com/api'
  : '/api';

const LOG_LEVEL = import.meta.env.VITE_LOG_LEVEL || 'debug';
const ENV = import.meta.env.VITE_ENV || 'development';

export const apiConfig = {
  baseUrl: API_BASE_URL,
  logLevel: LOG_LEVEL,
  env: ENV,
  endpoints: {
    stocks: '/stocks',
  },
};

export default apiConfig;
