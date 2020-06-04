import {
    FETCH_PRODUCTS,
    FILTER_PRODUCTS_TYPE
  } from "../types";
  
  export const productsReducer = (state = {}, action) => {
    switch (action.type) {
      case FETCH_PRODUCTS:
        return { items: action.payload, filteredItems: action.payload };
      case FILTER_PRODUCTS_TYPE:
        return {
          ...state,
          filterType: action.payload.filterType,
          filteredItems: action.payload.items,
        };
      default:
        return state;
    }
  };
  