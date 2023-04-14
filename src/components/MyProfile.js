import { useEffect, useState } from 'react';
import {
  Card, Col, Container, ListGroup, Row,
} from 'react-bootstrap';
import { useSelector } from 'react-redux';

export default function MyProfile() {
  const { missions } = useSelector((state) => state.missions);
  const [reserved, setReserved] = useState([]);

  useEffect(() => {
    const temp = missions.filter((mission) => mission.reserved);
    setReserved(temp);
  }, [missions]);

  return (
    <Container>
      <Row>
        <Col>
          <h2>My Missions</h2>
          <Card>
            <ListGroup variant="flush">
              {reserved.map((mission) => (
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
            <ListGroup />
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
