import React, { useState, useEffect } from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import { StockForm } from '../components/StockForm';
import { StockTable } from '../components/StockTable';
import { stockService } from '../api/stockService';
import { logger } from '../utils/logger';
import { useToast } from '../hooks/useToast';

export const StockListPage = () => {
  const [stocks, setStocks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { success, error } = useToast();

  // Fetch stocks on component mount
  useEffect(() => {
    logger.info('StockListPage mounted, fetching stocks...');
    fetchStocks();
  }, []);

  const fetchStocks = async () => {
    try {
      setIsLoading(true);
      const data = await stockService.getAllStocks();
      setStocks(data);
    } catch (err) {
      error('Failed to fetch stocks. Make sure backend is running.');
      logger.error('Failed to fetch stocks', { error: err.message });
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddStock = async (formData) => {
    try {
      setIsLoading(true);
      const response = await stockService.createStock(formData);
      setStocks([...stocks, response]);
      success(`Stock "${response.ticker}" added successfully!`);
    } catch (err) {
      error('Failed to add stock. Please try again.');
      logger.error('Failed to add stock', { error: err.message });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteStock = async (id) => {
    if (!window.confirm('Are you sure you want to delete this stock?')) {
      return;
    }
    try {
      setIsLoading(true);
      const deletedStock = stocks.find((stock) => stock.id === id);
      await stockService.deleteStock(id);
      setStocks(stocks.filter((stock) => stock.id !== id));
      success(`Stock "${deletedStock?.ticker}" deleted successfully!`);
    } catch (err) {
      error('Failed to delete stock. Please try again.');
      logger.error('Failed to delete stock', { error: err.message, id });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box>
      <Typography variant="h3" sx={{ mb: 3, fontWeight: 700 }}>
        Stock List Management
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: 3, color: 'text.secondary' }}>
        Your admin console - Manage your stock portfolio
      </Typography>

      <StockForm onSubmit={handleAddStock} isLoading={isLoading} />

      {isLoading && stocks.length === 0 ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <StockTable stocks={stocks} onDelete={handleDeleteStock} isLoading={isLoading} />
      )}
    </Box>
  );
};
