import React, {useState, useLayoutEffect} from 'react';
import toastr from 'toastr'
// styles
import { Button } from 'components/button/Button';
import { Container } from 'styles/Layout';
import { Input } from 'components/input/Input';
import { Form, FormItem, FormLabel, FormError } from 'components/form/Form';
import { validatePassword } from 'utils/validation';
import { useDispatch } from 'react-redux';
import { resetPassword } from 'actions/ResetPassword';
//constant user data
import { UserList } from 'constant/UserList.cnst';


const ResetPassword = () => {
    const dispatch = useDispatch();

    const [userName, setUserName] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    useLayoutEffect(() => {
        localStorage.setItem('users', JSON.stringify(UserList));
    }, [])

    const handleSubmit = async(e) => {
        e.preventDefault();
        const errorStatus = validatePassword(newPassword, userName)
        if(errorStatus.error) {
            setPasswordError(errorStatus.message)
        } else {
            setPasswordError('');
            const updatedPassword = {userName, password: newPassword}
            const response = await dispatch(resetPassword(updatedPassword));
            if(response) {
                toastr.success('Password updated successfully');
                setUserName('');
                setNewPassword('');
            } else {
                toastr.error('Username doesnt exit');
            }
            
        };
    }

    return (
        <Container> 
            <h2>Reset Password</h2>
            <Form
                name='resetPassword'
            >
                <FormItem>
                    <FormLabel>Email</FormLabel>
                    <Input 
                        name='user-name' 
                        placeholder="Type email" 
                        value={userName} 
                        onChange={(e) => setUserName(e.target.value)}
                        data-testid="user-name"
                    />
                </FormItem>
                <FormItem>
                    <FormLabel>New Password</FormLabel>
                    <Input 
                        name='new-password' 
                        placeholder="Password" 
                        value={newPassword} 
                        onChange={(e) => setNewPassword(e.target.value)}
                        data-testid="password"
                    />
                    <FormError>{passwordError}</FormError>
                </FormItem>
                {userName.current}
                <Button 
                    onClick={handleSubmit} 
                    disabled={!userName || !newPassword}
                    data-testid="reset-btn"
                >
                    Reset  
                </Button>
            </Form> 
        </Container>
    )
}

export default ResetPassword;