import React from 'react';


import './Input.css'

const Input = ({ message, handleChange, sendMessage }) => {

  return (
    <form className='form' method='POST'>
      <input
        className='input'
        name='message'
        type='text'
        placeholder='Type your messgage...'
        value={message}
        onChange={e => handleChange(e.target.value)}
        onKeyPress={e => e.key === 'Enter' ? sendMessage(e) : null}
      />
    </form>
  );
}

export default Input;