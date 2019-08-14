import React from 'react';
import PropTypes from 'prop-types';

const Login = ({
  handleChange, handleKeyPress,
}) => (
  <div className="login">
    <div className="login__title">Введите ваше имя для чата: </div>
    <input
      onKeyPress={handleKeyPress}
      onChange={handleChange}
      className='login__input'
      placeholder='Имя'
      type="text"
    />
  </div>
);

Login.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleKeyPress: PropTypes.func.isRequired,
};

export default Login;