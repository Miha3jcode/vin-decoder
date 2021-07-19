import './Button.scss';

import React from 'react';

function Button({className, onClick, children, ...props}) {
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
       onClick={onClick}
      >{children}</button>
    </div>
  );
}

export default Button;