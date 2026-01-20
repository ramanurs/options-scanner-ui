import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Box,
  Typography,
} from '@mui/material';

export const StockTable = ({ stocks, onDelete, isLoading }) => {
  if (!stocks || stocks.length === 0) {
    return (
      <Paper sx={{ p: 3, textAlign: 'center' }}>
        <Typography color="textSecondary">
          No stocks found. Add your first stock above!
        </Typography>
      </Paper>
    );
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
          <TableRow>
            <TableCell sx={{ fontWeight: 600 }}>Ticker</TableCell>
            <TableCell sx={{ fontWeight: 600 }}>Company Name</TableCell>
            <TableCell sx={{ fontWeight: 600 }}>Category</TableCell>
            <TableCell sx={{ fontWeight: 600, textAlign: 'center' }}>
              Actions
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {stocks.map((stock) => (
            <TableRow key={stock.id} hover>
              <TableCell sx={{ fontWeight: 500 }}>{stock.ticker}</TableCell>
              <TableCell>{stock.companyName}</TableCell>
              <TableCell>{stock.category}</TableCell>
              <TableCell sx={{ textAlign: 'center' }}>
                <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center' }}>
                  <Button
                    variant="outlined"
                    color="error"
                    size="small"
                    onClick={() => onDelete(stock.id)}
                    disabled={isLoading}
                  >
                    Delete
                  </Button>
                  <Button
                    variant="outlined"
                    size="small"
                    disabled
                    title="Edit functionality coming soon"
                  >
                    Edit
                  </Button>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
