import React from "react";
import { useNavigate } from "react-router-dom";

import CollectionItem from "../collection-item/collection-item.component";

import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, items }) => {
  const navigate = useNavigate();

  const handleClick = (url) => {
    navigate(`/shop/${url}`);
  };

  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
        <div
          className="view-collection"
          onClick={() => handleClick(title.toLowerCase())}
        >
          &#10095;
        </div>
      </div>
    </div>
  );
};

export default CollectionPreview;
