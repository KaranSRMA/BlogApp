import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';

const GoogleRedirectHandler = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const {login} = useAuth();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:1337/api/auth/google/callback${location.search}`);
                const { jwt, user } = response.data;
                login(jwt);
                // Store the JWT and user information as needed
                localStorage.setItem('jwt', jwt);
                // Redirect to the desired page after successful authentication
                navigate('/');
            } catch (error) {
                console.error('Error during Google authentication', error);
                // Handle errors appropriately
            }
        };

        fetchData();
    }, [location, navigate]);

    return <div>Loading...</div>;
};

export default GoogleRedirectHandler;
