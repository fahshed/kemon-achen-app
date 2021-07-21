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
import { SavedPosts, UserProfileScreen } from '../../screens';

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
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Feed" component={AppNavigator} />
      <Drawer.Screen name="Profile" component={UserProfileScreen} />
      {/* <Drawer.Screen name="Saved Posts" component={SavedPosts} /> */}
    </Drawer.Navigator>
  );
}
