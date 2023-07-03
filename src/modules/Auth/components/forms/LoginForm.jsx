import React, { useRef } from "react";
import PropTypes from "prop-types";

function LoginForm({
  adminLogin,
}) {
  const userEmailInputRef = useRef();
  const userPasswordInputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const userEmailValue = userEmailInputRef.current.value;
    const userPasswordValue = userPasswordInputRef.current.value;

    adminLogin(
      userEmailValue,
      userPasswordValue,
    );
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        ref={userEmailInputRef}
        placeholder="Введите вашу почту"
      />
      <input
        type="text"
        ref={userPasswordInputRef}
        placeholder="Введите вашу почту"
      />
      <input
        type="submit"
        value="Войти"
      />
    </form>
  );
}

LoginForm.propTypes = {
  adminLogin: PropTypes.func.isRequired,
};

export default LoginForm;
