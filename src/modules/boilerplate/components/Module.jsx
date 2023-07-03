import React from "react";

import { connect } from "react-redux";
import PropTypes from "prop-types";

function Module({
  // store props
}) {
  return (
    <section>
      Boilerpate Module
    </section>
  );
}

const mapStateToProps = (state) => ({

});
const mapDispatchToProps = (dispatch) => ({

});

Module.propTypes = {
  adminLogin: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Module);
