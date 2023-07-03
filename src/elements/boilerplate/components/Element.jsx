// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";

function Element() {
  return (
    <div>
      Boilerplate Element
    </div>
  );
}

Element.propTypes = {
  adminLogin: PropTypes.func.isRequired,
};

export default Element;
