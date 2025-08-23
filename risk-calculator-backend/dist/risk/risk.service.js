"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RiskService = void 0;
const common_1 = require("@nestjs/common");
let RiskService = class RiskService {
    constructor() {
        this.defaultConfig = {
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
    }
    getConfig() {
        return this.defaultConfig;
    }
    calculateRisk(request) {
        const score = request.likelihood * request.impact;
        let category;
        if (score >= 1 && score <= 4) {
            category = 'Low';
        }
        else if (score >= 5 && score <= 9) {
            category = 'Medium';
        }
        else if (score >= 10 && score <= 16) {
            category = 'High';
        }
        else if (score >= 17 && score <= 25) {
            category = 'Extreme';
        }
        else {
            category = 'Low';
        }
        return {
            score,
            category,
        };
    }
};
exports.RiskService = RiskService;
exports.RiskService = RiskService = __decorate([
    (0, common_1.Injectable)()
], RiskService);
//# sourceMappingURL=risk.service.js.map