import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './app';
import 'normalize.css';
import reportWebVitals from './reportWebVitals';
import { GlobalStyles } from './global-styles';

render(
    <>
        <Provider store={store}>
            <GlobalStyles />
            <App />
        </Provider>
    </>,
    document.getElementById('root'));

reportWebVitals();
