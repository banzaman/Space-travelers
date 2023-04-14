import { Badge, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { MemberShip } from '../redux/missions/missionsSlice';
import '../assets/css/Mission.css';

export default function MissionItems({
  id, name, description, reserved,
}) {
  const dispatch = useDispatch();
  if (!reserved) {
    return (
      <li key={id} className="mission-list">
        <h5 className="mission-name">{name}</h5>
        <p className="description">{description}</p>
        <span className="status"><Badge bg="secondary">NOT A MEMBER</Badge></span>
        <div className="join">
          <Button
            variant="outline-secondary"
            onClick={() => dispatch(MemberShip(id))}
          >
            Join Mission
          </Button>
        </div>
      </li>
    );
  }
  return (
    <li key={id} className="mission-list">
      <h5 className="mission-name">{name}</h5>
      <p className="description">{description}</p>
      <span className="status"><Badge bg="primary">Active Member</Badge></span>
      <div className="join">
        <Button
          variant="outline-danger"
          onClick={() => dispatch(MemberShip(id))}
        >
          Leave Mission
        </Button>
      </div>
    </li>
  );
}

MissionItems.propTypes = { id: PropTypes.string.isRequired };
MissionItems.propTypes = { name: PropTypes.string.isRequired };
MissionItems.propTypes = { description: PropTypes.string.isRequired };
MissionItems.propTypes = { reserved: PropTypes.bool.isRequired };
