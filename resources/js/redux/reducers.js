import { combineReducers } from 'redux';
import { categoryListReducer } from './categories/reducer';
import { dishListReducer } from './dishes/reducer'
import { loginReducer } from './access/reducer'
import { dishReducer } from "./dish/reducer";
import { filtersReducer } from './filters/reducer';

export const reducers = combineReducers({
    categories: categoryListReducer,
    dish: dishReducer,
    dishes: dishListReducer,
    access: loginReducer,
    filters: filtersReducer,
})
