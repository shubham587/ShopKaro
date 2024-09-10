import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.sass";
import { Provider } from "react-redux";
import { store } from "./store/index.jsx";
import { ToastProvider } from "./Helper/Toast/index.jsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastProvider>
        <App />
        <ToastContainer />
      </ToastProvider>
    </Provider>
  </React.StrictMode>
);
