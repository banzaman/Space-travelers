import { Link } from 'react-router-dom';
import '../assets/css/Header.css';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import planet from '../assets/planet.png';
import { getMissions } from '../redux/missions/missionsSlice';

export default function Header() {
  const [active, setActive] = useState('rockets');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);
  return (
    <header>
      <nav>
        <Link to="/">
          <img src={planet} alt="Space Logo" />
          <h1> Space Travelers&apos; Hub</h1>
        </Link>
        <ul>
          <li>
            <Link
              to="/"
              onClick={() => setActive('rockets')}
              className={active === 'rockets' ? 'active' : ''}
            >
              Rockets
            </Link>
          </li>
          <li className="separator">
            <Link
              to="/missions"
              onClick={() => setActive('missions')}
              className={active === 'missions' ? 'active' : ''}
            >
              Missions
            </Link>
          </li>
          <li>
            <Link
              to="/profile"
              onClick={() => setActive('my-profile')}
              className={active === 'my-profile' ? 'active' : ''}
            >
              My Profile
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
