# Deployment Guide - Vercel Git Integration

## 🚀 Quick Deploy from Git

### Step 1: Prepare Your Repository

Make sure your repository is pushed to GitHub, GitLab, or Bitbucket with the following structure:

```
lab/
├── risk-calculator-backend/     # ← This is your backend
│   ├── src/
│   ├── package.json
│   ├── vercel.json
│   └── ...
└── risk-calculator-frontend/    # ← Your frontend (if any)
```

### Step 2: Deploy to Vercel

1. **Go to [Vercel Dashboard](https://vercel.com/dashboard)**
2. **Click "New Project"**
3. **Import Git Repository**
4. **Select your repository**
5. **Configure the project:**

   | Setting | Value |
   |---------|-------|
   | **Framework Preset** | `Other` |
   | **Root Directory** | `risk-calculator-backend` |
   | **Build Command** | Leave empty |
   | **Output Directory** | Leave empty |
   | **Install Command** | `npm install` |

6. **Click "Deploy"**

### Step 3: Verify Deployment

After deployment, test these endpoints:

- **Health Check**: `https://your-project.vercel.app/health`
- **API Config**: `https://your-project.vercel.app/api/config`
- **API Root**: `https://your-project.vercel.app/`

## 🔧 Configuration Details

### Vercel Configuration (`vercel.json`)

```json
{
  "version": 2,
  "name": "risk-calculator-backend",
  "builds": [
    {
      "src": "src/main.ts",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "src/main.ts"
    },
    {
      "src": "/health",
      "dest": "src/main.ts"
    },
    {
      "src": "/(.*)",
      "dest": "src/main.ts"
    }
  ],
  "functions": {
    "src/main.ts": {
      "maxDuration": 30
    }
  }
}
```

### Package.json Requirements

- **Node.js Version**: `>=18.0.0`
- **Main Entry**: `dist/main.js`
- **Build Script**: `nest build`
- **Vercel Build**: `echo 'No build step needed for Vercel'`

## 🌐 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/` | API status |
| `GET` | `/health` | Health check |
| `GET` | `/api/config` | Risk calculator config |
| `POST` | `/api/calc` | Calculate risk |

## 🔄 Automatic Deployments

Once connected to Git:

- **Every push to `main` branch** → Automatic production deployment
- **Every push to other branches** → Preview deployment
- **Pull requests** → Preview deployment with unique URL

## 🛠️ Environment Variables

Configure these in Vercel Dashboard → Project Settings → Environment Variables:

| Variable | Value | Description |
|----------|-------|-------------|
| `NODE_ENV` | `production` | Environment mode |
| `PORT` | Auto-set | Server port |

## 🐛 Troubleshooting

### Common Issues

1. **Build Fails**
   - Check that `Root Directory` is set to `risk-calculator-backend`
   - Ensure `package.json` exists in the backend directory

2. **Module Not Found**
   - All dependencies are in `package.json`
   - Vercel installs dependencies automatically

3. **CORS Errors**
   - Frontend URL must be in allowed origins in `main.ts`
   - Check browser console for specific errors

### Debug Steps

1. **Check Build Logs**: Vercel Dashboard → Project → Deployments → Latest
2. **Test Health Endpoint**: `https://your-project.vercel.app/health`
3. **Check Function Logs**: Vercel Dashboard → Functions tab

## 📝 Next Steps

After successful deployment:

1. **Update Frontend**: Point your frontend to the new API URL
2. **Test All Endpoints**: Verify all API calls work
3. **Monitor Performance**: Check Vercel Analytics
4. **Set Up Custom Domain**: If needed

## 🔗 Useful Links

- [Vercel Documentation](https://vercel.com/docs)
- [NestJS Documentation](https://nestjs.com/)
- [Vercel Dashboard](https://vercel.com/dashboard)
