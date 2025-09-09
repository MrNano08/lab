import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import type { RiskInput, RiskItem, RiskCalculation, RiskConfig } from '../types/risk';

const DEFAULT_CONFIG: RiskConfig = {
  scaleMin: 1,
  scaleMax: 5,
  thresholds: {
    low: [1, 4],
    medium: [5, 9],
    high: [10, 16],
    extreme: [17, 25],
  },
  labels: {
    likelihood: "Likelihood",
    impact: "Impact",
  },
};

export const useRiskCalculator = () => {
  const [config] = useState<RiskConfig>(DEFAULT_CONFIG);
  const [risks, setRisks] = useState<RiskItem[]>([]);
  const [currentRisk, setCurrentRisk] = useState<RiskInput>({
    title: '',
    description: '',
    likelihood: 1,
    impact: 1,
  });

  // Load risks from localStorage on mount
  useEffect(() => {
    const savedRisks = localStorage.getItem('risk-calculator-risks');
    if (savedRisks) {
      try {
        setRisks(JSON.parse(savedRisks));
      } catch (error) {
        console.error('Error loading risks from localStorage:', error);
      }
    }
  }, []);

  // Save risks to localStorage whenever risks change
  useEffect(() => {
    localStorage.setItem('risk-calculator-risks', JSON.stringify(risks));
  }, [risks]);

  const calculateRisk = (likelihood: number, impact: number): RiskCalculation => {
    const score = likelihood * impact;
    
    if (score >= 1 && score <= 4) return { score, category: 'Low' };
    if (score >= 5 && score <= 9) return { score, category: 'Medium' };
    if (score >= 10 && score <= 16) return { score, category: 'High' };
    if (score >= 17 && score <= 25) return { score, category: 'Extreme' };
    
    return { score, category: 'Low' };
  };

  const getCurrentCalculation = (): RiskCalculation => {
    return calculateRisk(currentRisk.likelihood, currentRisk.impact);
  };

  const addRisk = () => {
    if (!currentRisk.title.trim()) return;
    
    if (risks.length >= 10) {
      alert('Maximum 10 risks allowed. Please remove some before adding new ones.');
      return;
    }

    const calculation = getCurrentCalculation();
    const newRisk: RiskItem = {
      ...currentRisk,
      id: uuidv4(),
      score: calculation.score,
      category: calculation.category,
      createdAt: new Date().toISOString(),
    };

    setRisks(prev => [newRisk, ...prev].sort((a, b) => b.score - a.score));
    
    // Reset form
    setCurrentRisk({
      title: '',
      description: '',
      likelihood: 1,
      impact: 1,
    });
  };

  const removeRisk = (id: string) => {
    setRisks(prev => prev.filter(risk => risk.id !== id));
  };

  const updateCurrentRisk = (field: keyof RiskInput, value: any) => {
    setCurrentRisk(prev => ({ ...prev, [field]: value }));
  };

  return {
    config,
    currentRisk,
    risks,
    getCurrentCalculation,
    addRisk,
    removeRisk,
    updateCurrentRisk,
  };
};
