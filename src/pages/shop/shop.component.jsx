import React, { Component } from "react";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

import { connect } from "react-redux";

import WithSpinner from "../../components/with-spinner/with-spinner.component";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import { updateCollections } from "./../../redux/shop/shop.actions";

const CollectionOverViewWithSpinner = WithSpinner(CollectionOverview);
class ShopPage extends Component {
  state = {
    loading: true,
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    fetch(
      "https://firestore.googleapis.com/v1/projects/kings-collection-8aa88/databases/(default)/documents/collections"
    )
      .then((res) => res.json())
      .then((collections) => console.log(collections));

    // collectionRef.get().then((snapshot) => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   updateCollections(collectionsMap);
    //   this.setState({ loading: false });
    // });
  }

  render() {
    const { loading } = this.state;

    return (
      <div className="shop-page">
        <CollectionOverViewWithSpinner isLoading={loading} {...this.props} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
