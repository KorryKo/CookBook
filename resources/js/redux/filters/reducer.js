import {
   SEARCH_TITLE,
   FILTER_ORDER,
   FILTER_CATEGORY,
   INCLUDE_INGREDIENTS,
   EXCLUDE_INGREDIENTS,
   USER_ID
} from "./actions";

const initialState = {
   searchTitle: "",
   filterOrder: "raiting",
   filterCategory: "",
   includeIngredients: [],
   excludeIngredietns: [],
   userId: "",
}

export const filtersReducer = (state = initialState, action) => {
   switch (action.type) {
      case SEARCH_TITLE: {
         return {
            ...state,
            searchTitle: action.payload,
         };
      }
      case FILTER_ORDER: {
         return {
            ...state,
            filterOrder: action.payload,
         };
      }
      case FILTER_CATEGORY: {
         return {
            ...state,
            filterCategory: action.payload,
         };
      }
      case INCLUDE_INGREDIENTS: {
         return {
            ...state,
            includeIngredients: action.payload,
         };
      }
      case EXCLUDE_INGREDIENTS: {
         return {
            ...state,
            excludeIngredietns: action.payload,
         };
      }
      case USER_ID: {
         return {
            ...state,
            excludeIngredietns: action.payload,
         };
      }
      default:
         return state;
   }
}