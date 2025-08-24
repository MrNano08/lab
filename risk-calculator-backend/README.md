# Risk Calculator Backend

API backend for the Risk Calculator application built with NestJS, optimized for Railway deployment.

## Features

- **Risk Calculation API**: Calculate risk scores based on Likelihood × Impact
- **Configuration Management**: Provide risk matrix configuration and thresholds
- **Health Check Endpoint**: Monitor service status
- **CORS Support**: Configured for frontend integration
- **TypeScript**: Full type safety throughout the application
- **Railway Optimized**: Production deployment ready

## Quick Deploy to Railway

### Option 1: Deploy from Git (Recommended)

1. **Fork or Clone this repository**
2. **Go to [Railway Dashboard](https://railway.app/dashboard)**
3. **Click "New Project"**
4. **Select "Deploy from GitHub repo"**
5. **Select your repository**
6. **Configure the service:**
   - **Root Directory**: `risk-calculator-backend`
   - **Build Command**: `npm run build`
   - **Start Command**: `npm run start:prod`
7. **Click "Deploy"**

### Option 2: Railway CLI

```bash
# Install Railway CLI
npm i -g @railway/cli

# Login to Railway
railway login

# Initialize project
railway init

# Deploy
railway up
```

## API Endpoints

### Health Check
- `GET /health` - Service health status

### Risk Calculator
- `GET /api/config` - Get risk calculator configuration
- `POST /api/calc` - Calculate risk score

### Root
- `GET /` - API status message

## Development

### Installation

```bash
npm install
```

### Running the app

```bash
# development
npm run start

# watch mode
npm run start:dev

# production mode
npm run start:prod
```

### Test

```bash
# unit tests
npm run test

# e2e tests
npm run test:e2e

# test coverage
npm run test:cov
```

## Environment Variables

The following environment variables can be configured in Railway:

- `NODE_ENV` - Set to "production" for production deployment
- `PORT` - Port number (Railway will set this automatically)

## API Endpoints (After Deployment)

Once deployed, your API will be available at:
- Health Check: `https://your-project-name.railway.app/health`
- Config: `https://your-project-name.railway.app/api/config`
- Calculate: `https://your-project-name.railway.app/api/calc`
- Root: `https://your-project-name.railway.app/`

## CORS Configuration

The API is configured to accept requests from:
- Development: `http://localhost:5173`, `http://localhost:3000`, `http://localhost:3001`
- Production: Railway frontend URLs (configured in `main.ts`)

## Project Structure

```
src/
├── app.controller.ts      # Main API controller
├── app.module.ts          # Main application module
├── health.controller.ts   # Health check endpoint
├── main.ts               # Application entry point
└── risk/
    ├── dto/
    │   ├── calc.dto.ts       # Calculation request/response DTOs
    │   └── config.dto.ts     # Configuration response DTO
    ├── calc.controller.ts    # Calculation endpoint controller
    ├── config.controller.ts  # Configuration endpoint controller
    ├── risk.service.ts       # Risk calculation business logic
    └── risk.module.ts        # Risk module definition
├── railway.json            # Railway configuration
├── Procfile               # Railway process file
└── package.json           # Dependencies and scripts
```

## Risk Calculation Logic

The risk calculation follows the formula:
- **Score = Likelihood × Impact**
- **Range**: 1-25 (5×5 matrix)

### Risk Categories

- **Low (1-4)**: Monitor and review periodically
- **Medium (5-9)**: Consider implementing controls
- **High (10-16)**: Prioritize controls and mitigation
- **Extreme (17-25)**: Immediate action required

## Railway Deployment Features

- **Auto-scaling**: Automatic scaling based on traffic
- **Health checks**: Built-in health monitoring
- **Environment variables**: Secure configuration management
- **Custom domains**: Easy domain setup
- **SSL certificates**: Automatic HTTPS
- **Logs**: Real-time application logs

## Troubleshooting

### Common Issues

1. **Build Fails**: Check that all dependencies are in package.json
2. **CORS Errors**: Verify frontend URL is in allowed origins
3. **Port Issues**: Railway sets PORT automatically

### Debug Steps

1. **Check Railway Logs**: Railway Dashboard → Project → Deployments → Latest
2. **Test Health Endpoint**: `https://your-project.railway.app/health`
3. **Verify Environment Variables**: Railway Dashboard → Variables

## License

ISC
