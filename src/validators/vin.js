import * as Yup from 'yup';

export default Yup
  .string()
  .required('The field is required')
  .matches(/^[A-Z0-9]*$/, 'Should consists only from uppercase letters and numbers')
  .max(17, 'Max length is 17 chars');