import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MainLayout } from './layout/MainLayout';
import { AppRoutes } from './components/AppRoutes';
import { ToastProvider } from './context/ToastContext.jsx';
import { ToastContainer } from './components/ToastContainer';
import { logger } from './utils/logger';
import './App.css';

function App() {
  logger.info('Application initialized', { environment: process.env.NODE_ENV });

  return (
    <ToastProvider>
      <Router>
        <MainLayout>
          <AppRoutes />
        </MainLayout>
        <ToastContainer />
      </Router>
    </ToastProvider>
  );
}

export default App;
