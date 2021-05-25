
export const validatePassword = (password, userName) => {
    
    const userList = JSON.parse(localStorage.getItem('users'));
    const oldPassword = userList.filter(u => u.userName === userName);

    if(password.length < 7 || password.length > 16 ) {
        return {error: true, message: 'Password should be between 7-16 characters'};
    }
    else if(!/\d/.test(password)) {
        return {error: true, message: 'Required at least one digit'}
    }  
    else if(!/[a-z]/.test(password)) {
        return {error: true, message: 'Required at least one lowercase letter'}
    }  
    else if(!/[A-Z]/.test(password)) {
        return {error: true, message: 'Required at least one uppercase letter'}
    }  
    else if(!/[ !"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]/.test(password)) {
        return {error: true, message: 'Required at least one special character'}

    } else if(userName === password) {
        return {error: true, message: 'User name and password should not be same'}
    } else if(oldPassword.length > 0 && password === oldPassword[0].password){
        return {error: true, message: 'New password should not be same as old one'}
    } else {
        return {error: false, message: ''}
    }
}
