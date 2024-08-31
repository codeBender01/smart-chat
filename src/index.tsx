import {render} from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import 'reflect-metadata';
import store from '@store/initStore';

import App from './app/components/App';
import reportWebVitals from './reportWebVitals';

// renderApp(document.getElementById('root') as HTMLElement);

export function renderApp(element: HTMLElement) {
    return render(
        <Provider store={store}>
            <App />
        </Provider>,
        element
    );
}

renderApp(document.getElementById('root') as HTMLElement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
