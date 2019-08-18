import {combineReducers} from 'redux';
import errors from './errors';
import hosts from './hosts';
import hostCategories from './hostcategories';

export default combineReducers({
    errors,
    hosts,
    hostCategories
});
