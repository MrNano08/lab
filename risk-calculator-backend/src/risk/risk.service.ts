import { Injectable } from '@nestjs/common';
import { CalcRequestDto, CalcResponseDto } from './dto/calc.dto';
import { ConfigResponseDto } from './dto/config.dto';

@Injectable()
export class RiskService {
  private readonly defaultConfig: ConfigResponseDto = {
    scaleMin: 1,
    scaleMax: 5,
    thresholds: {
      low: [1, 4],
      medium: [5, 9],
      high: [10, 16],
      extreme: [17, 25],
    },
    labels: {
      likelihood: 'Likelihood',
      impact: 'Impact',
    },
  };

  getConfig(): ConfigResponseDto {
    return this.defaultConfig;
  }

  calculateRisk(request: CalcRequestDto): CalcResponseDto {
    const score = request.likelihood * request.impact;
    
    let category: 'Low' | 'Medium' | 'High' | 'Extreme';
    
    if (score >= 1 && score <= 4) {
      category = 'Low';
    } else if (score >= 5 && score <= 9) {
      category = 'Medium';
    } else if (score >= 10 && score <= 16) {
      category = 'High';
    } else if (score >= 17 && score <= 25) {
      category = 'Extreme';
    } else {
      category = 'Low'; // fallback
    }

    return {
      score,
      category,
    };
  }
}
