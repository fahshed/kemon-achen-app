import React from 'react';
import { Platform, Switch, View } from 'react-native';

import { useFormikContext } from 'formik';

import { theme } from '../../../config';

function FormSwitch({ name }) {
  const { setFieldValue, values } = useFormikContext();
  return (
    <View style={{ marginRight: 8 }}>
      <Switch
        value={values[name]}
        onValueChange={(newValue) => setFieldValue(name, newValue)}
        trackColor={{
          false: theme.grey3,
          true: Platform.OS === 'ios' ? theme.primary : theme.grey3,
        }}
        thumbColor={
          values[name]
            ? Platform.OS === 'android'
              ? theme.primary
              : theme.white
            : theme.white
        }
        ios_backgroundColor={theme.grey3}
      />
    </View>
  );
}

export default FormSwitch;
