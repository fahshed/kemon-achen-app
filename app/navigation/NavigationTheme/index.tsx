import { DefaultTheme } from '@react-navigation/native';
import { theme } from '../../config';

export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: theme.primary,
    background: theme.white,
  },
};
