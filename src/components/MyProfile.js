import { useEffect, useState } from 'react';
import {
  Card, Col, Container, ListGroup, Row,
} from 'react-bootstrap';
import { useSelector } from 'react-redux';

export default function MyProfile() {
  const { missions } = useSelector((state) => state.missions);
  const [reservedMissions, setReservedMission] = useState([]);
  const { rocketItems } = useSelector((state) => state.rockets);
  const [reservedRockets, setReservedRocket] = useState([]);

  useEffect(() => {
    const temp = missions.filter((mission) => mission.reserved);
    setReservedMission(temp);
  }, [missions]);

  useEffect(() => {
    const temp = rocketItems.filter((rocket) => rocket.reserved);
    setReservedRocket(temp);
  }, [rocketItems]);

  return (
    <Container>
      <Row>
        <Col>
          <h2>My Missions</h2>
          <Card>
            <ListGroup variant="flush">
              {reservedMissions.map((mission) => (
                <ListGroup.Item key={mission.mission_id}>
                  {mission.mission_name}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        </Col>
        <Col>
          <h2>My Rockets</h2>
          <Card>
            <ListGroup variant="flush">
              {reservedRockets.map((rocket) => (
                <ListGroup.Item key={rocket.id}>
                  {rocket.name}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
