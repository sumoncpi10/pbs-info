import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const RequireAuth = ({ children }) => {
    // const [user, loading] = useAuthState(auth);
    const [token, setToken] = useState('');
    const [isLoading, setIsLoading] = useState(true); // Add a loading state

     const [user, setUser] = useState(null);
//   const navigate = useNavigate();

  useEffect(() => {
    // Check if a token exists in localStorage or sessionStorage
    const storedToken = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');

    if (storedToken) {
      setToken(storedToken);
      setUser(storedUser);
    }
    setIsLoading(false);
  }, []);
    const location = useLocation();

    if (isLoading) {
        return <Loading></Loading>
    }

    if (!token|| !user) {
        return <Navigate to="/userLogin" state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default RequireAuth;