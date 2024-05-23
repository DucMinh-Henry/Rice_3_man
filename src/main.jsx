import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/configureStore.jsx";
import CartContext from "./components/context/CartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <CartContext>
          <App />
        </CartContext>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
