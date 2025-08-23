import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RiskModule } from './risk/risk.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    RiskModule,
  ],
})
export class AppModule {}
