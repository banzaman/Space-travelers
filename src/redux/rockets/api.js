const apiRockets = 'https://api.spacexdata.com/v3/rockets';

const fetchRockets = async () => {
  const get = await fetch(apiRockets);
  const rockets = await get.json();
  return rockets;
};

export default fetchRockets;
