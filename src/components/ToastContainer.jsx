/**
 * Toast Container Component
 * Displays toast notifications on the screen
 */

import React from 'react';
import { Box, Alert, Slide } from '@mui/material';
import { useToast } from '../hooks/useToast';

export const ToastContainer = () => {
  const { toasts, removeToast } = useToast();

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 20,
        right: 20,
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        maxWidth: 400,
        pointerEvents: 'none',
      }}
    >
      {toasts.map((toast) => (
        <Slide direction="left" in={true} key={toast.id}>
          <Alert
            severity={toast.type}
            onClose={() => removeToast(toast.id)}
            sx={{
              pointerEvents: 'auto',
              boxShadow: 2,
              backgroundColor: getBackgroundColor(toast.type),
              color: '#fff',
              '& .MuiAlert-icon': {
                color: '#fff',
              },
              '& .MuiAlert-closeIcon': {
                color: '#fff',
              },
            }}
          >
            {toast.message}
          </Alert>
        </Slide>
      ))}
    </Box>
  );
};

function getBackgroundColor(type) {
  const colors = {
    success: '#4caf50',
    error: '#f44336',
    warning: '#ff9800',
    info: '#2196f3',
  };
  return colors[type] || colors.info;
}

export default ToastContainer;
