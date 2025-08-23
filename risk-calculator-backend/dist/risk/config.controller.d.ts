import { RiskService } from './risk.service';
import { ConfigResponseDto } from './dto/config.dto';
export declare class ConfigController {
    private readonly riskService;
    constructor(riskService: RiskService);
    getConfig(): ConfigResponseDto;
}
