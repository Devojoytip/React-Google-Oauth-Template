import { GoogleLogin } from '@react-oauth/google';

const Login = () => {
    const onLoginSuccess = async (res) => {
        console.log(res)
    };

    const onLoginFailure = (res) => {
        console.log('Failed - ', res)
    };

    return (
        <>
            <h4>Login Here</h4>
            <GoogleLogin
                onSuccess={onLoginSuccess}
                onError={onLoginFailure}
            />
        </>
    )
}

export default Login