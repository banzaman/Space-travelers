import { NavLink } from 'react-router-dom';
import '../nav.css';

function Nav() {
  return (
    <div>
      <nav>
        <div className="logo">
          <img src="planet.png" alt="" width="100%" />
        </div>
        <h1>Space Travelers&apos; Hub</h1>
        <ul className="ul">
          <NavLink
            className="link"
            to="/"
            style={({ isActive }) => ({
              textDecoration: isActive ? 'underline' : 'none',
              color: isActive ? '#194498' : 'inherit',
            })}
          >
            <li className="rocketslink">Rockets</li>
          </NavLink>
          <NavLink
            className="link"
            to="/missions"
            style={({ isActive }) => ({
              textDecoration: isActive ? 'underline' : 'none',
              color: isActive ? '#194498' : 'inherit',
            })}
          >
            <li className="missionslink">Missions</li>
          </NavLink>
          <NavLink
            className="link"
            to="/profile"
            style={({ isActive }) => ({
              textDecoration: isActive ? 'underline' : 'none',
              color: isActive ? '#194498' : 'inherit',
            })}
          >
            <li className="profilelink">My Profile</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
