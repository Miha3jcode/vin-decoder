import './Input.scss';

import React from 'react';
import {ErrorMessage} from 'formik';

function Input({className, field, label, ...props}) {
  return (
    <label
      {...props}
      className={[
        'input',
        className,
      ].join(' ')}
    >
      {
        label
          ? <span className={'input__label'}>{label}</span>
          : null
      }
      <input
        {...field}
        className={'input__element'}
      />
      <ErrorMessage
        {...field}
        render={Message}
      />
    </label>
  );
}

function Message(message) {
  return (
    <span className={'input__error'}>{message}</span>
  );
}

export default Input;