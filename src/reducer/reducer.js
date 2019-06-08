import {combineReducers} from "redux";
import {reducer as data} from "~/reducer/data/data";
import {reducer as catalog} from "~/reducer/catalog/catalog";
import {reducer as user} from "~/reducer/user/user";
import {reducer as favorite} from "~/reducer/favorite/favorite";
import NameSpace from "./name-spaces";

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.CATALOG]: catalog,
  [NameSpace.USER]: user,
  [NameSpace.FAVORITE]: favorite,
});
