import {Navigate} from 'react-router-dom';
import {useAuth} from '../context/AuthContext';

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({children}) => {
  const {isAuthenticated, loading} = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login"/>;
  }

  return children;
};

export default ProtectedRoute;
