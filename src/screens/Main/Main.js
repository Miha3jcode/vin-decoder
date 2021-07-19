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
  selectVin,
} from 'redux/slices/vehilce';

const VinSchema = Yup.object().shape({
  vin: validators.vin,
});

const initialValues = {
  vin: '',
};

function Main() {

  const decodeVinCallback = useReduxCallback(decodeVin);
  const vin = useSelector(selectVin);

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
                onClick={handleSubmit}
              >
                decode
              </Button>
            </div>
          )
        }}
      </Formik>
      <p className={'main__title'}>Vin properties:</p>
      <List items={vin}>
        {
          vin
            ? vin.map(p => (
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