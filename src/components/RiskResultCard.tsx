import React from 'react';
import type { RiskCalculation } from '../types/risk';

interface RiskResultCardProps {
  calculation: RiskCalculation;
  likelihood: number;
  impact: number;
}

const categoryGuidance = {
  Low: "Monitor and review periodically",
  Medium: "Consider implementing controls",
  High: "Prioritize controls and mitigation",
  Extreme: "Immediate action required - implement controls"
};

export const RiskResultCard: React.FC<RiskResultCardProps> = ({
  calculation,
  likelihood,
  impact
}) => {


  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Risk Assessment Result</h3>
      
      <div className="space-y-4">
        {/* Score Display */}
        <div className="text-center">
          <div className="text-4xl font-bold text-gray-900 mb-2">
            {calculation.score}
          </div>
          <div className="text-sm text-gray-600">
            Likelihood ({likelihood}) × Impact ({impact})
          </div>
        </div>

        {/* Category Badge */}
        <div className="text-center">
          <span className={`risk-pill ${calculation.category.toLowerCase()}`}>
            {calculation.category} Risk
          </span>
        </div>

        {/* Guidance */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="font-semibold text-gray-900 mb-2">Recommendation</h4>
          <p className="text-sm text-gray-700">
            {categoryGuidance[calculation.category as keyof typeof categoryGuidance]}
          </p>
        </div>

        {/* Risk Level Description */}
        <div className="text-sm text-gray-600">
          <p>
            <strong>Risk Score:</strong> {calculation.score}/25
          </p>
          <p>
            <strong>Category:</strong> {calculation.category} Risk
          </p>
          <p>
            <strong>Assessment:</strong> Based on a 5×5 risk matrix
          </p>
        </div>
      </div>
    </div>
  );
};
