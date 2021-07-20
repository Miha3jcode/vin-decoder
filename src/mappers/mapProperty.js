import {nanoid} from 'nanoid';

export default function mapProperty(property) {
  return {
    id: nanoid(),
    variableId: property.VariableId,
    valueId: property.ValueId,
    label: property.Variable,
    value: property.Value
  };
}