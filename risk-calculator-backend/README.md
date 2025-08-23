# Risk Calculator Backend

A NestJS-based API backend for the Risk Calculator application, providing risk assessment calculations and configuration management.

## Features

- **Risk Calculation API**: Calculate risk scores based on Likelihood × Impact
- **Configuration Management**: Provide risk matrix configuration and thresholds
- **Input Validation**: Comprehensive validation using class-validator
- **CORS Support**: Configured for frontend integration
- **TypeScript**: Full type safety throughout the application

## Technology Stack

- **NestJS** - Progressive Node.js framework
- **TypeScript** - Type-safe JavaScript
- **class-validator** - Input validation
- **class-transformer** - Object transformation

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
npm run start:dev
```

3. The API will be available at `http://localhost:3001`

### Building for Production

```bash
npm run build
npm run start:prod
```

## API Endpoints

### GET /api/config

Returns the risk calculator configuration including thresholds and labels.

**Response:**
```json
{
  "scaleMin": 1,
  "scaleMax": 5,
  "thresholds": {
    "low": [1, 4],
    "medium": [5, 9],
    "high": [10, 16],
    "extreme": [17, 25]
  },
  "labels": {
    "likelihood": "Likelihood",
    "impact": "Impact"
  }
}
```

### POST /api/calc

Calculate risk score and category based on likelihood and impact values.

**Request:**
```json
{
  "likelihood": 3,
  "impact": 4
}
```

**Response:**
```json
{
  "score": 12,
  "category": "High"
}
```

## Project Structure

```
src/
├── risk/
│   ├── dto/
│   │   ├── calc.dto.ts       # Calculation request/response DTOs
│   │   └── config.dto.ts     # Configuration response DTO
│   ├── calc.controller.ts    # Calculation endpoint controller
│   ├── config.controller.ts  # Configuration endpoint controller
│   ├── risk.service.ts       # Risk calculation business logic
│   └── risk.module.ts        # Risk module definition
├── app.module.ts             # Main application module
└── main.ts                   # Application entry point
```

## Risk Calculation Logic

The risk calculation follows the formula:
- **Score = Likelihood × Impact**
- **Range**: 1-25 (5×5 matrix)

### Risk Categories

- **Low (1-4)**: Monitor and review periodically
- **Medium (5-9)**: Consider implementing controls
- **High (10-16)**: Prioritize controls and mitigation
- **Extreme (17-25)**: Immediate action required

## Development

### Available Scripts

- `npm run start:dev` - Start development server with hot reload
- `npm run build` - Build the application
- `npm run start:prod` - Start production server
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode

### Environment Variables

- `PORT` - Server port (default: 3001)

### CORS Configuration

The API is configured to accept requests from:
- `http://localhost:5173` (Vite dev server)
- `http://localhost:3000` (Alternative frontend port)

## Validation

All API endpoints include comprehensive input validation:

- **Likelihood**: Integer between 1-5
- **Impact**: Integer between 1-5
- **Request Format**: JSON with required fields

## Error Handling

The API returns appropriate HTTP status codes:
- `200` - Success
- `400` - Bad Request (validation errors)
- `500` - Internal Server Error
