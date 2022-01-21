import { StrictMode, Suspense } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';


import App from './App/App';
import SpinnerPage from './pages/SpinnerPage/SpinnerPage';
import './style/style.sass'

export const theme = createTheme({
  typography:{
    fontFamily: 'Noto Sans'
  }
})

render(
    <Suspense fallback={<SpinnerPage/>}>
      <StrictMode>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </StrictMode>
    </Suspense>,
document.getElementById('main'));

