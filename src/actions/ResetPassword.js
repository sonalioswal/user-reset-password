const  apiUrl = process.env.REACT_APP_BASE_URL;

export const RESET_PASSWORD = "RESET_PASSWORD";

const userList = JSON.parse(localStorage.getItem('users'));

export const resetPassword = (userInfo) => dispatch => {
    // used this fake API with mock response
    return fetch(`${apiUrl}/users/`)
    .then(() => {
        if(userList.some((u) => u.userName === userInfo.userName)) {
            let updatedUserList = userList.map(user => {
                return user.userName === userInfo.userName ? {...user, password: userInfo.password} : {...user}
            });
            localStorage.setItem('users', JSON.stringify(updatedUserList));
            dispatch({ type: RESET_PASSWORD, payload: updatedUserList });
            return updatedUserList;
        } else {
            return;
        }
    })
}

