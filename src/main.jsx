import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Create a root and render the App component
const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error("Root element not found!");
} else {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}