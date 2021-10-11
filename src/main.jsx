import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert" style={{ margin: '2rem', color: 'darkred' }}>
      <p>[CRITICAL ERROR] Fatal Rift in Space Time Continuum:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Meh, try again!</button>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root'),
);
