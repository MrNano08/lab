# Risk Calculator Frontend

A React-based risk calculator application that allows users to assess risks using a 5×5 matrix methodology.

## Features

- **Risk Assessment**: Calculate risk scores based on Likelihood × Impact
- **Visual Matrix**: Interactive 5×5 risk matrix with color-coded categories
- **Risk Management**: Add and manage up to 10 risks with automatic sorting
- **Real-time Calculation**: Instant risk assessment as you adjust values
- **Responsive Design**: Works on desktop and mobile devices
- **Local Storage**: Persists risk data in browser storage

## Technology Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **UUID** for unique identifiers

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── RiskForm.tsx          # Risk input form
│   ├── RiskResultCard.tsx    # Risk calculation results
│   ├── RiskMatrix.tsx        # 5×5 risk matrix visualization
│   └── RiskList.tsx          # List of saved risks
├── hooks/
│   └── useRiskCalculator.ts  # Custom hook for risk logic
├── types/
│   └── risk.ts              # TypeScript type definitions
└── App.tsx                  # Main application component
```

## Risk Categories

- **Low (1-4)**: Monitor and review periodically
- **Medium (5-9)**: Consider implementing controls
- **High (10-16)**: Prioritize controls and mitigation
- **Extreme (17-25)**: Immediate action required

## API Integration

The frontend can optionally connect to a NestJS backend API for:
- Configuration management
- Server-side risk calculations
- Data persistence

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Style

- TypeScript for type safety
- Tailwind CSS for styling
- Functional components with hooks
- Responsive design principles
