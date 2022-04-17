import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SocialLogin = () => {
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorMsg;
    if (error) {
        errorMsg =
            <div>
                <p className='text-danger'>Error: {error.message}</p>
            </div>

    }
    if (loading) {
        return <p>Loading...</p>;
    }
    if (user) {

        navigate(from, { replace: true });

    }
    return (
        <div>
            <br/>
            <hr/>
            <p>{errorMsg}</p>
            <p>OR</p>
            <button onClick={()=>signInWithGoogle()} type="button" class="btn btn-primary btn-lg btn-block">Sign In With Gmail</button>
        </div>
    );
};

export default SocialLogin;