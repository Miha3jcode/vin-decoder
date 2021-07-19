import './Button.scss';

import React from 'react';

function Button({className, children, type, disabled, onClick, ...props}) {
  return (
    <div
      {...props}
      className={[
        'button',
        className,
      ].join(' ')}
    >
      <button
       className={'button__element'}
       type={type}
       disabled={disabled}
       onClick={onClick}
      >{children}</button>
    </div>
  );
}

export default Button;