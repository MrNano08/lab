# Risk Calculator Backend

API backend for the Risk Calculator application built with NestJS, optimized for Vercel deployment.

## Features

- **Risk Calculation API**: Calculate risk scores based on Likelihood × Impact
- **Configuration Management**: Provide risk matrix configuration and thresholds
- **Health Check Endpoint**: Monitor service status
- **CORS Support**: Configured for frontend integration
- **TypeScript**: Full type safety throughout the application
- **Vercel Optimized**: Serverless deployment ready

## Quick Deploy to Vercel

### Option 1: Import from Git (Recommended)

1. **Fork or Clone this repository**
2. **Go to [Vercel Dashboard](https://vercel.com/dashboard)**
3. **Click "New Project"**
4. **Import Git Repository**
5. **Select your repository**
6. **Configure project:**
   - **Framework Preset**: Other
   - **Root Directory**: `risk-calculator-backend`
   - **Build Command**: Leave empty
   - **Output Directory**: Leave empty
   - **Install Command**: `npm install`
7. **Click "Deploy"**

**Important**: The project uses a custom API handler in `api/index.ts` for better Vercel compatibility.

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
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

The following environment variables can be configured in Vercel:

- `NODE_ENV` - Set to "production" for production deployment
- `PORT` - Port number (Vercel will set this automatically)

## API Endpoints (After Deployment)

Once deployed, your API will be available at:
- Health Check: `https://your-project-name.vercel.app/health`
- Config: `https://your-project-name.vercel.app/api/config`
- Calculate: `https://your-project-name.vercel.app/api/calc`
- Root: `https://your-project-name.vercel.app/`

## CORS Configuration

The API is configured to accept requests from:
- Development: `http://localhost:5173`, `http://localhost:3000`, `http://localhost:3001`
- Production: Vercel frontend URLs (configured in `main.ts`)

## Project Structure

```
├── api/
│   └── index.ts              # Vercel API handler
├── src/
│   ├── app.controller.ts      # Main API controller
│   ├── app.module.ts          # Main application module
│   ├── health.controller.ts   # Health check endpoint
│   ├── main.ts               # Application entry point
│   └── risk/
│       ├── dto/
│       │   ├── calc.dto.ts       # Calculation request/response DTOs
│       │   └── config.dto.ts     # Configuration response DTO
│       ├── calc.controller.ts    # Calculation endpoint controller
│       ├── config.controller.ts  # Configuration endpoint controller
│       ├── risk.service.ts       # Risk calculation business logic
│       └── risk.module.ts        # Risk module definition
├── vercel.json               # Vercel configuration
└── package.json              # Dependencies and scripts
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

## Troubleshooting

### Common Issues

1. **Build Fails**: Make sure you're in the `risk-calculator-backend` directory
2. **CORS Errors**: Check that your frontend URL is in the allowed origins
3. **Module Not Found**: All dependencies are included in package.json

### Vercel Deployment Tips

- The project uses `@vercel/node` for automatic TypeScript compilation
- No custom build step required
- Health check endpoint available at `/health`
- All API routes are prefixed with `/api`

## License

ISC
