/**
 * Stock API Service
 * Handles all stock-related API calls
 */

import axiosClient from '../utils/axiosClient';
import { logger } from '../utils/logger';

const STOCK_ENDPOINT = '/stocks';

export const stockService = {
  /**
   * Get all stocks
   */
  getAllStocks: async () => {
    try {
      logger.info('Fetching all stocks');
      const response = await axiosClient.get(STOCK_ENDPOINT);
      logger.info('Stocks fetched successfully', { count: response.data.length });
      return response.data;
    } catch (error) {
      logger.error('Failed to fetch stocks', { error: error.message });
      throw error;
    }
  },

  /**
   * Get stock by ID
   */
  getStockById: async (id) => {
    try {
      logger.info('Fetching stock by ID', { id });
      const response = await axiosClient.get(`${STOCK_ENDPOINT}/${id}`);
      logger.info('Stock fetched successfully', { id });
      return response.data;
    } catch (error) {
      logger.error('Failed to fetch stock', { error: error.message, id });
      throw error;
    }
  },

  /**
   * Create new stock
   */
  createStock: async (stockData) => {
    try {
      logger.info('Creating new stock', { data: stockData });
      const response = await axiosClient.post(STOCK_ENDPOINT, stockData);
      logger.info('Stock created successfully', { stock: response.data });
      return response.data;
    } catch (error) {
      logger.error('Failed to create stock', { error: error.message, data: stockData });
      throw error;
    }
  },

  /**
   * Update stock
   */
  updateStock: async (id, stockData) => {
    try {
      logger.info('Updating stock', { id, data: stockData });
      const response = await axiosClient.put(`${STOCK_ENDPOINT}/${id}`, stockData);
      logger.info('Stock updated successfully', { id, stock: response.data });
      return response.data;
    } catch (error) {
      logger.error('Failed to update stock', { error: error.message, id });
      throw error;
    }
  },

  /**
   * Delete stock
   */
  deleteStock: async (id) => {
    try {
      logger.info('Deleting stock', { id });
      const response = await axiosClient.delete(`${STOCK_ENDPOINT}/${id}`);
      logger.info('Stock deleted successfully', { id });
      return response.data;
    } catch (error) {
      logger.error('Failed to delete stock', { error: error.message, id });
      throw error;
    }
  },
};

export default stockService;
