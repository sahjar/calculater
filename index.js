import 'react-app-polyfill/ie9'; // For IE 9-11 support
import 'react-app-polyfill/stable'; 
import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
ReactDOM.render(
  <I18nextProvider i18n={i18n}>
  <App />
</I18nextProvider>,
document.getElementById("root")
);
serviceWorker.unregister();

