import { FETCH_DATA, UPDATE_QUOTE, ERROR } from "../actions/quoteAction";

const initialState = {
  quote: [],
  isFetchingData: false,
  error: ""
};

export const quoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        isFetchingData: true,
        quote: []
      };
    case UPDATE_QUOTE:
      return {
        ...state,
        isFetchingData: false,
        quote: action.payload
      };
    case ERROR:
      return {
        ...state,
        isFetchingData: false,
        error: action.payload
      };
    default:
      return state;
  }
};
