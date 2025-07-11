import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../pages/Loading';

const PrivateRoute = ({children}) => {
    const {user, loading}=use(AuthContext);

    const location=useLocation();
    console.log(location);

    if(loading){
        return <Loading></Loading>;
    }
    // if -> user thake return children
    if(user && user?.email){
        return children;
    }
    // if -> user na thake, login a navigate korbo
    return <Navigate state={location.pathname} to="/auth/login"></Navigate>;
};

export default PrivateRoute;