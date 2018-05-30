import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import App from './App';

// specify that formReducer is one of the app’s reducer
const reducers = {
    form: formReducer,
};
// combine them all into a single reducer
const reducer = combineReducers(reducers);

let store = createStore(
    reducer
);

export default class Preview extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);