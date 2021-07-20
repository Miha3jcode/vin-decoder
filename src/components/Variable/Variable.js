import './Variable.scss';

import React from 'react';

function Variable({className, name, groupName, description, dataType, ...props}) {
  return (
    <article
      {...props}
      className={[
        'variable',
        className,
      ].join(' ')}
    >
      <header className={'variable__header'}>
        <p className={'text'}>
          {name}
          {' '}
          {
            groupName
              ? `<${groupName}>`
              : null
          }
        </p>
      </header>
      {
        dataType
          ? (
            <p className={'text'}>
              {'DataType:'}
              {' '}
              <span className={'subtext'}>{dataType}</span>
            </p>
          )
          : null
      }
      {
        description
          ? (
            <p className={'text'}>
              {'Description:'}
              {' '}
              <span className={'subtext'}>{description}</span>
            </p>
          )
          : null
      }
    </article>
  );
}

export default Variable;