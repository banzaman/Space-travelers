const urlMissions = 'https://api.spacexdata.com/v3/missions';

const fetchMission = async () => {
  const res = await fetch(urlMissions);
  const missions = await res.json();
  return missions;
};

export default fetchMission;
