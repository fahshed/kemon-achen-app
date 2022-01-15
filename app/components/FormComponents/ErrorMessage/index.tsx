import React from 'react';

import { CaptionBold } from '../../../styles';

function ErrorMessage({ error, visible }) {
  if (!visible || !error) {
    return null;
  }
  return (
    <CaptionBold color="danger" mt="8px" ml="8px">
      {error}
    </CaptionBold>
  );
}

export default ErrorMessage;
