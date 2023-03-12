import React from "react";
import { useParams, useNavigate } from "react-router-dom";

import CollectionOverview from "../../components/collection-overview/collection-overview.component";

const ShopPage = ({ collection }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(collection);
  return (
    <div className="shop-page">
      <CollectionOverview />
    </div>
  );
};

export default ShopPage;
