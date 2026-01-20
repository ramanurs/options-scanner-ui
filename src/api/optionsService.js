/**
 * Options API Service
 * Handles options chain and options data API calls
 */

import axiosClient from './axiosClient';
import { logger } from '../utils/logger';

const OPTIONS_ENDPOINT = '/options';

export const optionsService = {
  /**
   * Get options chain for a stock
   */
  getOptionsChain: async (ticker, params = {}) => {
    try {
      logger.info('Fetching options chain', { ticker, params });
      const response = await axiosClient.get(`${OPTIONS_ENDPOINT}/chain/${ticker}`, { params });
      logger.info('Options chain fetched successfully', { ticker });
      return response.data;
    } catch (error) {
      logger.error('Failed to fetch options chain', { error: error.message, ticker });
      throw error;
    }
  },

  /**
   * Get options quotes
   */
  getQuotes: async (params = {}) => {
    try {
      logger.info('Fetching options quotes', { params });
      const response = await axiosClient.get(`${OPTIONS_ENDPOINT}/quotes`, { params });
      logger.info('Options quotes fetched successfully');
      return response.data;
    } catch (error) {
      logger.error('Failed to fetch options quotes', { error: error.message });
      throw error;
    }
  },

  /**
   * Search options by criteria
   */
  search: async (searchParams) => {
    try {
      logger.info('Searching options', { searchParams });
      const response = await axiosClient.post(`${OPTIONS_ENDPOINT}/search`, searchParams);
      logger.info('Options search completed');
      return response.data;
    } catch (error) {
      logger.error('Failed to search options', { error: error.message });
      throw error;
    }
  },
};

export default optionsService;
