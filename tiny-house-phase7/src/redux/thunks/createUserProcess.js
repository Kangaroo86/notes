import createUser from '../.././api/createUser';

export default function createUserProcess(newUser) {
  return (dispatch, getState) => {
    //inside userInfo we are passing in the email & password to verify if user exists & has appropriate credentials
    return createUser(newUser).then(newUser => {
      //if the password passed in matches the stored hashedPashword, we get back a userInfo object containing the user's id, name, email, and token
      dispatch({ type: 'CREATE_USER', newUser });
      return newUser;
    });
  };
}
