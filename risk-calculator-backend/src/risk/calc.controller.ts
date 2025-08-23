import { Controller, Post, Body } from '@nestjs/common';
import { RiskService } from './risk.service';
import { CalcRequestDto, CalcResponseDto } from './dto/calc.dto';

@Controller('api')
export class CalcController {
  constructor(private readonly riskService: RiskService) {}

  @Post('calc')
  calculateRisk(@Body() request: CalcRequestDto): CalcResponseDto {
    return this.riskService.calculateRisk(request);
  }
}
