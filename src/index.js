import React from 'react';
import ReactDOM from 'react-dom';
import thunk from "redux-thunk";
import {compose} from "recompose";
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import App from '~/components/app/app.jsx';
import reducer from "~/reducer/reducer";
import {Operation as OperationUser} from "~/reducer/user/user";

import {createAPI} from '~/api';

async function init() {
  const api = createAPI();

  const store = createStore(
      reducer,
      compose(
          applyMiddleware(thunk.withExtraArgument(api)),
          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      )
  );
  await store.dispatch(OperationUser.checkLoginUser());
  ReactDOM.render(
      <Provider store={store}>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </Provider>,
      document.getElementById(`root`)
  );
}

init();
