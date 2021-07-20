export default function mapVariableValue(value) {
  return {
    id: value.Id,
    name: value.Name,
    variableName: value.ElementName,
  };
}