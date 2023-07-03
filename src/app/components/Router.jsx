import React from "react";
import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import {
  privateRoutes,
  publicRoutes,
} from "../routes";
function Router({
  // store props
  isAuth,
  // dispatch props
}) {
  const defaultRoute = isAuth ? "/dashboard" : "/login";

  console.log("isAuth", isAuth);

  return (
    <Routes>
      {!isAuth && publicRoutes.map((route) =>
        <Route
          key={route.path}
          {...route}
        />,
      )}
      {isAuth && privateRoutes.map((route) =>
        <Route
          key={route.path}
          {...route}
        />,
      )}
      <Route
        path="*"
        element={(
          <Navigate
            to={defaultRoute}
            replace
          />
        )}
      />
    </Routes>
  );
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});
const mapDispatchToProps = () => ({
  // checkAuth: () => dispatch(checkAuth()),
  // adminLogout: () => dispatch(adminLogout()),
});

Router.propTypes = {
  isAuth: PropTypes.bool.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Router);
