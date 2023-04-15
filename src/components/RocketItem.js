import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Badge, Button } from 'react-bootstrap';
import { reserveRocket } from '../redux/rockets/rocketsSlice';
import '../assets/css/rockets.css';

const RocketItem = ({
  id, name, Image, description, reserved,
}) => {
  const dispatch = useDispatch();
  if (!reserved) {
    return (
      <div className="rocketItemCont">
        <section className="rocketImgCont">
          <img src={Image[0]} alt="" />
        </section>
        <section id={id} className="rocket_details">
          <h2>{name }</h2>
          <p>
            {description}
          </p>
          <Button value="Reserve Rocket" onClick={() => (dispatch(reserveRocket(id)))}>Reserve Rocket</Button>
        </section>
      </div>
    );
  }
  return (
    <div className="rocketItemCont">
      <section className="rocketImgCont">
        <img src={Image[0]} alt="" />
      </section>
      <section id={id} className="rocket_details">
        <h2>{name }</h2>
        <p>
          <Badge bg="primary" className="me-3">Reserved</Badge>
          {description}
        </p>
        <Button value="Reserve Rocket" variant="outline-secondary" onClick={() => (dispatch(reserveRocket(id)))}>Cancel Reservation</Button>
      </section>
    </div>
  );
};

RocketItem.propTypes = { id: PropTypes.string.isRequired };
RocketItem.propTypes = { name: PropTypes.string.isRequired };
RocketItem.propTypes = { Image: PropTypes.string.isRequired };
RocketItem.propTypes = { description: PropTypes.string.isRequired };
RocketItem.propTypes = { reserved: PropTypes.bool.isRequired };

export default RocketItem;
