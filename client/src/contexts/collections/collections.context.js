import { createContext } from "react";

import { SHOP_DATA } from "../../data_store/data";

const CollectionsContext = createContext(SHOP_DATA);

export default CollectionsContext;
