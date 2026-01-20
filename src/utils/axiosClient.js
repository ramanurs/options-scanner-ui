/**
 * Axios HTTP Client
 * Configured with base URL, interceptors, and error handling
 */

import axios from 'axios';
import { apiConfig } from '../config/apiConfig';
import { logger } from './logger';

const axiosClient = axios.create({
  baseURL: apiConfig.baseUrl,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Request Interceptor
 * Logs outgoing requests and adds authorization headers if needed
 */
axiosClient.interceptors.request.use(
  (config) => {
    logger.debug('API Request', {
      method: config.method.toUpperCase(),
      url: config.url,
      data: config.data || null,
    });

    // Add authorization token if available
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      logger.debug('Authorization token added to request');
    }

    return config;
  },
  (error) => {
    logger.error('Request interceptor error', { error: error.message });
    return Promise.reject(error);
  }
);

/**
 * Response Interceptor
 * Logs responses and handles errors globally
 */
axiosClient.interceptors.response.use(
  (response) => {
    logger.debug('API Response', {
      status: response.status,
      url: response.config.url,
      dataSize: response.data ? JSON.stringify(response.data).length : 0,
    });
    return response;
  },
  (error) => {
    const errorMessage = error.response?.data?.message || error.message;
    const errorStatus = error.response?.status;

    logger.error('API Error', {
      status: errorStatus,
      message: errorMessage,
      url: error.config?.url,
      method: error.config?.method?.toUpperCase(),
    });

    // Handle specific status codes
    if (errorStatus === 401) {
      logger.warn('Unauthorized - clearing auth token');
      localStorage.removeItem('authToken');
      // Could redirect to login here
    }

    if (errorStatus === 403) {
      logger.warn('Forbidden - insufficient permissions');
    }

    if (errorStatus >= 500) {
      logger.error('Server error occurred', { status: errorStatus });
    }

    return Promise.reject(error);
  }
);

export default axiosClient;
