import {combineReducers} from "redux";
import {reducer as films} from "~/reducer/films/films";
import {reducer as user} from "~/reducer/user/user";
import {reducer as favorite} from "~/reducer/favorite/favorite";
import NameSpace from "./name-spaces";

export default combineReducers({
  [NameSpace.FILMS]: films,
  [NameSpace.USER]: user,
  [NameSpace.FAVORITE]: favorite,
});
