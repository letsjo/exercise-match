import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ReactChannelIO } from "react-channel-plugin";
import ScrollToTop from "./utils/ScrollTop";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ReactChannelIO
        pluginKey="aaf7a64b-5864-4a4b-9a75-1ad7b86c3e8c"
        language="en"
        autoBoot
      >
        <ScrollToTop/>
        <App />
      </ReactChannelIO>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
