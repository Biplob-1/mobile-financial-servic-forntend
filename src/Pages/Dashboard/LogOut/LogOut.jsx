import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';

const LogOut = () => {
  const { logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate('/login'); 
  };

  return (
    <button onClick={handleLogout} className="btn btn-secondary">
      Log Out
    </button>
  );
};

export default LogOut;
