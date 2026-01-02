import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App';
import { Provider } from 'react-redux';
import Store from "./Redux/Store"
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Navbar from './Components/Partials/Navbar';
// import Home from './Components/Home';
// import Footer from './Components/Partials/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <>
    <Provider store={Store}>
        <App/>
    </Provider>
    </>
)