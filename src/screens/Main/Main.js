import './Main.scss';

import React from 'react';
import * as Yup from 'yup';

import validators from 'validators';

import {
  useCallback,
} from "react";

import {
  useSelector
} from "react-redux";

import {
  Formik,
  Field,
} from 'formik';

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

const initialValues = {
  vin: '5UXWX7C5',
};

function Main() {

  const decodeVinCallback = useReduxCallback(decodeVin);

  const currentVinCode = useSelector(selectCurrentVinCode);
  const isVinLoading = useSelector(selectIsVinLoading);
  const currentVin = useSelector(selectCurrentVin);
  const vinCodes = useSelector(selectVinCodes);

  const onSubmitHandler = useCallback(
    (fields) => decodeVinCallback(fields.vin),
    [decodeVinCallback],
  );

  return (
    <div className={'main'}>
      <Formik
        initialValues={initialValues}
        validationSchema={VinSchema}
        validateOnBlur={true}
        validateOnChange={true}
        onSubmit={onSubmitHandler}
      >
        {({handleSubmit}) => {
          return (
            <div className={'main__form'}>
              <Field label={'Vin:'} name={'vin'} component={Input}/>
              <Button
                className={'main__decode-button'}
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
      <p className={'main__title'}>History</p>
      <List>
        {
          vinCodes
            ? vinCodes.map((code, key) => (
              <List.Item key={key}>
                <p className={'main__list-text'}>{code}</p>
              </List.Item>
            ))
            : null
        }
      </List>
      <p className={'main__title'}>Message:</p>
      {
        currentVin
          ? <p className={'main__list-text'}>{currentVin.message}</p>
          : null
      }
      <p className={'main__title'}>
        {'Vin properties'}
        {currentVinCode && ` (${currentVinCode})`}
        {':'}
      </p>
      <List>
        {
          currentVin
            ? currentVin.properties.map(p => (
              <List.Item key={p.id}>
                <p className={'main__list-text'}>
                  <span className={'main__list-label'}>{p.label}:</span>
                  {' '}
                  {p.value}
                </p>
              </List.Item>
            ))
            : null
        }
      </List>
    </div>
  );
}

export default Main;