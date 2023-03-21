import { lazy, Suspense, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "./redux/user/user.selector";
import { checkUserSession } from "./redux/user/user.actions";
import { fetchCollectionsStart } from "./redux/shop/shop.actions";

import Header from "./components/header/header.componet";
import Spinner from "./components/spinner/spinner.component";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";

import { GlobalStyle } from "./global.styles";

const HomePage = lazy(() => import("./pages/homepage/homepage.component"));
const SignInAndSignUp = lazy(() =>
  import("./pages/sign-in-and-sign-up/sign-in-and-sign-up.component")
);
const ShopPage = lazy(() => import("./pages/shop/shop.component"));
const CheckOutPage = lazy(() => import("./pages/checkout/checkout.component"));
const CollectionsPageContainer = lazy(() =>
  import("./pages/collection/collection.container")
);

const App = ({ checkUserSession, fetchCollectionsStart, currentUser }) => {
  useEffect(() => {
    checkUserSession();
    fetchCollectionsStart();
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route
              path="/shop/"
              element={
                <ShopPage fetchCollectionsStart={fetchCollectionsStart} />
              }
            />
            <Route path="/checkout/" element={<CheckOutPage />} />
            <Route
              exact
              path="/shop/:collectionId"
              element={<CollectionsPageContainer />}
            />
            <Route
              exact
              path="/signin"
              element={
                currentUser ? <Navigate replace to="/" /> : <SignInAndSignUp />
              }
            />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
