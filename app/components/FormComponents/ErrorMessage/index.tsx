import React from 'react';

import { CaptionBold } from '../../../styles';

function ErrorMessage({ error, visible }) {
  if (!visible || !error) {
    return null;
  }
  return (
    <CaptionBold color="danger" style={{ paddingLeft: 8 }}>
      {error}
    </CaptionBold>
  );
}

export default ErrorMessage;
