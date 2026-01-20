import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Paper,
  Stack,
  Typography,
} from '@mui/material';

export const StockForm = ({ onSubmit, isLoading }) => {
  const [formData, setFormData] = useState({
    ticker: '',
    companyName: '',
    category: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.ticker && formData.companyName && formData.category) {
      onSubmit(formData);
      setFormData({ ticker: '', companyName: '', category: '' });
    }
  };

  return (
    <Paper sx={{ p: 3, mb: 4, backgroundColor: '#f5f5f5' }}>
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
        Add New Stock
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            label="Ticker"
            name="ticker"
            value={formData.ticker}
            onChange={handleChange}
            placeholder="e.g., AAPL"
            fullWidth
            size="small"
            required
          />
          <TextField
            label="Company Name"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="e.g., Apple Inc."
            fullWidth
            size="small"
            required
          />
          <TextField
            label="Category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="e.g., Technology"
            fullWidth
            size="small"
            required
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ backgroundColor: '#1976d2', mt: 1 }}
            disabled={isLoading}
          >
            {isLoading ? 'Adding...' : 'Add Stock'}
          </Button>
        </Stack>
      </Box>
    </Paper>
  );
};
