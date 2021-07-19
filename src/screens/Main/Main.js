import './Main.scss';

import React from 'react';
import * as Yup from 'yup';

import validators from 'validators';

import {
  Formik,
  Field,
} from 'formik';

import {
  Input,
  Button,
} from 'components';

const VinSchema = Yup.object().shape({
  vin: validators.vin,
});

const initialValues = {
  vin: '',
};

function Main() {
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={VinSchema}
        validateOnBlur={true}
        validateOnChange={true}
        onSubmit={() => {}}
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
    </div>
  );
}

export default Main;