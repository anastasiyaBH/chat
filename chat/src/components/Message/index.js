import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Message = ({message, from, time}) => {
  return (
    <div className='message'>
      <span className='message__time'>{time} : </span>
      <span className='message__fromr'>{from} : </span>
      {message}
    </div>
  )
}

Message.propTypes = {
  message: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
}

export default Message;