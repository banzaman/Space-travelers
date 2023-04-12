import { Link } from 'react-router-dom';
import './css/Header.css';
import planet from '../assets/planet.png';

export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/">
          <img src={planet} alt="Space Logo" />
          <span> Space Travelers&apos; Hub</span>
        </Link>
        <ul>
          <li><Link to="/">Rockets</Link></li>
          <li><Link to="/missions">Missions</Link></li>
          <li><Link to="/profile">My Profile</Link></li>
        </ul>
      </nav>
    </header>
  );
}
