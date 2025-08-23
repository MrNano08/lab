import { CalcRequestDto, CalcResponseDto } from './dto/calc.dto';
import { ConfigResponseDto } from './dto/config.dto';
export declare class RiskService {
    private readonly defaultConfig;
    getConfig(): ConfigResponseDto;
    calculateRisk(request: CalcRequestDto): CalcResponseDto;
}
