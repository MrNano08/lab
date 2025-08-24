import { Controller, Get, Post, Body, ValidationPipe } from '@nestjs/common';
import { RiskService } from './risk/risk.service';
import { CalcRequestDto, CalcResponseDto } from './risk/dto/calc.dto';
import { ConfigResponseDto } from './risk/dto/config.dto';

@Controller()
export class AppController {
  constructor(private readonly riskService: RiskService) {}

  @Get()
  getHello(): string {
    return 'Risk Calculator API is running!';
  }

  @Get('api/config')
  getConfig(): ConfigResponseDto {
    return this.riskService.getConfig();
  }

  @Post('api/calc')
  calculateRisk(@Body(ValidationPipe) calcDto: CalcRequestDto): CalcResponseDto {
    return this.riskService.calculateRisk(calcDto);
  }
}
