import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '../src/components/App';
import reportWebVitals from './reportWebVitals';
import {createTheme, ThemeProvider} from "@mui/material";




  const theme=createTheme({
    palette: {
        primary : {
            main : "#FFFFFF",
        },
    },
    
    
});





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
  </React.StrictMode>
);

// to log results (for example: reportWebVitals(console.log))

reportWebVitals();
