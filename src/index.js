import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import RialeDiscussionBoard from './pages/DiscussionDashBoard';
import reportWebVitals from './reportWebVitals';
import 'react-comments-section/dist/index.css'
import App from './App';

// seutp i18n ---------------
import i18n from './i18n';

var lng = window.navigator['userLanguage']|| window.navigator.language;

const languageStorage = localStorage.getItem("rialenet_language") || lng;

if(languageStorage !== 'it-IT'){
    i18n.changeLanguage('en-US');
}else{
    i18n.changeLanguage('it-IT');
}
   
ReactDOM.render(
  <React.Fragment>
    <App />
  </React.Fragment>,
  document.getElementById('root')
);

/*
//https://create-react-app.dev/docs/deployment/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
