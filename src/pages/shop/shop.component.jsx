import React, { Component } from "react";

import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { fetchCollectionsStartAsync } from "./../../redux/shop/shop.actions";

import CollectionsOverViewContainer from "../../components/collection-overview/collection-overview.container";
class ShopPage extends Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
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
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
