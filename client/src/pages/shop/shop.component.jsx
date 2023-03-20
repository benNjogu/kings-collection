import CollectionsOverViewContainer from "../../components/collection-overview/collection-overview.container";

const ShopPage = ({ fetchCollectionsStart }) => {
  return (
    <div className="shop-page">
      <CollectionsOverViewContainer {...fetchCollectionsStart} />
    </div>
  );
};

export default ShopPage;
