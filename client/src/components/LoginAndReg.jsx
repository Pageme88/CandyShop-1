import { useState } from 'react';
import { createUserService, loginUserService } from '../services/user.service';
import { useNavigate } from 'react-router-dom';

const LoginAndRegistrationForm = () => {
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [userData, setUserData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const updateUserData = (e) => {
        const { name, value } = e.target;
        setUserData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const createUser = async (e) => {
        e.preventDefault();
        try {
            await createUserService(userData);
            setUserData({
                username: '',
                email: '',
                password: '',
                confirmPassword: '',
            });
            navigate("/candyshop/dashboard");
        } catch (error) {
            if (error.response && error.response.data) {
                setErrors(error.response.data.errors);
            } else {
                console.error("Error:", error);
            }
        }
    };

    const [loginData, setLoginData] = useState({
        username: '',
        password: '',
    });

    const updateLoginData = (e) => {
        const { name, value } = e.target;
        setLoginData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const loginUser = async (e) => {
        e.preventDefault();
        try {
            await loginUserService({ username: loginData.username, password: loginData.password });
            navigate("/candyshop/dashboard");
        } catch (error) {
            if (error.response && error.response.data) {
                setLoginErrors(error.response.data.errors);
            } else {
                console.error("Error:", error);
            }
        }
    };

    return (
        <div className="authContainer">
            <div className="formContainer">
                <form onSubmit={createUser} className="registrationFormStyle">
                    <h2>Registration</h2>
                    {errors.username && <p className="errorStyle">{errors.username.message}</p>}
                    <label>
                        Username:
                        <input
                            type="text"
                            name="username"
                            value={userData.username}
                            onChange={updateUserData}
                        />
                    </label>
                    {errors.username && <p className="errorStyle">{errors.username.message}</p>}
                    <label>
                        Email:
                        <input
                            type="text"
                            name="email"
                            value={userData.email}
                            onChange={updateUserData}
                        />
                    </label>
                    {errors.password && <p className="errorStyle">{errors.password.message}</p>}
                    <label>
                        Password:
                        <input
                            type="password"
                            name="password"
                            value={userData.password}
                            onChange={updateUserData}
                        />
                    </label>
                    {errors.confirmPassword && <p className="errorStyle">{errors.confirmPassword.message}</p>}
                    <label>
                        Confirm Password:
                        <input
                            type="password"
                            name="confirmPassword"
                            value={userData.confirmPassword}
                            onChange={updateUserData}
                        />
                    </label>
                    <div>
                        <input
                            type="submit"
                            value="Complete"
                        />
                    </div>
                </form>
                <form onSubmit={loginUser} className="loginFormStyle">

                    {/* -- LOGIN FORM -- */}
                    <h2>Login</h2>
                    {errors.username && <p className="errorStyle">{errors.username.message}</p>}
                    <label>
                        Username:
                        <input
                            type="text"
                            name="username"
                            value={loginData.username}
                            onChange={updateLoginData}
                        />
                    </label>
                    {errors.password && <p className="errorStyle">{errors.password.message}</p>}
                    <label>
                        Password:
                        <input
                            type="password"
                            name="password"
                            value={loginData.password}
                            onChange={updateLoginData}
                        />
                    </label>
                    <div>
                        <input
                            type="submit"
                            value="Login"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginAndRegistrationForm;
