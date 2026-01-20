/**
 * Route Configuration
 * Centralized route definitions for the application
 */

import { HomePage } from '../pages/HomePage';
import { DashboardPage } from '../pages/DashboardPage';
import { StockListPage } from '../pages/StockListPage';

export const routes = [
  {
    id: 'home',
    path: '/',
    label: 'Home',
    element: HomePage,
    description: 'Home page',
    showInNav: true,
  },
  {
    id: 'dashboard',
    path: '/dashboard',
    label: 'Dashboard',
    element: DashboardPage,
    description: 'Trading dashboard',
    showInNav: true,
  },
  {
    id: 'stocks',
    path: '/stocks',
    label: 'Stock List',
    element: StockListPage,
    description: 'Stock management admin page',
    showInNav: true,
  },
  // Example of a hidden route (not shown in navigation but still accessible)
  // {
  //   id: 'settings',
  //   path: '/settings',
  //   label: 'Settings',
  //   element: SettingsPage,
  //   description: 'User settings',
  //   showInNav: false,
  // },
];

/**
 * Get navigation routes (routes that should appear in navigation)
 */
export const getNavigationRoutes = () => {
  return routes.filter(route => route.showInNav);
};

/**
 * Get route by path
 */
export const getRouteByPath = (path) => {
  return routes.find(route => route.path === path);
};

/**
 * Get route by id
 */
export const getRouteById = (id) => {
  return routes.find(route => route.id === id);
};

export default routes;
