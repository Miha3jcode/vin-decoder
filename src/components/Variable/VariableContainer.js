import React from 'react';
import parse from "html-react-parser";

import Variable from "./Variable";

import {
  useMemo,
} from 'react';

function VariableContainer({description, ...props}) {

  const htmlDescription = useMemo(
    () => parse(description),
    [description],
  );

  return <Variable
    {...props}
    description={htmlDescription}
  />;
}

export default VariableContainer;