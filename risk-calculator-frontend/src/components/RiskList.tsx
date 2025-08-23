import React from 'react';
import type { RiskItem } from '../types/risk';

interface RiskListProps {
  risks: RiskItem[];
  onRemoveRisk: (id: string) => void;
}

export const RiskList: React.FC<RiskListProps> = ({ risks, onRemoveRisk }) => {
  if (risks.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Risk List</h3>
        <div className="text-center text-gray-500 py-8">
          <p>No risks added yet.</p>
          <p className="text-sm mt-2">Add risks using the form to see them here.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-gray-900">Risk List</h3>
        <span className="text-sm text-gray-600">
          {risks.length}/10 risks
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Risk
              </th>
              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                L
              </th>
              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                I
              </th>
              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Score
              </th>
              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {risks.map((risk) => (
              <tr key={risk.id} className="hover:bg-gray-50">
                <td className="px-3 py-3">
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      {risk.title}
                    </div>
                    {risk.description && (
                      <div className="text-sm text-gray-500 truncate max-w-xs">
                        {risk.description}
                      </div>
                    )}
                  </div>
                </td>
                <td className="px-3 py-3 text-sm text-gray-900">
                  {risk.likelihood}
                </td>
                <td className="px-3 py-3 text-sm text-gray-900">
                  {risk.impact}
                </td>
                <td className="px-3 py-3 text-sm font-medium text-gray-900">
                  {risk.score}
                </td>
                <td className="px-3 py-3">
                  <span className={`risk-pill ${risk.category.toLowerCase()}`}>
                    {risk.category}
                  </span>
                </td>
                <td className="px-3 py-3 text-sm">
                  <button
                    onClick={() => onRemoveRisk(risk.id)}
                    className="text-red-600 hover:text-red-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    title="Remove risk"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {risks.length >= 10 && (
        <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
          <p className="text-sm text-yellow-800">
            Maximum of 10 risks reached. Remove some risks to add new ones.
          </p>
        </div>
      )}
    </div>
  );
};
