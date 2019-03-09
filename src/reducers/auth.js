import { firebase, googleAuthProvider } from '../config/fbConfig';

export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};
