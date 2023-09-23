import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import Application from './application';
import './style.css';

const rootElement = document.getElementById('root');
const rootApplication = ReactDOM.createRoot(rootElement);

rootApplication.render(
  <StrictMode>
    <BrowserRouter>
      <Application />
    </BrowserRouter>
  </StrictMode>,
);
