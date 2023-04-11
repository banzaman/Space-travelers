import React from 'react';
import PropTypes from 'prop-types';

const RocketElement = (props) => {
  const {
    id, name, description, flickrImages,
  } = props;

  return (
    <div className="rocketEl">
      <div className="rocketImg">
        <img src={flickrImages} alt={description} />
      </div>
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
        <button type="button" id={id}>Reserve Rocket</button>
      </div>
    </div>
  );
};

RocketElement.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  flickrImages: PropTypes.string.isRequired,
};

export default RocketElement;
