import { useContext } from 'react';
import jwtDecode from 'jwt-decode';
import { AuthContext, AuthStorage } from '../../authentication';

function useAuth() {
  const { user, setUser } = useContext(AuthContext);

  const logIn = (authToken) => {
    //const token = response.jwt.split(' ')[1];
    const user1 = jwtDecode(authToken);
    // const user = {
    //   id: response._id,
    //   name: response.name,
    //   role: response.role,
    //   image: response.image,
    // };
    //constuserInfo = { ...user, name: response.name, role: response.role, };
    //console.log(user); //jwt grabbed successful
    setUser(user1);
    AuthStorage.storeToken(authToken); //beared can be added if needed.. then storeToken(response.jwt)
  };

  const logOut = () => {
    setUser(null);
    AuthStorage.removeToken();
  };

  return { user, logIn, logOut };
}

export default useAuth;
