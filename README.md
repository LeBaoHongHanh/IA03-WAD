# IA03 – Build a Sum Calculator App using React
## Overview
This project implements a Sum Calculator App using ReactJS functional components.
The app allows users to input two numbers, validate the inputs, and display the calculated sum.
It demonstrates state management with useState, event handling, and component-based UI design in React.

## Features
1. Two Input Boxes for entering numbers
2. Calculate Button to trigger computation
3. Display Result dynamically below the button
4. Validation:
- Detects empty inputs
- Detects invalid (non-numeric) inputs
5. Attractive UI using modern CSS (card layout, hover animation)
6. Responsive Design for mobile view

## Technical Implementation
### 1. Component Structure
```
sum-app/
├── public/
    ├── index.html
├── src/
|   ├── components/
|   │   └── SumCalculator.jsx
|   │   └── SumCalculator.css
|   ├── App.jsx
|   ├── App.css
|   ├── index.js
|   └── index.css
├── package-lock.json
├── package.json
└── README.md
```

### 2. Main Functional Component
**SumCalculator.jsx**

Implements logic for:
- Managing states (`number1`, `number2`, `result`, `error`)
- Validating input
- Computing the sum
- Displaying errors and results with conditional rendering

### 3. State Management
```jsx
const [number1, setNumber1] = useState("");
const [number2, setNumber2] = useState("");
const [result, setResult] = useState(null);
const [error, setError] = useState("");
```

### 4. Validation Logic
- Empty fields trigger warning
- Non-numeric inputs trigger error
- Otherwise, compute num1 + num2 and display result.

## User Interface
Styled using CSS3, featuring:
- Centered layout with card design
- Gradient background button
- Smooth hover animation
- Subtle shadows and rounded corners
- Responsive design down to mobile width (≤480px)

## React Concepts Used
| Concept | Usage |
|----------|--------|
| Functional Components | Implemented in both `App.jsx` and `SumCalculator.jsx` |
| useState Hook | For managing user inputs, result, and error states |
| Conditional Rendering | For showing error or result |
| Controlled Components | Inputs linked to state |

---

## How to Run the App
### 1. Install Dependencies
```bash
npm install
```

### 2️. Start Development Server
```bash
npm start
```

App will run at: http://localhost:3000/

## Deployment
GitHub Pages: via 
```bash
npm run build
```
Then configure GitHub repository → Settings → Pages → select gh-pages branch or /build folder.