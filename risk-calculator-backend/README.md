# Risk Calculator Backend

API backend for the Risk Calculator application built with NestJS.

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

## Deployment on Vercel

This project is configured for deployment on Vercel. The following files are set up for deployment:

- `vercel.json` - Vercel configuration
- Updated CORS settings for production
- Proper build scripts

### Deploy Steps

1. Install Vercel CLI (if not already installed):
   ```bash
   npm i -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy the project:
   ```bash
   vercel
   ```

4. For production deployment:
   ```bash
   vercel --prod
   ```

### Environment Variables

The following environment variables can be configured in Vercel:

- `NODE_ENV` - Set to "production" for production deployment
- `PORT` - Port number (Vercel will set this automatically)

### API Endpoints

Once deployed, your API will be available at:
- Development: `https://your-project-name.vercel.app`
- Production: `https://your-project-name.vercel.app`

### CORS Configuration

The API is configured to accept requests from:
- Development: `http://localhost:5173`, `http://localhost:3000`
- Production: Vercel frontend URLs (configured in `main.ts`)

## License

ISC
