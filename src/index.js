import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import axios from 'axios';
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter as Router } from "react-router-dom";

axios.defaults.baseURL = 'https://desafio-final-backend.herokuapp.com/api';
// axios.defaults.baseURL = 'http://localhost:4000/api';

ReactDOM.render(
  // <React.StrictMode>
    <Router>
      <App />
    </Router>
  // </React.StrictMode>,
  ,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
