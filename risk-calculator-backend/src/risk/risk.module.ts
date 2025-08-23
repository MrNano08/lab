import { Module } from '@nestjs/common';
import { ConfigController } from './config.controller';
import { CalcController } from './calc.controller';
import { RiskService } from './risk.service';

@Module({
  controllers: [ConfigController, CalcController],
  providers: [RiskService],
})
export class RiskModule {}
