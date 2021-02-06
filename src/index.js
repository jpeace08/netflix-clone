import React from 'react';
import { render } from 'react-dom';
import { FirebaseContext } from './context/firebase';
import App from './app';
import 'normalize.css';
import reportWebVitals from './reportWebVitals';
import { GlobalStyles } from './global-styles';
import { firebase } from './lib/firebase.prod';

console.log(FirebaseContext);

render(
    <>
        <FirebaseContext.Provider value={{ firebase }}>
            <GlobalStyles />
            <App />
        </FirebaseContext.Provider>
    </>,
    document.getElementById('root'));

reportWebVitals();
