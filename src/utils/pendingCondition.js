export default function pendingCondition(vinCode, {getState}) {
  const state = getState();
  if (state.vehicles.loading === 'pending') return false;
}