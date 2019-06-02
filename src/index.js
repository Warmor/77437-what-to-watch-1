import React from 'react';
import ReactDOM from 'react-dom';
import thunk from "redux-thunk";
import {compose} from "recompose";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import reducer from "~/reducer/reducer";
import {Operation as OperationData} from "./reducer/data/data";
import App from '~/components/app/app.jsx';
import {createAPI} from '~/api';

const api = createAPI();

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
store.dispatch(OperationData.loadData());
ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById(`root`));
