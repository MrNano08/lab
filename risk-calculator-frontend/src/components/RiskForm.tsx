import React from 'react';
import type { RiskInput } from '../types/risk';

interface RiskFormProps {
  currentRisk: RiskInput;
  onUpdateRisk: (field: keyof RiskInput, value: any) => void;
  onAddRisk: () => void;
}

const likelihoodDescriptions = {
  1: 'Very Low - Rarely occurs',
  2: 'Low - Occurs occasionally',
  3: 'Medium - Occurs sometimes',
  4: 'High - Occurs frequently',
  5: 'Very High - Occurs very frequently'
};

const impactDescriptions = {
  1: 'Very Low - Minimal impact',
  2: 'Low - Minor impact',
  3: 'Medium - Moderate impact',
  4: 'High - Significant impact',
  5: 'Very High - Critical impact'
};

export const RiskForm: React.FC<RiskFormProps> = ({
  currentRisk,
  onUpdateRisk,
  onAddRisk
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddRisk();
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Risk Calculator</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
            Risk Title *
          </label>
          <input
            type="text"
            id="title"
            value={currentRisk.title}
            onChange={(e) => onUpdateRisk('title', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter risk title..."
            maxLength={100}
            required
          />
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
            Description (Optional)
          </label>
          <textarea
            id="description"
            value={currentRisk.description || ''}
            onChange={(e) => onUpdateRisk('description', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter risk description..."
            rows={3}
            maxLength={500}
          />
        </div>

        {/* Likelihood */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Likelihood (Probability)
          </label>
          <div className="grid grid-cols-5 gap-2">
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => onUpdateRisk('likelihood', value)}
                className={`p-3 rounded-md border-2 transition-colors ${
                  currentRisk.likelihood === value
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
                title={likelihoodDescriptions[value as keyof typeof likelihoodDescriptions]}
              >
                <div className="text-lg font-bold">{value}</div>
                <div className="text-xs text-gray-600 mt-1">
                  {value === 1 ? 'Very Low' : value === 2 ? 'Low' : value === 3 ? 'Medium' : value === 4 ? 'High' : 'Very High'}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Impact */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Impact (Severity)
          </label>
          <div className="grid grid-cols-5 gap-2">
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => onUpdateRisk('impact', value)}
                className={`p-3 rounded-md border-2 transition-colors ${
                  currentRisk.impact === value
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
                title={impactDescriptions[value as keyof typeof impactDescriptions]}
              >
                <div className="text-lg font-bold">{value}</div>
                <div className="text-xs text-gray-600 mt-1">
                  {value === 1 ? 'Very Low' : value === 2 ? 'Low' : value === 3 ? 'Medium' : value === 4 ? 'High' : 'Very High'}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!currentRisk.title.trim()}
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          Add Risk to List
        </button>
      </form>
    </div>
  );
};
