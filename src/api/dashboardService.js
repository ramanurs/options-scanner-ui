/**
 * Dashboard API Service
 * Handles dashboard-related API calls for analytics and charts
 */

import axiosClient from './axiosClient';
import { logger } from '../utils/logger';

const DASHBOARD_ENDPOINT = '/dashboard';

export const dashboardService = {
  /**
   * Get dashboard metrics
   */
  getMetrics: async () => {
    try {
      logger.info('Fetching dashboard metrics');
      const response = await axiosClient.get(`${DASHBOARD_ENDPOINT}/metrics`);
      logger.info('Dashboard metrics fetched successfully');
      return response.data;
    } catch (error) {
      logger.error('Failed to fetch dashboard metrics', { error: error.message });
      throw error;
    }
  },

  /**
   * Get trading summary
   */
  getTradingSummary: async () => {
    try {
      logger.info('Fetching trading summary');
      const response = await axiosClient.get(`${DASHBOARD_ENDPOINT}/summary`);
      logger.info('Trading summary fetched successfully');
      return response.data;
    } catch (error) {
      logger.error('Failed to fetch trading summary', { error: error.message });
      throw error;
    }
  },

  /**
   * Get performance data
   */
  getPerformance: async (params = {}) => {
    try {
      logger.info('Fetching performance data', { params });
      const response = await axiosClient.get(`${DASHBOARD_ENDPOINT}/performance`, { params });
      logger.info('Performance data fetched successfully');
      return response.data;
    } catch (error) {
      logger.error('Failed to fetch performance data', { error: error.message });
      throw error;
    }
  },
};

export default dashboardService;
