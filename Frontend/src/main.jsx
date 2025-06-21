// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router";
import { store } from './Store/Store.jsx'
import { Provider } from 'react-redux'


createRoot(document.getElementById("root")).render(
  // <StrictMode>
    <Provider store={store}>
      
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </Provider>
  // </StrictMode>
);
