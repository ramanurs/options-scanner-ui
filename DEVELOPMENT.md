# Development Guide

Comprehensive guide for developing Options Scanner UI.

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

## 🚀 Development Setup

### Installation

```bash
# Clone the repository
git clone https://github.com/ramanurs/options-scanner-ui.git
cd options-scanner-ui

# Install dependencies
npm install

# Start development server
npm run dev
```

### Environment Configuration

Create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=http://localhost:8080/api
VITE_LOG_LEVEL=debug
VITE_ENV=development
```

### Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Lint code (if configured)
npm run lint
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

### Adding a New Route

1. Create a new page component in `src/pages/MyPage.jsx`
2. Add route definition to `src/config/routes.js`
3. Header and navigation update automatically

Example:
```javascript
{
  id: 'my-feature',
  path: '/my-feature',
  label: 'My Feature',
  element: MyFeaturePage,
  showInNav: true,
}
```

## 📝 Logging

The app includes a structured logging system:

```javascript
import { logger } from '../utils/logger';

logger.debug('Debug message', { data: 'value' });
logger.info('Info message', { data: 'value' });
logger.warn('Warning message', { data: 'value' });
logger.error('Error message', { data: 'value' });
```

**Logging level** is controlled by `VITE_LOG_LEVEL` environment variable:
- `debug` - Show all logs (development)
- `info` - Info and above
- `warn` - Warnings and errors only
- `error` - Only errors

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

## 🔐 Environment Variables

| Variable | Dev Value | Production |
|----------|-----------|-----------|
| `VITE_API_BASE_URL` | /api | https://api.yourdomain.com/api |
| `VITE_LOG_LEVEL` | debug | warn |
| `VITE_ENV` | development | production |

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

## 📚 Code Style

- Use **ESLint** for code linting (if configured)
- Follow **React** best practices
- Use meaningful variable and function names
- Add comments for complex logic
- Keep components small and focused

## Testing

### Recommended Approach

1. **Manual Testing** (current)
   - Test in browser during development
   - Use browser DevTools
   - Check console for errors

2. **Unit Testing** (coming soon)
   - Jest for unit tests
   - React Testing Library

3. **Integration Testing** (coming soon)
   - E2E testing with Cypress or Playwright

## 🔄 Git Workflow

```bash
# Create feature branch
git checkout -b feature/my-feature

# Make changes and commit
git add .
git commit -m "feat: add my feature"

# Push to GitHub
git push -u origin feature/my-feature

# Create Pull Request on GitHub
# After review and merge, sync local main
git checkout main
git pull origin main
```

## Performance Tips

1. **Use React DevTools** - Check for unnecessary re-renders
2. **Code Splitting** - Lazy load routes if needed
3. **Bundle Analysis** - Monitor bundle size with `npm run build`
4. **API Caching** - Consider caching API responses

## Adding New Features

### Example: Adding a New Service

1. Create `src/api/newService.js`:
```javascript
import axiosClient from './axiosClient';
import { logger } from '../utils/logger';

const ENDPOINT = '/new-feature';

export const newService = {
  getAll: async () => {
    try {
      logger.info('Fetching new feature');
      const response = await axiosClient.get(ENDPOINT);
      return response.data;
    } catch (error) {
      logger.error('Failed to fetch', { error: error.message });
      throw error;
    }
  },
  // ... more methods
};
export default newService;
```

2. Export in `src/api/index.js`

3. Use in components:
```javascript
import { newService } from '../api';
// Use newService.getAll()
```

## Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Material-UI Documentation](https://mui.com)
- [Axios Documentation](https://axios-http.com)

---

For more information, see [README.md](README.md) and [CONTRIBUTING.md](CONTRIBUTING.md).
