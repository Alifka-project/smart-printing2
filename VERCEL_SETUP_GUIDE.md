# 🚀 Vercel Deployment Setup Guide

## 📋 Prerequisites
- GitHub repository: https://github.com/Alifka-project/smart-printing2.git
- Vercel account
- Prisma Data Platform database (already configured)

## 🔧 Step-by-Step Setup

### 1. Connect Repository to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import Git repository: `Alifka-project/smart-printing2`
4. Select "Next.js" framework

### 2. Environment Variables Setup
Add these environment variables in Vercel dashboard:

#### **Required Variables:**
```
DATABASE_URL=postgres://c91c8561fe8b6b34a5985f17ac564ca367969fe928557c4c4f6b5bc780733281:sk_1sGdxWA91n5mc5fS6JTs0@db.prisma.io:5432/?sslmode=require
PRISMA_GENERATE_DATAPROXY=true
NODE_ENV=production
```

#### **Optional Variables:**
```
NEXT_PUBLIC_API_URL=https://your-app.vercel.app
NEXT_PUBLIC_APP_NAME="SmartPrint Print Management System"
NEXT_PUBLIC_APP_VERSION="1.0.0"
NEXTAUTH_SECRET=your-secret-key-here
NEXTAUTH_URL=https://your-app.vercel.app
```

### 3. Build Configuration
- **Build Command**: `npm run build`
- **Install Command**: `npm install`
- **Output Directory**: `.next`

### 4. Deploy
1. Click "Deploy"
2. Wait for build to complete
3. Check deployment logs for any errors

## 🔍 Troubleshooting

### Common Issues:
1. **Prisma Generation Failed**
   - Ensure `PRISMA_GENERATE_DATAPROXY=true` is set
   - Check build logs for Prisma errors

2. **Database Connection Failed**
   - Verify `DATABASE_URL` is correct
   - Check database is accessible from Vercel

3. **Build Timeout**
   - Build command optimized to `npm run vercel-build`
   - API functions have 30s timeout

## 📁 Project Structure
```
├── app/                    # Next.js app directory
├── components/            # React components
├── lib/                   # Database and utilities
├── prisma/               # Prisma schema and migrations
├── vercel.json           # Vercel configuration
├── package.json          # Dependencies and scripts
└── env.vercel            # Environment template
```

## 🚀 Deployment Commands
```bash
# Local development
npm run dev

# Build for production
npm run build

# Production build
npm run build

# Generate Prisma client
npm run db:generate

# Push database schema
npm run db:push
```

## ✅ Success Indicators
- ✅ Build completes without errors
- ✅ Prisma client generates successfully
- ✅ Database connection established
- ✅ API routes respond correctly
- ✅ Quote creation works in production

## 🔗 Useful Links
- [Vercel Dashboard](https://vercel.com/dashboard)
- [Prisma Data Platform](https://cloud.prisma.io)
- [GitHub Repository](https://github.com/Alifka-project/smart-printing2.git)
