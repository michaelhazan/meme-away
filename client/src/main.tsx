import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.sass';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <>
      <App />
    </>{' '}
    // TODO
  </StrictMode>,
);
