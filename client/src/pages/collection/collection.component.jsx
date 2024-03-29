import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

import { selectCollections } from "../../redux/shop/shop.selectors";

import CollectionItem from "../../components/collection-item/collection-item.component";

import "./collection.styles.scss";

const CollectionPage = ({ collections }) => {
  const { collectionId } = useParams();

  useEffect(() => {
    getCollection();
  }, [collectionId]);

  const getCollection = () => {
    const collection = collections ? collections[collectionId] : null;

    return collection;
  };

  const { title, items } = getCollection();

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  collections: selectCollections(state),
});

export default connect(mapStateToProps)(CollectionPage);
