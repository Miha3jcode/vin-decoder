import './Button.scss';

import React from 'react';

function Button({className, children, type, onClick, ...props}) {
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
       onClick={onClick}
      >{children}</button>
    </div>
  );
}

export default Button;