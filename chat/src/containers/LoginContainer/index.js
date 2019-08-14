import React, { useState, useCallback } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Login from "../../components/Login"

const ENTER_KEY = 'Enter';

const LoginContainer = ({ start }) => {

  const [name, setName] = useState('');

  const handleChange = useCallback(
    ({ target: { value } }) => setName(value),
    [setName]
  );

  const handleKeyPress = useCallback(
    ({ key }) => {
      if(key ===ENTER_KEY) {
        start(name)
      }
    },
    [name, start],
  );

  return (
    <Login
      handleChange={handleChange}
      handleKeyPress={handleKeyPress}
    />
  );
};

LoginContainer.propTypes = {
  start: PropTypes.func.isRequired,
};


export default LoginContainer;