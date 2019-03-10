import { firebase, googleAuthProvider } from '../config/fbConfig';

export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};

export const login = (uid) => ({
  type: 'LOGIN',
  uid
});

export const logout = () => ({
  type: 'LOGOUT'
})

const authReducer = (state = {}, action ) => {
  switch (action.type){
    case 'LOGIN':
      return {
        uid: action.uid
      };
    case 'LOGOUT':
    return {};
    default:
    return state;
  }
};

export default authReducer;
