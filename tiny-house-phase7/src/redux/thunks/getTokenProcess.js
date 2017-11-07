import getToken from '../.././api/getToken';

export default function getTokenProcess(userInfo) {
  return (dispatch, getState) => {
    //inside userInfo we are passing in the email & password to verify if user exists & has appropriate credentials
    return getToken(userInfo).then(userInfo => {
      //if the password passed in matches the stored hashedPashword, we get back a userInfo object containing the user's id, name, email, and token
      localStorage.setItem('token', userInfo.token);
      dispatch({ type: 'GET_TOKEN', userInfo });
      return userInfo;
    });
  };
}
