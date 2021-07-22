import React from 'react';

import { useFormikContext } from 'formik';

import { AppButton } from '../..';

function SubmitButton({ title, color = 'primary', small = false }) {
  const { handleSubmit } = useFormikContext();

  return (
    <AppButton
      title={title}
      color={color}
      small={small}
      onPress={handleSubmit}
    />
  );
}

export default SubmitButton;
