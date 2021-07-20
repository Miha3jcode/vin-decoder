import 'assets/scss/fonts.scss';
import './Variables.scss';

import React from 'react';

import {
  useEffect,
} from 'react';

import {
  useSelector,
} from "react-redux";

import {
  List,
  Variable,
} from 'components';

import {
  useReduxCallback,
} from 'hooks';

import {
  getVariables,
  selectVariables,
} from 'redux/slices/vehicles';

function Variables() {

  const getVariablesCallback = useReduxCallback(getVariables);

  const variables = useSelector(selectVariables);

  useEffect(
    () => getVariablesCallback(),
    [getVariablesCallback],
  );

  return (
    <div className={'variables'}>
      <p className={'title variables__title'}>Variables:</p>
      <List>
        {
          variables
            ? variables.map(variable => ((
              <List.Item key={variable.id}>
                <Variable
                  name={variable.name}
                  groupName={variable.groupName}
                  description={variable.description}
                  dataType={variable.dataType}
                />
              </List.Item>
            )))
            : null
        }
      </List>
    </div>
  );
}

export default Variables;