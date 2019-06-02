import {combineReducers} from "redux";
import {reducer as data} from "~/reducer/data/data";
import {reducer as catalog} from "~/reducer/catalog/catalog";
import NameSpace from "./name-spaces";

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.CATALOG]: catalog,
});
