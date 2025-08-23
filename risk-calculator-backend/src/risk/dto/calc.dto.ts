import { IsInt, Min, Max } from 'class-validator';

export class CalcRequestDto {
  @IsInt()
  @Min(1)
  @Max(5)
  likelihood: number;

  @IsInt()
  @Min(1)
  @Max(5)
  impact: number;
}

export class CalcResponseDto {
  score: number;
  category: 'Low' | 'Medium' | 'High' | 'Extreme';
}
