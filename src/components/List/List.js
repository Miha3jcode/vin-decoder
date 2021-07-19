import './List.scss';

import React from 'react';

import Item from './Item';

function List({className, children, ...props}) {
  return (
    <ul
      {...props}
      className={[
        'list',
        className,
      ].join(' ')}
    >
      {children}
    </ul>
  );
}

List.Item = Item;

export default List;