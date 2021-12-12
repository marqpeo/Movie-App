import { StrictMode } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';
import './style/style.sass'

render(
  // <Suspense fallback={<span>sorry</span>}>
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  // </Suspense>
  ,
  document.getElementById('main'));

