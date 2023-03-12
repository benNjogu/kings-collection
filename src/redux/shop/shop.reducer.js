import { SHOP_DATA } from "../../data_store/data";

const INTIAL_STATE = {
  collections: SHOP_DATA,
};

const shopReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
