import { useEffect } from 'react';
import { Badge, Button, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { MemberShip, getMissions } from '../redux/missions/missionsSlice';
import '../assets/css/Mission.css';

export default function Missions() {
  const { missions, isLoading, error } = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

  if (isLoading) {
    return (
      <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>
    );
  }
  if (error) {
    return (
      <Badge bg="danger">Something went wrong</Badge>
    );
  }

  return (
    <>
      <hr />
      <section className="mission-container">
        <div>
          <h5 className="mission-name">Mission</h5>
          <h5 className="description">Description</h5>
          <h5 className="status">Status</h5>
          <h5 className="join">{}</h5>
        </div>
        <ul>
          {missions.map((mission) => (
            <li key={mission.mission_id} className="mission-list">
              <h5 className="mission-name">{mission.mission_name}</h5>
              <p className="description">{mission.description}</p>
              <span className="status"><Badge bg={mission.reserved ? 'primary' : 'secondary'}>{mission.reserved ? 'Active Member' : 'NOT A MEMBER' }</Badge></span>
              <div className="join">
                <Button
                  variant={mission.reserved ? 'outline-danger' : 'outline-secondary'}
                  onClick={() => dispatch(MemberShip({ missions, id: mission.mission_id }))}
                >
                  {mission.reserved ? 'Leave Mission' : 'Join Mission' }
                </Button>

              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
