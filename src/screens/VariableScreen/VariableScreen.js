import 'assets/scss/fonts.scss';
import './VariableScreen.scss';

import React from 'react';

import {
  useEffect,
  useMemo,
} from 'react';

import {
  useSelector
} from "react-redux";

import {
  useLocation,
} from 'react-router-dom';

import {
  getVariableValues,
  selectVariableValues,
  selectVariableValuesLoading,
  selectCurrentVariable,
} from 'redux/slices/vehicles';

import {
  useReduxCallback,
} from "hooks";

import {
  List,
} from 'components';

function VariableScreen() {

  const location = useLocation();

  const variableId = useMemo(
    () => getVariableId(location.pathname),
    [location.pathname],
  );

  const getVariableValuesCallback = useReduxCallback(getVariableValues);

  const values = useSelector(selectVariableValues);
  const currentVariable = useSelector(selectCurrentVariable);
  const loading = useSelector(selectVariableValuesLoading);

  useEffect(
    () => {
      getVariableValuesCallback(variableId)
    },
    [variableId, getVariableValuesCallback],
  );

  return (
    <main className={'variable-screen'}>
      <p className={'title variable-screen__title'}>
        {'Variable:'}
        {' '}
        {currentVariable}
      </p>
      <List>
        {
          loading === 'fulfilled'
            ? (
              values.map(value => (
                <List.Item key={value.id}>
                  <p className={'text'}>
                    {'Id:'}
                    {' '}
                    <span className={'subtext'}>{value.id}</span>
                    {', '}
                    {'Name:'}
                    {' '}
                    <span className={'subtext'}>{value.name}</span>
                  </p>
                </List.Item>
              ))
            )
            : null
        }
      </List>
    </main>
  );
}

function getVariableId(pathname) {
  return pathname
    .split("/")
    .reverse()
    .slice(0, 2)
    .find(id => id);
}

export default VariableScreen;