import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import WebFont from 'webfontloader';

import reducer from './reducers';
import './app.css';
import App from './containers/app';
import highestScoreSaga from './sagas/highestScoreSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(logger, sagaMiddleware));

sagaMiddleware.run(highestScoreSaga);

WebFont.load({
    google: {
        families: ['Vollkorn:400i', 'Kelly+Slab'],
    }
});

function FilippovichGame() {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
}

ReactDOM.render(<FilippovichGame/>, document.getElementById('root'));

export default FilippovichGame;