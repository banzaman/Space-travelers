import { NavLink } from 'react-bootstrap';
import planet from '../assets/planet.png';

export default function Header() {
  return (
    <header>
      <nav>
        <div className="site-title">
          <NavLink to="/">
            <img src={planet} alt="Space Logo" />
          </NavLink>
        </div>
        <ul>
          <li><NavLink to="/rockets">Rockets</NavLink></li>
          <li><NavLink to="/missions">Missions</NavLink></li>
          <li><NavLink>My Profile</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}
