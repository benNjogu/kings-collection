import { SHOP_DATA } from "../../data_store/data";
import { shopActionsTypes } from "../../constants/actionConstants";

const INTIAL_STATE = {
  //collections: SHOP_DATA,

  collections: null,
};

const shopReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case shopActionsTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
