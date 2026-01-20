/**
 * Routes Component
 * Dynamically renders all routes from configuration
 */

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { routes } from '../config/routes';
import { logger } from '../utils/logger';

export const AppRoutes = () => {
  logger.debug('Rendering routes', { routeCount: routes.length });

  return (
    <Routes>
      {routes.map((route) => {
        const Element = route.element;
        return (
          <Route
            key={route.id}
            path={route.path}
            element={<Element />}
          />
        );
      })}
    </Routes>
  );
};

export default AppRoutes;
