import { Component } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  auth,
  createUserProfileDocument,
  addCollectionAndDocuments,
} from "./firebase/firebase.utils";

import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selector";
import { selectCollectionsForPreview } from "./redux/shop/shop.selectors";

import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.componet";
import ShopPage from "./pages/shop/shop.component";
import HomePage from "./pages/homepage/homepage.component";
import CheckOutPage from "./pages/checkout/checkout.component";
import CollectionPage from "./pages/collection/collection.component";

import "./App.css";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser, collectionsArray } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }

      setCurrentUser(userAuth);
      addCollectionAndDocuments(
        "collections",
        collectionsArray.map(({ title, items }) => ({ title, items }))
      );
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop/" element={<ShopPage />} />
          <Route path="/checkout/" element={<CheckOutPage />} />
          <Route path="/shop/:collectionId" element={<CollectionPage />} />
          <Route
            exact
            path="/signin"
            element={
              this.props.currentUser ? (
                <Navigate replace to="/" />
              ) : (
                <SignInAndSignUp />
              )
            }
          />
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsForPreview,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
