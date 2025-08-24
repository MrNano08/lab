import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Set global prefix for API routes
  app.setGlobalPrefix('api');
  
  // Enable CORS for development and production
  const allowedOrigins = process.env.NODE_ENV === 'production' 
    ? [
        'https://risk-calculator-frontend.vercel.app',
        'https://risk-calculator-frontend-git-main.vercel.app',
        'https://risk-calculator-frontend-git-develop.vercel.app'
      ]
    : ['http://localhost:5173', 'http://localhost:3000'];
    
  app.enableCors({
    origin: allowedOrigins,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
  });

  // Global validation pipe
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }));

  const port = process.env.PORT || 3001;
  await app.listen(port);
  console.log(`Risk Calculator API running on port ${port}`);
}

bootstrap();
