import { Badge, Button, Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import '../assets/css/Mission.css';
import MissionItems from './MissionItems';

export default function Missions() {
  const { missions, isLoading, error } = useSelector((state) => state.missions);

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
      <section className="mission-container">
        <div>
          <h5 className="mission-name">Mission</h5>
          <h5 className="description">Description</h5>
          <h5 className="status">Status</h5>
          <h5 className="join">{}</h5>
        </div>
        <ul>
          {missions.map((mission) => (
            <MissionItems
              key={mission.mission_id}
              id={mission.mission_id}
              name={mission.name}
              description={mission.description}
              reserved={mission.reserved}
            />
          ))}
        </ul>
      </section>
    </>
  );
}
