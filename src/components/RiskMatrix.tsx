import React from 'react';

interface RiskMatrixProps {
  likelihood: number;
  impact: number;
}

const matrixData = [
  [1, 2, 3, 4, 5],
  [2, 4, 6, 8, 10],
  [3, 6, 9, 12, 15],
  [4, 8, 12, 16, 20],
  [5, 10, 15, 20, 25]
];

const getCategory = (score: number) => {
  if (score >= 1 && score <= 4) return 'Low';
  if (score >= 5 && score <= 9) return 'Medium';
  if (score >= 10 && score <= 16) return 'High';
  if (score >= 17 && score <= 25) return 'Extreme';
  return 'Low';
};

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'Low': return 'bg-risk-low';
    case 'Medium': return 'bg-risk-medium';
    case 'High': return 'bg-risk-high';
    case 'Extreme': return 'bg-risk-extreme';
    default: return 'bg-gray-300';
  }
};

export const RiskMatrix: React.FC<RiskMatrixProps> = ({ likelihood, impact }) => {
  const currentScore = likelihood * impact;

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Risk Matrix (5×5)</h3>
      
      <div className="space-y-4">
        {/* Matrix */}
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full">
            <table className="min-w-full border-collapse">
              <thead>
                <tr>
                  <th className="border border-gray-300 bg-gray-50 px-2 py-1 text-xs font-medium text-gray-700">
                    Likelihood \ Impact
                  </th>
                  {[1, 2, 3, 4, 5].map((impact) => (
                    <th key={impact} className="border border-gray-300 bg-gray-50 px-2 py-1 text-xs font-medium text-gray-700">
                      {impact}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {matrixData.map((row, likelihoodIndex) => (
                  <tr key={likelihoodIndex}>
                    <td className="border border-gray-300 bg-gray-50 px-2 py-1 text-xs font-medium text-gray-700">
                      {likelihoodIndex + 1}
                    </td>
                    {row.map((score, impactIndex) => {
                      const category = getCategory(score);
                      const isCurrentCell = (likelihoodIndex + 1) === likelihood && (impactIndex + 1) === impact;
                      
                      return (
                        <td
                          key={impactIndex}
                          className={`border border-gray-300 px-2 py-1 text-center text-xs font-medium transition-all ${
                            getCategoryColor(category)
                          } text-white ${
                            isCurrentCell 
                              ? 'ring-4 ring-blue-500 ring-opacity-50 shadow-lg scale-105' 
                              : ''
                          }`}
                        >
                          {score}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Legend */}
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-risk-low rounded"></div>
            <span>Low (1-4)</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-risk-medium rounded"></div>
            <span>Medium (5-9)</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-risk-high rounded"></div>
            <span>High (10-16)</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-risk-extreme rounded"></div>
            <span>Extreme (17-25)</span>
          </div>
        </div>

        {/* Current Position */}
        {currentScore > 0 && (
          <div className="text-sm text-gray-600 text-center">
            <p>Current position: Likelihood {likelihood} × Impact {impact} = {currentScore}</p>
          </div>
        )}
      </div>
    </div>
  );
};
