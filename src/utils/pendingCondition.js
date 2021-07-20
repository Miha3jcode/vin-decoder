export default function (vinCode, {getState}) {
  const state = getState();
  if (state.vehicles.loading === 'pending') return false;
}