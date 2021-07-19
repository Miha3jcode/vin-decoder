import {nanoid} from 'nanoid';

export default function mapVariable(variable) {
  return {
    id: nanoid(),
    label: variable.Variable,
    value: variable.Value
  };
}