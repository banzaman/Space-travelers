import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showMissions } from '../redux/missions/Missions';

function Missions() {
  const state = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showMissions());
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
      </thead>
      {state.map((mission) => (
        <tbody key={mission.mission_id}>
          <tr>
            <td>{mission.mission_name}</td>
            <td>{mission.description}</td>
            <td><button type="button">not a member</button></td>
            <td><button type="button">join mission</button></td>
          </tr>
        </tbody>
      ))}

    </table>
  );
}

export default Missions;
