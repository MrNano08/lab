# Risk Calculator Project

A comprehensive risk assessment application built with React (Frontend) and NestJS (Backend) that allows users to calculate and prioritize risks using a 5×5 matrix methodology.

## 🎯 Project Overview

This project implements a risk calculator that follows the Likelihood × Impact methodology, providing:
- **Real-time risk assessment** with visual feedback
- **Interactive 5×5 risk matrix** with color-coded categories
- **Risk management system** for tracking multiple risks
- **Responsive design** for desktop and mobile use
- **API backend** for scalable risk calculations

## 🏗️ Architecture

The project consists of two main components:

### Frontend (`risk-calculator-frontend/`)
- **React 18** with TypeScript
- **Vite** for fast development
- **Tailwind CSS** for styling
- **Local storage** for data persistence

### Backend (`risk-calculator-backend/`)
- **NestJS** framework
- **TypeScript** for type safety
- **RESTful API** with validation
- **CORS** enabled for frontend integration

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Running the Application

1. **Start the Backend API:**
   ```bash
   cd risk-calculator-backend
   npm install
   npm run start:dev
   ```
   The API will be available at `http://localhost:3001`

2. **Start the Frontend:**
   ```bash
   cd risk-calculator-frontend
   npm install
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

## 📊 Risk Assessment Methodology

### Calculation Formula
```
Risk Score = Likelihood × Impact
```

### Risk Categories
- **🟩 Low (1-4)**: Monitor and review periodically
- **🟨 Medium (5-9)**: Consider implementing controls
- **🟧 High (10-16)**: Prioritize controls and mitigation
- **🟥 Extreme (17-25)**: Immediate action required

### Matrix Scale
- **Likelihood**: 1 (Very Low) to 5 (Very High)
- **Impact**: 1 (Very Low) to 5 (Very High)

## 🎨 Features

### Frontend Features
- ✅ Interactive risk input form
- ✅ Real-time calculation display
- ✅ Visual 5×5 risk matrix
- ✅ Risk list management (up to 10 risks)
- ✅ Responsive design
- ✅ Local storage persistence
- ✅ Accessibility features

### Backend Features
- ✅ Risk calculation API
- ✅ Configuration management
- ✅ Input validation
- ✅ CORS support
- ✅ TypeScript type safety

## 📁 Project Structure

```
lab/
├── requirements.md                    # Project requirements
├── risk-calculator-frontend/         # React frontend
│   ├── src/
│   │   ├── components/              # React components
│   │   ├── hooks/                   # Custom hooks
│   │   ├── types/                   # TypeScript types
│   │   └── App.tsx                  # Main app component
│   ├── package.json
│   └── README.md
└── risk-calculator-backend/          # NestJS backend
    ├── src/
    │   ├── risk/                    # Risk module
    │   │   ├── dto/                 # Data transfer objects
    │   │   ├── controllers/         # API controllers
    │   │   └── services/            # Business logic
    │   ├── app.module.ts
    │   └── main.ts
    ├── package.json
    └── README.md
```

## 🔧 Development

### Frontend Development
```bash
cd risk-calculator-frontend
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
```

### Backend Development
```bash
cd risk-calculator-backend
npm run start:dev    # Start development server
npm run build        # Build for production
npm run start:prod   # Start production server
```

## 📡 API Endpoints

### GET /api/config
Returns risk calculator configuration including thresholds and labels.

### POST /api/calc
Calculate risk score and category based on likelihood and impact values.

**Example Request:**
```json
{
  "likelihood": 3,
  "impact": 4
}
```

**Example Response:**
```json
{
  "score": 12,
  "category": "High"
}
```

## 🧪 Testing

The application includes comprehensive validation and error handling:

- **Frontend**: Form validation, input constraints
- **Backend**: Request validation, error responses
- **API**: Proper HTTP status codes and error messages

## 🎯 Use Cases

1. **Risk Analysts**: Assess and prioritize organizational risks
2. **Project Managers**: Evaluate project risks and mitigation strategies
3. **Safety Officers**: Assess workplace safety risks
4. **IT Professionals**: Evaluate cybersecurity risks

## 🔮 Future Enhancements

- Database integration for persistent storage
- User authentication and role management
- Export functionality (PDF/Excel)
- Advanced risk assessment methodologies
- Multi-language support
- Risk templates by domain

## 📄 License

This project is created for educational and demonstration purposes.

## 🤝 Contributing

This project follows the requirements specified in `requirements.md`. For any modifications or enhancements, please refer to the original requirements document.

---

**Built with ❤️ using React, TypeScript, NestJS, and Tailwind CSS**
