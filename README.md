# Options Scanner UI

A modern React-based frontend application for the Options Scanner trading platform. This UI provides a comprehensive dashboard for managing stock portfolios, viewing options data, and tracking trades.

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-5-blue?logo=vite)
![Material-UI](https://img.shields.io/badge/Material--UI-5-blue?logo=mui)
![License](https://img.shields.io/badge/License-MIT-green)

## 🎯 Features

- **Stock Management** - Add, view, edit, and delete stocks from your portfolio
- **Trading Dashboard** - Monitor your trading metrics and performance
- **Options Data** - View options chains and quotes
- **Trade Tracking** - Track open and closed positions
- **API Integration** - Seamless integration with backend APIs
- **Toast Notifications** - Real-time success/error feedback
- **Responsive Design** - Works on desktop and tablet devices
- **Docker Support** - Easy containerization for deployment

## 📋 Prerequisites

- Node.js 16+ 
- npm 7+ or yarn
- Backend API running on `http://localhost:8080` (for development)

## 🚀 Quick Start

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/options-scanner-ui.git
cd options-scanner-ui

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Environment Configuration

Create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=http://localhost:8080/api
VITE_LOG_LEVEL=debug
VITE_ENV=development
```

For production, use `.env.production`:

```env
VITE_API_BASE_URL=https://api.yourdomain.com/api
VITE_LOG_LEVEL=warn
VITE_ENV=production
```

## 🐳 Docker Setup

### Build & Run with Docker

```bash
# Build the image
docker build -t options-scanner-ui .

# Run the container
docker run -p 3000:3000 \
  -e VITE_API_BASE_URL=http://localhost:8080/api \
  options-scanner-ui
```

### Using Docker Compose

```bash
# Start all services
docker-compose up --build

# Stop services
docker-compose down
```

See [DOCKER.md](DOCKER.md) for detailed Docker documentation.

## 🛠️ Build

```bash
# Production build
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── api/                    # API service layer (controllers-like)
│   ├── axiosClient.js     # HTTP client configuration
│   ├── stockService.js    # Stock API endpoints
│   ├── authService.js     # Authentication endpoints
│   ├── dashboardService.js # Dashboard API endpoints
│   ├── optionsService.js  # Options API endpoints
│   ├── tradeService.js    # Trade API endpoints
│   └── index.js           # Centralized exports
├── components/             # Reusable React components
│   ├── AppRoutes.jsx      # Route configuration
│   ├── StockForm.jsx      # Stock form component
│   ├── StockTable.jsx     # Stock table component
│   └── ToastContainer.jsx # Toast notification display
├── config/                 # Configuration files
│   ├── apiConfig.js       # API configuration
│   └── routes.js          # Route definitions
├── context/               # React Context
│   └── ToastContext.jsx   # Toast notification context
├── hooks/                 # Custom React hooks
│   └── useToast.js        # Toast notification hook
├── layout/                # Layout components
│   ├── Header.jsx         # Navigation header
│   └── MainLayout.jsx     # Main layout wrapper
├── pages/                 # Page components
│   ├── HomePage.jsx       # Home page
│   ├── DashboardPage.jsx  # Trading dashboard
│   └── StockListPage.jsx  # Stock management page
├── utils/                 # Utility functions
│   ├── axiosClient.js     # Axios HTTP client (legacy)
│   └── logger.js          # Logging utility
└── App.jsx                # Root component
```

## 🔌 API Integration

The app communicates with the backend via a proxy during development. See [CORS.md](CORS.md) for CORS configuration details.

### Available API Services

- **Stock Service** - CRUD operations for stocks
- **Auth Service** - User authentication and token management
- **Dashboard Service** - Trading metrics and analytics
- **Options Service** - Options chain and quote data
- **Trade Service** - Trade and order management

### Using API Services

```javascript
import { stockService, authService, dashboardService } from '../api';

// Fetch all stocks
const stocks = await stockService.getAllStocks();

// Create a new stock
const newStock = await stockService.createStock({
  ticker: 'AAPL',
  companyName: 'Apple Inc.',
  category: 'Technology'
});

// Delete a stock
await stockService.deleteStock(stockId);
```

## 🔔 Toast Notifications

Global toast notifications are available throughout the app:

```javascript
import { useToast } from '../hooks/useToast';

export function MyComponent() {
  const { success, error, warning, info } = useToast();
  
  const handleAction = async () => {
    try {
      await someAction();
      success('Operation completed!');
    } catch (err) {
      error('Operation failed!');
    }
  };
  
  return <button onClick={handleAction}>Perform Action</button>;
}
```

## 📦 Dependencies

### Core
- **React** 18 - UI library
- **React Router** - Client-side routing
- **Vite** - Build tool and dev server

### UI
- **Material-UI (MUI)** - UI component library
- **Emotion** - CSS-in-JS styling

### HTTP & API
- **Axios** - HTTP client

### Charts (Future)
- **Recharts** - Data visualization library

## 🔄 Routing

Routes are centrally managed in `src/config/routes.js`:

```javascript
export const routes = [
  {
    id: 'home',
    path: '/',
    label: 'Home',
    element: HomePage,
    showInNav: true,
  },
  // ... more routes
];
```

To add a new route:
1. Create a new page component in `src/pages/`
2. Add route definition to `src/config/routes.js`
3. Header and navigation update automatically

## 🔐 Environment Variables

| Variable | Default | Purpose |
|----------|---------|---------|
| `VITE_API_BASE_URL` | `/api` | Backend API endpoint |
| `VITE_LOG_LEVEL` | `debug` | Logging level (debug, info, warn, error) |
| `VITE_ENV` | `development` | Environment (development, production) |

## 📝 Logging

The app includes a structured logging system:

```javascript
import { logger } from '../utils/logger';

logger.debug('Debug message', { data: 'value' });
logger.info('Info message', { data: 'value' });
logger.warn('Warning message', { data: 'value' });
logger.error('Error message', { data: 'value' });
```

Logging level is controlled by `VITE_LOG_LEVEL` environment variable.

## 🐛 Troubleshooting

### CORS Errors
See [CORS.md](CORS.md) for detailed solutions.

### Port Already in Use
```bash
# Kill process on port 5173
lsof -ti:5173 | xargs kill -9

# Or use a different port
npm run dev -- --port 3000
```

### Module Not Found Errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Vite Cache Issues
```bash
# Clear Vite cache
rm -rf node_modules/.vite
npm run dev
```

## 📚 Additional Documentation

- [Docker Setup](DOCKER.md) - Docker and Docker Compose configuration
- [CORS Configuration](CORS.md) - CORS setup and troubleshooting
- [Contributing](CONTRIBUTING.md) - Contribution guidelines
- [Changelog](CHANGELOG.md) - Version history and changes

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Author

Ramana Rapally

## 🔗 Links

- [Backend Repository](https://github.com/yourusername/options-scanner-backend)
- [Project Issues](https://github.com/yourusername/options-scanner-ui/issues)
- [Discussions](https://github.com/yourusername/options-scanner-ui/discussions)

## 📞 Support

For support, please open an issue on GitHub or contact the maintainers.

---

**Last Updated:** January 19, 2026
