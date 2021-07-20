export default function mapVariables(property) {
  return {
    id: property.ID,
    description: property.Description,
    dataType: property.DataType,
    groupName: property.GroupName,
    name: property.Name,
  };
}