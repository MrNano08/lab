
import { RiskForm } from './components/RiskForm';
import { RiskResultCard } from './components/RiskResultCard';
import { RiskMatrix } from './components/RiskMatrix';
import { RiskList } from './components/RiskList';
import { useRiskCalculator } from './hooks/useRiskCalculator';

function App() {
  const {
    currentRisk,
    risks,
    getCurrentCalculation,
    addRisk,
    removeRisk,
    updateCurrentRisk,
  } = useRiskCalculator();

  const currentCalculation = getCurrentCalculation();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Risk Calculator
          </h1>
          <p className="text-gray-600">
            Calculate and prioritize risks using a 5×5 matrix
          </p>
        </header>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Left Column - Form */}
          <div>
            <RiskForm
              currentRisk={currentRisk}
              onUpdateRisk={updateCurrentRisk}
              onAddRisk={addRisk}
            />
          </div>

          {/* Right Column - Results and Matrix */}
          <div className="space-y-6">
            <RiskResultCard
              calculation={currentCalculation}
              likelihood={currentRisk.likelihood}
              impact={currentRisk.impact}
            />
            <RiskMatrix
              likelihood={currentRisk.likelihood}
              impact={currentRisk.impact}
            />
          </div>
        </div>

        {/* Risk List */}
        <div className="mb-8">
          <RiskList
            risks={risks}
            onRemoveRisk={removeRisk}
          />
        </div>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm">
          <p>
            Risk assessment based on Likelihood × Impact methodology
          </p>
          <p className="mt-1">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
