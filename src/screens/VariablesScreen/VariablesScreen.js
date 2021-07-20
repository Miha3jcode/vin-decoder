import 'assets/scss/fonts.scss';
import './VariablesScreen.scss';

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

function VariablesScreen() {

  const getVariablesCallback = useReduxCallback(getVariables);

  const variables = useSelector(selectVariables);

  useEffect(
    () => getVariablesCallback(),
    [getVariablesCallback],
  );

  return (
    <div className={'variables-screen'}>
      <p className={'title variables-screen__title'}>Variables:</p>
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

export default VariablesScreen;