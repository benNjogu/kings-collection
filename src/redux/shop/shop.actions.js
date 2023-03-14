import { shopActionsTypes } from "../../constants/actionConstants";

export const updateCollections = (collectionsMap) => ({
  type: shopActionsTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap,
});
