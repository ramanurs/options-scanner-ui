import React from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';

export const DashboardPage = () => {
  return (
    <Box>
      <Typography variant="h3" sx={{ mb: 3, fontWeight: 700 }}>
        Trading Dashboard
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: 3, color: 'text.secondary' }}>
        Your trader's cockpit - Monitor your options and positions
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 2, textAlign: 'center' }}>
            <Typography color="textSecondary" gutterBottom>
              Total Positions
            </Typography>
            <Typography variant="h5">0</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 2, textAlign: 'center' }}>
            <Typography color="textSecondary" gutterBottom>
              P&L
            </Typography>
            <Typography variant="h5" sx={{ color: 'green' }}>
              $0.00
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 2, textAlign: 'center' }}>
            <Typography color="textSecondary" gutterBottom>
              Win Rate
            </Typography>
            <Typography variant="h5">0%</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 2, textAlign: 'center' }}>
            <Typography color="textSecondary" gutterBottom>
              Trades Today
            </Typography>
            <Typography variant="h5">0</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};
