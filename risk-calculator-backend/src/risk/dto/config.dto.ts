export class ConfigResponseDto {
  scaleMin: number;
  scaleMax: number;
  thresholds: {
    low: [number, number];
    medium: [number, number];
    high: [number, number];
    extreme: [number, number];
  };
  labels: {
    likelihood: string;
    impact: string;
  };
}
