import { Controller, Get } from '@nestjs/common';
import { RiskService } from './risk.service';
import { ConfigResponseDto } from './dto/config.dto';

@Controller('api')
export class ConfigController {
  constructor(private readonly riskService: RiskService) {}

  @Get('config')
  getConfig(): ConfigResponseDto {
    return this.riskService.getConfig();
  }
}
