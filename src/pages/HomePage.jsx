import React from 'react';
import { Box, Typography, Paper, Stack } from '@mui/material';

export const HomePage = () => {
  return (
    <Box>
      <Typography variant="h3" sx={{ mb: 3, fontWeight: 700 }}>
        Welcome to Options Scanner
      </Typography>
      <Paper sx={{ p: 4 }}>
        <Stack spacing={2}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Get Started:
          </Typography>
          <Typography variant="body1">
            📊 <strong>Dashboard</strong> - View your trading analytics and market data
          </Typography>
          <Typography variant="body1">
            🗄️ <strong>Stock List</strong> - Manage your stock portfolio (Admin Page)
          </Typography>
        </Stack>
      </Paper>
    </Box>
  );
};
