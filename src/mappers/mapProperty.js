import {nanoid} from 'nanoid';

export default function mapProperty(variable) {
  return {
    id: nanoid(),
    label: variable.Variable,
    value: variable.Value
  };
}