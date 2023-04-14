import { Badge, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { MemberShip } from '../redux/missions/missionsSlice';
import '../assets/css/Mission.css';

export default function MissionItems({
  id, name, description, reserved,
}) {
  const dispatch = useDispatch();

  return (
    <li key={id} className="mission-list">
      <h5 className="mission-name">{name}</h5>
      <p className="description">{description}</p>
      <span className="status">
        <Badge bg={reserved ? 'primary' : 'secondary'}>
          {reserved ? 'Active Member' : 'NOT A MEMBER'}
        </Badge>
      </span>
      <div className="join">
        <Button
          variant={reserved ? 'outline-danger' : 'outline-secondary'}
          onClick={() => dispatch(MemberShip(id))}
        >
          {reserved ? 'Leave Mission' : 'Join Mission'}
        </Button>
      </div>
    </li>
  );
}

MissionItems.propTypes = { id: PropTypes.string.isRequired };
MissionItems.propTypes = { name: PropTypes.string.isRequired };
MissionItems.propTypes = { description: PropTypes.string.isRequired };
MissionItems.propTypes = { reserved: PropTypes.bool.isRequired };
