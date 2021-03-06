import 'assets/scss/fonts.scss';
import './MainScreen.scss';

import React from 'react';
import * as Yup from 'yup';

import validators from 'validators';

import {
  useCallback,
} from "react";

import {
  useSelector,
} from "react-redux";

import {
  Formik,
  Field,
} from 'formik';

import {
  Link,
} from 'react-router-dom';

import {
  useReduxCallback,
} from 'hooks';

import {
  Input,
  Button,
  List,
} from 'components';

import {
  decodeVin,
  selectCurrentVinCode,
  selectIsVinLoading,
  selectCurrentVin,
  selectVinCodes,
} from 'redux/slices/vehicles';

const VinSchema = Yup.object().shape({
  vin: validators.vin,
});

const vinDefault = process.env.NODE_ENV === 'development'
  ? '5UXWX7C5'
  : '';

const initialValues = {
  vin: vinDefault,
};

function MainScreen() {

  const decodeVinCallback = useReduxCallback(decodeVin);

  const currentVinCode = useSelector(selectCurrentVinCode);
  const isVinLoading = useSelector(selectIsVinLoading);
  const currentVin = useSelector(selectCurrentVin);
  const vinCodes = useSelector(selectVinCodes);

  const onSubmitHandler = useCallback(
    (fields) => decodeVinCallback(fields.vin),
    [decodeVinCallback],
  );

  const onCodeClickHandler = useCallback(
    (event) => handleOnCodeClick(event, decodeVinCallback),
    [decodeVinCallback],
  );

  return (
    <main className={'main-screen'}>
      <Formik
        initialValues={initialValues}
        validationSchema={VinSchema}
        validateOnBlur={true}
        validateOnChange={true}
        onSubmit={onSubmitHandler}
      >
        {({handleSubmit}) => {
          return (
            <div className={'main-screen__form'}>
              <Field label={'Vin:'} name={'vin'} component={Input}/>
              <Button
                className={'main-screen__decode-button'}
                type={'submit'}
                disabled={isVinLoading}
                onClick={handleSubmit}
              >
                decode
              </Button>
            </div>
          )
        }}
      </Formik>
      <p className={'title main-screen__title'}>History</p>
      <List>
        {
          vinCodes
            ? vinCodes.map((code, key) =>(
              <List.Item key={key}>
                <a
                  href={'#'}
                  data-code={code}
                  onClick={onCodeClickHandler}
                >
                  {code}
                </a>
              </List.Item>
            ))
            : null
        }
      </List>
      <p className={'title main-screen__title'}>Message:</p>
      {
        currentVin
          ? <p className={'subtext'}>{currentVin.message}</p>
          : null
      }
      <p className={'title main-screen__title'}>
        {'Vin properties'}
        {currentVinCode && ` (${currentVinCode})`}
        {':'}
      </p>
      <List>
        {
          currentVin
            ? currentVin.properties.map(property => {

              const label = property.valueId
                ? <Link to={`/variables/${property.variableId}`}>{property.label}</Link>
                : property.label;

              return (
                <List.Item key={property.id}>
                  <p className={'subtext'}>
                    <span className={'text'}>{label}:</span>
                    {' '}
                    {property.value}
                  </p>
                </List.Item>
              );
            })
            : null
        }
      </List>
    </main>
  );
}

function handleOnCodeClick(event, decodeVinCallback) {
  event.preventDefault();
  decodeVinCallback(event.target.dataset.code);
}

export default MainScreen;