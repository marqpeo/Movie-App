import { StrictMode, Suspense } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App/App';
import SpinnerPage from './pages/SpinnerPage/SpinnerPage';
import './style/style.sass'

render(
    <Suspense fallback={<SpinnerPage/>}>
      <StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </StrictMode>
    </Suspense>,
document.getElementById('main'));

