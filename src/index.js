import React from 'react';
import ReactDOM from 'react-dom';
import thunk from "redux-thunk";
import {compose} from "recompose";
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {createAPI} from '~/api';
import App from '~/components/app/app.jsx';
import reducer from "~/reducer/reducer";
import {Operation as OperationUser} from "~/reducer/user/user";
import {Operation as OperationData} from "~/reducer/data/data";
import {Operation as OperationCatalog} from "~/reducer/catalog/catalog";
import {Operation as OperationFavorite} from "~/reducer/favorite/favorite";

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
  await Promise.all([
    store.dispatch(OperationData.loadFilmsAndGenre()),
    store.dispatch(OperationCatalog.loadPromoFilm()),
    store.dispatch(OperationFavorite.loadFavorite()),
  ]);
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
