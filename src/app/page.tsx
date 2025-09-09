'use client'

import { RiskForm } from '../components/RiskForm'
import { RiskResultCard } from '../components/RiskResultCard'
import { RiskMatrix } from '../components/RiskMatrix'
import { RiskList } from '../components/RiskList'
import { useRiskCalculator } from '../hooks/useRiskCalculator'
import './globals.css'

export default function HomePage() {
  const {
    currentRisk,
    risks,
    getCurrentCalculation,
    addRisk,
    removeRisk,
    updateCurrentRisk,
  } = useRiskCalculator()

  const calculation = getCurrentCalculation()

  return (
    <main className="max-w-5xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">Risk Calculator (5×5)</h1>

      <section className="grid md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <RiskForm
            currentRisk={currentRisk}
            onUpdateRisk={updateCurrentRisk}
            onAddRisk={addRisk}
          />
          <RiskResultCard
            calculation={calculation}
            likelihood={currentRisk.likelihood}
            impact={currentRisk.impact}
          />
        </div>
        <RiskMatrix likelihood={currentRisk.likelihood} impact={currentRisk.impact} />
      </section>

      <RiskList risks={risks} onRemoveRisk={removeRisk} />
    </main>
  )
}
