import { useEffect } from "react";

import { connect } from "react-redux";
import { fetchCollectionsStart } from "./../../redux/shop/shop.actions";

import CollectionsOverViewContainer from "../../components/collection-overview/collection-overview.container";

const ShopPage = ({ fetchCollectionsStart }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className="shop-page">
      <CollectionsOverViewContainer {...fetchCollectionsStart} />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
