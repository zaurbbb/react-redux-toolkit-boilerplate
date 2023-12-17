import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { adminLogin } from "../index";

import LoginForm from "./forms/LoginForm";

function Module({
  // component props
  type,
  // store props
  // dispatch props
  adminLogin,
}) {
  return (
    <section>
      {type === "login" && <LoginForm adminLogin={adminLogin} />}
    </section>
  );
}

const mapDispatchToProps = (dispatch) => ({
  adminLogin: (username, password) => dispatch(adminLogin({ username, password })),
});

Module.propTypes = {
  type: PropTypes.string.isRequired,
  adminLogin: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Module);
