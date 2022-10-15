import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../AuthContext/AuthContext';

export default function NavBar() {
  const { user, setUser } = useContext(AuthContext);
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>
        {!user ? (
          <li>
            <NavLink to="auth">Auth</NavLink>
          </li>
        ) : (
          <li>
            <NavLink to="gallery">Gallery</NavLink>
          </li>
        )}
      </ul>
      {user && (
        <button type="button" onClick={() => setUser(null)}>
          log out
        </button>
      )}
    </nav>
  );
}
