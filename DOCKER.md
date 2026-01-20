# Docker Setup Guide

## Building the Docker Image

```bash
# Build the image
docker build -t options-scanner-ui .

# Run the container
docker run -p 3000:3000 \
  -e VITE_API_BASE_URL=http://localhost:5000/api \
  -e VITE_LOG_LEVEL=debug \
  options-scanner-ui
```

## Using Docker Compose

```bash
# Start the application
docker-compose up --build

# Stop the application
docker-compose down

# View logs
docker-compose logs -f ui
```

## Environment Variables

Configure these in `.env` or through Docker:

- `VITE_API_BASE_URL` - Backend API endpoint (default: `http://localhost:5000/api`)
- `VITE_LOG_LEVEL` - Logging level: `debug`, `info`, `warn`, `error` (default: `debug`)
- `VITE_ENV` - Environment: `development` or `production` (default: `development`)

## Notes

- The app runs on port `3000` by default
- Multi-stage build keeps the final image lightweight
- Health check is enabled to monitor container status
- API endpoint can be changed via environment variables without rebuilding
