import React, { useState, useCallback } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Login from '../../components/Login';
import { login } from '../../store/actions/actions'

import WSocket from '../../service/socket'

const ENTER_KEY = 'Enter';

const LoginContainer = ({ login, dispatch }) => {

  const [name, setName] = useState('');

  const handleChange = useCallback(
    ({ target: { value } }) => setName(value),
    [setName]
  );

  const handleKeyPress = useCallback(
    ({ key }) => {
      if(key ===ENTER_KEY) {
        login(name);
        const socket = WSocket(dispatch);
      }
    },
    [name, login],
  );

  return (
    <Login
      handleChange={handleChange}
      handleKeyPress={handleKeyPress}
    />
  );
};

LoginContainer.propTypes = {
  login: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  login: (name) => {
    dispatch(login(name));
  },
})

const Log = connect(() => ({}), mapDispatchToProps)(LoginContainer);

export default Log;


