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
import {Operation as OperationFilms} from "~/reducer/films/films";
import {Operation as OperationFavorite} from "~/reducer/favorite/favorite";

async function init() {
  const api = createAPI();

  const store = createStore(
      reducer,
      compose(
          applyMiddleware(thunk.withExtraArgument(api)),
          window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (a) => a
      )
  );
  await store.dispatch(OperationUser.checkLoginUser());
  await Promise.all([
    store.dispatch(OperationFilms.loadFilmsAndGenre()),
    store.dispatch(OperationFilms.loadPromoFilm()),
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
