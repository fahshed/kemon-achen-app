import * as React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import AppNavigator from '../AppNavigator';
import { useAppDispatch } from '../../store';
import { logout } from '../../store/reducers';
import { UserProfileScreen, ProfessionalProfileScreen } from '../../screens';
import { useAppSelector } from '../../store';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  const dispatch = useAppDispatch();

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Logout" onPress={() => dispatch(logout())} />
    </DrawerContentScrollView>
  );
}

export default function DrawerNavigator() {
  const { role } = useAppSelector((state) => state.User.user);
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Feed" component={AppNavigator} />
      {role === 'professional' ? (
        <Drawer.Screen name="Profile" component={ProfessionalProfileScreen} />
      ) : (
        <Drawer.Screen name="Profile" component={UserProfileScreen} />
      )}
    </Drawer.Navigator>
  );
}
