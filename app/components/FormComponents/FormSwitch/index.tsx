import React from 'react';
import { Switch, View } from 'react-native';

import { useFormikContext } from 'formik';

import { theme } from '../../../config';

function FormSwitch({ name }) {
  const { setFieldValue, values } = useFormikContext();
  return (
    <View style={{ marginRight: 8 }}>
      <Switch
        value={values[name]}
        onValueChange={(newValue) => setFieldValue(name, newValue)}
        trackColor={{ false: theme.grey5, true: theme.grey5 }}
        thumbColor={values[name] ? theme.primary : theme.white}
        ios_backgroundColor={theme.grey5}
      />
    </View>
  );
}

export default FormSwitch;
