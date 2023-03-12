import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import CollectionItem from "../../components/collection-item/collection-item.component";

import { connect } from "react-redux";
import { selectCollections } from "../../redux/shop/shop.selectors";

import "./collection.styles.scss";

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};

const CollectionPage = ({ collections }) => {
  const { collectionId } = useParams();

  useEffect(() => {
    return () => {
      getCollection();
    };
  }, [collectionId]);

  console.log(collections);

  const getCollection = () => {
    const collection = collections.find(
      (collection) => collection.id === COLLECTION_ID_MAP[collectionId]
    );

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
