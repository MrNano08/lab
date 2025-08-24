"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const allowedOrigins = process.env.NODE_ENV === 'production'
        ? [
            'https://risk-calculator-frontend.vercel.app',
            'https://risk-calculator-frontend-git-main.vercel.app',
            'https://risk-calculator-frontend-git-develop.vercel.app',
            'https://risk-calculator-frontend.vercel.app',
            'https://risk-calculator-frontend-git-main.vercel.app',
            'https://risk-calculator-frontend-git-develop.vercel.app'
        ]
        : ['http://localhost:5173', 'http://localhost:3000', 'http://localhost:3001'];
    app.enableCors({
        origin: allowedOrigins,
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        credentials: true,
    });
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    }));
    const port = process.env.PORT || 3001;
    await app.listen(port);
    console.log(`Risk Calculator API running on port ${port}`);
}
bootstrap();
//# sourceMappingURL=main.js.map