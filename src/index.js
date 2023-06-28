import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./styles/icons/icons.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { composeWithDevDevTools } from "redux-devtools-extension";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { store } from "./redux/store";
import {Toaster} from 'react-hot-toast'
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <Provider store={store}>
//     <PersistGate persistor={persistStore(store)}>
//       <Router>
//         <App />
//       </Router>
//     </PersistGate>
//   </Provider>
// );

ReactDOM.render(
  <Provider store={store}>
  <PersistGate persistor={persistStore(store)}>
    <Router>
      <App />
      <Toaster />
    </Router>
  </PersistGate>
</Provider>,
  document.getElementById("root")
);
