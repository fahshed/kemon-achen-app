import { useContext } from 'react';

import { AuthContext, AuthStorage } from '../../authentication';

function useAuth() {
  const { user, setUser } = useContext(AuthContext);

  const logIn = (userInfo) => {
    setUser(userInfo);
    AuthStorage.storeUser(userInfo);
  };

  const logOut = () => {
    setUser(null);
    AuthStorage.removeUser();
  };

  return { user, logIn, logOut };
}

export default useAuth;
