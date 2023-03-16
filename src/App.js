import { Component } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "./redux/user/user.selector";
import { checkUserSession } from "./redux/user/user.actions";

import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.componet";
import ShopPage from "./pages/shop/shop.component";
import HomePage from "./pages/homepage/homepage.component";
import CheckOutPage from "./pages/checkout/checkout.component";
import CollectionsPageContainer from "./pages/collection/collection.container";

import "./App.css";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
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
          <Route
            path="/shop/:collectionId"
            element={<CollectionsPageContainer />}
          />
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
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
