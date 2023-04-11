import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRockets } from '../redux/rockets/Rockets';
import RocketElement from './RocketElement';
import './rockets.css';

const Rockets = () => {
  const dispatch = useDispatch();
  const rocketsList = useSelector((store) => store.rockets);
  useEffect(() => {
    dispatch(getRockets());
  }, []);

  return (
    <section>
      <ul className="rocketsList">
        {rocketsList.map((rocket) => (
          <RocketElement
            key={rocket.rocket_id}
            id={rocket.rocket_id}
            name={rocket.rocket_name}
            description={rocket.description}
            flickrImages={rocket.flickr_images[0]}
          />
        ))}
      </ul>
    </section>
  );
};

export default Rockets;
