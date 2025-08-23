export type RiskInput = {
  title: string;
  description?: string;
  likelihood: 1 | 2 | 3 | 4 | 5;
  impact: 1 | 2 | 3 | 4 | 5;
};

export type RiskItem = RiskInput & {
  id: string;
  score: number;
  category: "Low" | "Medium" | "High" | "Extreme";
  createdAt: string;
};

export type RiskCategory = "Low" | "Medium" | "High" | "Extreme";

export type RiskCalculation = {
  score: number;
  category: RiskCategory;
};

export type RiskConfig = {
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
};
