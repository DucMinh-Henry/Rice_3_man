import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/configureStore.jsx";
import { CartContextProvider } from "./components/context/CartContext.jsx";
import { Toaster } from "./components/ui/toaster.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <CartContextProvider>
        <App />
        <Toaster></Toaster>
      </CartContextProvider>
    </BrowserRouter>
    <ToastContainer bodyClassName="font-primary text-sm"></ToastContainer>
  </Provider>
);
