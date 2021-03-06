import {combineReducers} from "redux";
import Auth from "./Auth";
import Collections from "./Collections";
import Wallet from "./Wallet";
import Settings from "./Settings";


export const getReducers = () => ({
	auth        : Auth,
	collections : Collections,
	wallet      : Wallet,
	settings    : Settings,
});

export default () => {
	const reducers = getReducers();
	return combineReducers(reducers);
}


