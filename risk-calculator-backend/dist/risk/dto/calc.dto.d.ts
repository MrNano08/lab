export declare class CalcRequestDto {
    likelihood: number;
    impact: number;
}
export declare class CalcResponseDto {
    score: number;
    category: 'Low' | 'Medium' | 'High' | 'Extreme';
}
