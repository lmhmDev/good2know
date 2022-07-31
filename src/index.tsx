import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './screens/Login/Index';
import CreatePage from './screens/Create';
import ListPage from './screens/List';
import reportWebVitals from './reportWebVitals';
import {initializeFirebase} from './config/firebase'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


const {app,database} = initializeFirebase();




const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/profile" element={'hola'} />
        <Route path="/create" element={<CreatePage />}/>
        <Route path="/list" element={<ListPage />}/>
      </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
