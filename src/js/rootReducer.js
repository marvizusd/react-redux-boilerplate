import { combineReducers } from 'redux';
import unnamedReducer from './components/FolderOne/Reducer';

const rootReducer = combineReducers({
    only:unnamedReducer
});

export default rootReducer;