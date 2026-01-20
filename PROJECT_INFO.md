# Project Information

## Overview
Options Scanner UI is a modern, React-based frontend application designed for managing and analyzing options trading data. It provides an intuitive interface for stock management, portfolio tracking, and trading analytics.

## Quick Facts
- **Repository:** options-scanner-ui
- **Status:** Active Development
- **Created:** January 19, 2026
- **Author:** Ramana Rapally
- **License:** MIT

## Tech Stack

### Frontend
- **React** 18 - UI library
- **Vite** 5 - Build tool and dev server
- **Material-UI** 5 - Component library
- **Axios** - HTTP client
- **React Router** - Navigation

### Development
- **Node.js** 16+
- **npm** 7+
- **ESLint** - Code linting

### DevOps
- **Docker** - Containerization
- **Docker Compose** - Multi-container orchestration

## Project Structure

```
options-scanner-ui/
├── src/
│   ├── api/                 # API service layer
│   ├── components/          # Reusable React components
│   ├── config/              # Configuration files
│   ├── context/             # React Context providers
│   ├── hooks/               # Custom React hooks
│   ├── layout/              # Layout components
│   ├── pages/               # Page components
│   ├── utils/               # Utility functions
│   └── App.jsx              # Root component
├── public/                  # Static assets
├── .github/                 # GitHub templates
├── package.json             # Dependencies
├── vite.config.js           # Vite configuration
├── Dockerfile               # Docker image definition
├── docker-compose.yml       # Docker Compose configuration
├── README.md                # Project documentation
└── LICENSE                  # MIT License
```

## Key Features

✅ **Stock Management** - CRUD operations for stocks
✅ **Trading Dashboard** - Real-time metrics and analytics
✅ **API Integration** - Multiple service modules
✅ **Toast Notifications** - Global notification system
✅ **Responsive Design** - Mobile-friendly UI
✅ **Docker Ready** - Production-ready containerization
✅ **Structured Logging** - Debug and monitor easily
✅ **Environment Configuration** - Easy setup for different environments

## Dependencies

### Production Dependencies
- react@^18.2.0
- react-dom@^18.2.0
- react-router-dom@^6.x
- axios@^1.x
- @mui/material@^5.x
- @emotion/react@^11.x
- @emotion/styled@^11.x
- recharts@^2.x

### Development Dependencies
- vite@^5.x
- @vitejs/plugin-react@^4.x
- eslint@^8.x

## Development Workflow

```
feature branch
    ↓
development
    ↓
main (production)
```

## Related Projects

- **Backend Repository:** [options-scanner-backend](https://github.com/yourusername/options-scanner-backend)
- **Documentation:** [Project Wiki](https://github.com/yourusername/options-scanner-ui/wiki)

## Getting Help

- **Issues:** [GitHub Issues](https://github.com/yourusername/options-scanner-ui/issues)
- **Discussions:** [GitHub Discussions](https://github.com/yourusername/options-scanner-ui/discussions)
- **Documentation:** See README.md and /docs folder

## Contributing

We welcome contributions! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## Code Quality

- ESLint for code linting
- Consistent code style
- Meaningful variable names
- Component-based architecture
- Centralized API management

## Performance Metrics

- **Build Time:** < 5 seconds (dev), < 30 seconds (prod)
- **Initial Load:** < 2 seconds
- **Bundle Size:** ~500KB (gzipped)

## Future Roadmap

- [ ] Unit and integration tests
- [ ] TypeScript migration
- [ ] Authentication system
- [ ] Advanced charting
- [ ] Real-time data updates
- [ ] Dark mode support
- [ ] Mobile app (React Native)
- [ ] Analytics dashboard

## Environment Variables

| Variable | Dev Value | Production |
|----------|-----------|-----------|
| VITE_API_BASE_URL | /api | https://api.yourdomain.com/api |
| VITE_LOG_LEVEL | debug | warn |
| VITE_ENV | development | production |

## License

MIT License © 2026 Ramana Rapally

## Version History

- **0.1.0** (2026-01-19) - Initial release
  - Basic CRUD operations
  - Dashboard layout
  - API integration
  - Docker support

---

Last Updated: January 19, 2026
