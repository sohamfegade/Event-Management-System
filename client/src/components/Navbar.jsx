import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <nav style={{ background: '#333', color: '#fff', padding: '1rem' }}>
      <h1>College Events</h1>
      {user ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <Link to="/login" style={{ color: '#fff' }}>Login</Link>
      )}
    </nav>
  );
}
export default Navbar;