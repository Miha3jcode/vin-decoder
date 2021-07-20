export default function mapVariables(variable) {
  return {
    id: variable.ID,
    description: variable.Description,
    dataType: variable.DataType,
    groupName: variable.GroupName,
    name: variable.Name,
  };
}