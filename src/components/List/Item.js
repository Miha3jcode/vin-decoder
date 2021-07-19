import './List.scss';

import React from 'react';

function Item({className, children, ...props}) {
  return (
    <li
      {...props}
      className={[
        'list__item',
        className
      ].join(' ')}
    >
      {children}
    </li>
  );
}

export default Item;
