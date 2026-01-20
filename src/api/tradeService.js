/**
 * Trade API Service
 * Handles trade and order management API calls
 */

import axiosClient from './axiosClient';
import { logger } from '../utils/logger';

const TRADE_ENDPOINT = '/trades';

export const tradeService = {
  /**
   * Get all trades
   */
  getAllTrades: async (params = {}) => {
    try {
      logger.info('Fetching all trades', { params });
      const response = await axiosClient.get(TRADE_ENDPOINT, { params });
      logger.info('Trades fetched successfully', { count: response.data.length });
      return response.data;
    } catch (error) {
      logger.error('Failed to fetch trades', { error: error.message });
      throw error;
    }
  },

  /**
   * Get trade by ID
   */
  getTradeById: async (id) => {
    try {
      logger.info('Fetching trade by ID', { id });
      const response = await axiosClient.get(`${TRADE_ENDPOINT}/${id}`);
      logger.info('Trade fetched successfully', { id });
      return response.data;
    } catch (error) {
      logger.error('Failed to fetch trade', { error: error.message, id });
      throw error;
    }
  },

  /**
   * Create new trade
   */
  createTrade: async (tradeData) => {
    try {
      logger.info('Creating new trade', { data: tradeData });
      const response = await axiosClient.post(TRADE_ENDPOINT, tradeData);
      logger.info('Trade created successfully', { trade: response.data });
      return response.data;
    } catch (error) {
      logger.error('Failed to create trade', { error: error.message });
      throw error;
    }
  },

  /**
   * Update trade
   */
  updateTrade: async (id, tradeData) => {
    try {
      logger.info('Updating trade', { id, data: tradeData });
      const response = await axiosClient.put(`${TRADE_ENDPOINT}/${id}`, tradeData);
      logger.info('Trade updated successfully', { id });
      return response.data;
    } catch (error) {
      logger.error('Failed to update trade', { error: error.message, id });
      throw error;
    }
  },

  /**
   * Close trade
   */
  closeTrade: async (id, closeData) => {
    try {
      logger.info('Closing trade', { id });
      const response = await axiosClient.post(`${TRADE_ENDPOINT}/${id}/close`, closeData);
      logger.info('Trade closed successfully', { id });
      return response.data;
    } catch (error) {
      logger.error('Failed to close trade', { error: error.message, id });
      throw error;
    }
  },

  /**
   * Delete trade
   */
  deleteTrade: async (id) => {
    try {
      logger.info('Deleting trade', { id });
      const response = await axiosClient.delete(`${TRADE_ENDPOINT}/${id}`);
      logger.info('Trade deleted successfully', { id });
      return response.data;
    } catch (error) {
      logger.error('Failed to delete trade', { error: error.message, id });
      throw error;
    }
  },
};

export default tradeService;
