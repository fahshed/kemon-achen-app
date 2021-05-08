import * as SecureStore from 'expo-secure-store';

const key = 'user';

const storeUser = async (authUser) => {
  try {
    await SecureStore.setItemAsync(key, JSON.stringify(authUser));
  } catch (error) {
    console.log('Error storing the auth user', error);
  }
};

const getUser = async () => {
  try {
    const user = await SecureStore.getItemAsync(key);
    return JSON.parse(user);
  } catch (error) {
    console.log('Error getting the auth user', error);
  }
};

const removeUser = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log('Error removing the auth user', error);
  }
};

export default { getUser, removeUser, storeUser };
