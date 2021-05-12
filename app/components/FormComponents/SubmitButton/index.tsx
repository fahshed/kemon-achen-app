import React from 'react';

import { useFormikContext } from 'formik';

import { AppButton } from '../..';

function SubmitButton({ title, style = null }) {
  const { handleSubmit } = useFormikContext();

  return <AppButton title={title} style={style} onPress={handleSubmit} />;
}

export default SubmitButton;
