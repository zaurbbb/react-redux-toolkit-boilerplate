// eslint-disable-next-line import/order
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import {
  store,
  persistor,
} from "../index";

import Router from "./Router.jsx";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
