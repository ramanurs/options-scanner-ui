/**
 * Auth API Service
 * Handles authentication-related API calls
 */

import axiosClient from './axiosClient';
import { logger } from '../utils/logger';

const AUTH_ENDPOINT = '/auth';

export const authService = {
  /**
   * User login
   */
  login: async (credentials) => {
    try {
      logger.info('User login attempt', { username: credentials.username });
      const response = await axiosClient.post(`${AUTH_ENDPOINT}/login`, credentials);
      logger.info('User logged in successfully');
      // Store token in localStorage
      if (response.data.token) {
        localStorage.setItem('authToken', response.data.token);
        logger.debug('Auth token stored');
      }
      return response.data;
    } catch (error) {
      logger.error('Login failed', { error: error.message });
      throw error;
    }
  },

  /**
   * User registration
   */
  register: async (userData) => {
    try {
      logger.info('User registration attempt', { username: userData.username });
      const response = await axiosClient.post(`${AUTH_ENDPOINT}/register`, userData);
      logger.info('User registered successfully');
      return response.data;
    } catch (error) {
      logger.error('Registration failed', { error: error.message });
      throw error;
    }
  },

  /**
   * Get current user profile
   */
  getProfile: async () => {
    try {
      logger.info('Fetching user profile');
      const response = await axiosClient.get(`${AUTH_ENDPOINT}/profile`);
      logger.info('User profile fetched successfully');
      return response.data;
    } catch (error) {
      logger.error('Failed to fetch profile', { error: error.message });
      throw error;
    }
  },

  /**
   * User logout
   */
  logout: async () => {
    try {
      logger.info('User logout');
      localStorage.removeItem('authToken');
      await axiosClient.post(`${AUTH_ENDPOINT}/logout`);
      logger.info('User logged out successfully');
    } catch (error) {
      logger.error('Logout failed', { error: error.message });
      throw error;
    }
  },

  /**
   * Refresh authentication token
   */
  refreshToken: async () => {
    try {
      logger.info('Refreshing auth token');
      const response = await axiosClient.post(`${AUTH_ENDPOINT}/refresh`);
      if (response.data.token) {
        localStorage.setItem('authToken', response.data.token);
      }
      logger.info('Auth token refreshed successfully');
      return response.data;
    } catch (error) {
      logger.error('Token refresh failed', { error: error.message });
      throw error;
    }
  },
};

export default authService;
