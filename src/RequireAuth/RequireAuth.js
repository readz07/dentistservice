import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../firebase.init';

const RequireAuth = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();

    if (!user) {
        
        return <Navigate to="/signin" state={{ from: location }} replace />;
    }
    if (loading) {
        return <p>Loading...</p>;
      }

    return children;
};

export default RequireAuth;