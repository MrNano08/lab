import { RiskService } from './risk.service';
import { CalcRequestDto, CalcResponseDto } from './dto/calc.dto';
export declare class CalcController {
    private readonly riskService;
    constructor(riskService: RiskService);
    calculateRisk(request: CalcRequestDto): CalcResponseDto;
}
