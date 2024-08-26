import React from 'react';
import {render} from 'react-dom';
import './index.css';
import 'reflect-metadata';

import App from './app/components/App';
import {initStore} from './common/store/initStore';
import reportWebVitals from './reportWebVitals';

// renderApp(document.getElementById('root') as HTMLElement);

export function renderApp(element: HTMLElement) {
    const {store, history} = initStore();
    return render(<App store={store} history={history}></App>, element);
}

renderApp(document.getElementById('root') as HTMLElement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
