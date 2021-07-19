import {
  useCallback,
} from 'react';

import {
  useDispatch
} from "react-redux";

function useReduxCallback(actionCreator) {

  const dispatch = useDispatch();

  const reduxCallback = useCallback(
    (...args) => dispatch(actionCreator(...args)),
    [actionCreator, dispatch],
  );

  return reduxCallback;
}

export default useReduxCallback;