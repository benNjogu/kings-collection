import { shopActionsTypes } from "../../constants";

const INTIAL_STATE = {
  //collections: SHOP_DATA,

  collections: null,
  isFetching: false,
  errorMessage: undefined,
};

const shopReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case shopActionsTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true,
      };

    case shopActionsTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload,
      };

    case shopActionsTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
