import { combineReducers } from 'redux';

import categories from './categories';

//gets called from index.js as the first parameter
const xyz = () => (
    combineReducers({
        categories,
    })
);

export default xyz;
