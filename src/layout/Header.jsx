import React from 'react';
import { AppBar, Toolbar, Button, Container, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { getNavigationRoutes } from '../config/routes';

export const Header = () => {
  const navRoutes = getNavigationRoutes();

  return (
    <AppBar position="static" sx={{ backgroundColor: '#1976d2' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', gap: 3 }}>
            {navRoutes.map((route) => (
              <Button
                key={route.id}
                component={RouterLink}
                to={route.path}
                title={route.description}
                sx={{
                  color: 'white',
                  textTransform: 'none',
                  fontSize: '1rem',
                  fontWeight: 500,
                  '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' }
                }}
              >
                {route.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
