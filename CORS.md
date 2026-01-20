# CORS Configuration Guide

## Problem
You're getting a CORS error when trying to make API requests from the frontend:
```
Access to XMLHttpRequest at 'http://localhost:8080/api/stocks' from origin 'http://localhost:5173' 
has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present 
on the requested resource.
```

## Solutions

### Solution 1: Development Proxy (Current Setup) ✅
**Recommended for Development**

The app is now configured with a Vite proxy that forwards API requests to your backend.

**How it works:**
- Requests to `/api/*` are proxied to `http://localhost:8080/api/*`
- No CORS headers needed during development
- The browser doesn't see cross-origin requests

**Configuration in `vite.config.js`:**
```javascript
server: {
  proxy: {
    '/api': {
      target: 'http://localhost:8080',
      changeOrigin: true,
    },
  },
}
```

**API Config in `src/config/apiConfig.js`:**
```javascript
// Development: uses '/api' (proxied)
// Production: uses VITE_API_BASE_URL
const API_BASE_URL = import.meta.env.PROD
  ? import.meta.env.VITE_API_BASE_URL
  : '/api';
```

**Steps:**
1. Make sure your backend is running on `http://localhost:8080`
2. Start the dev server: `npm run dev`
3. The app will run on `http://localhost:5173`
4. API calls will be automatically proxied to your backend

---

### Solution 2: Backend CORS Configuration (Production) 🔧
**Recommended for Production**

Configure CORS on your backend to allow requests from your frontend domain.

**Spring Boot Example:**
```java
@Configuration
public class CorsConfig {
    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList(
            "http://localhost:5173",      // Dev
            "https://yourdomain.com"       // Production
        ));
        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));
        configuration.setAllowedHeaders(Arrays.asList("*"));
        configuration.setAllowCredentials(true);
        
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
}
```

**Node.js/Express Example:**
```javascript
const cors = require('cors');

app.use(cors({
  origin: ['http://localhost:5173', 'https://yourdomain.com'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['*']
}));
```

---

### Solution 3: Production Deployment
**For Docker/Production:**

Update environment variables in `.env.production`:
```env
VITE_API_BASE_URL=https://api.yourdomain.com/api
VITE_LOG_LEVEL=warn
VITE_ENV=production
```

Your backend should have CORS properly configured to accept requests from your frontend domain.

---

## Verification

**Check if requests are working:**
1. Open browser DevTools (F12)
2. Go to Network tab
3. Make an API call
4. Check the request headers for:
   - Request URL should be `http://localhost:5173/api/stocks` (proxied) in dev
   - Response should include `Access-Control-Allow-Origin` in production

---

## Troubleshooting

### Still getting CORS errors in development?
1. Make sure Vite dev server is running: `npm run dev`
2. Check backend is running on `http://localhost:8080`
3. Restart the dev server if you just updated `vite.config.js`

### Getting CORS errors in production?
1. Configure CORS on your backend
2. Ensure frontend domain is in the allowed origins list
3. Check `VITE_API_BASE_URL` in `.env.production` is correct

### Check backend is responding:
```bash
curl -X GET http://localhost:8080/api/stocks
```

Should return your stocks data without any CORS errors.
