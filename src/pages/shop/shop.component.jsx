import React, { Component } from "react";

import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { fetchCollectionsStart } from "./../../redux/shop/shop.actions";

import CollectionsOverViewContainer from "../../components/collection-overview/collection-overview.container";
class ShopPage extends Component {
  componentDidMount() {
    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart();
  }

  render() {
    return (
      <div className="shop-page">
        <CollectionsOverViewContainer {...this.props} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
