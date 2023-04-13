import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions } from '../redux/missions/missionsSlice';

export default function Missions() {
  const { mission, isLoading, error } = useSelector((state) => state.missions);
  console.log(mission);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

  if (isLoading) {
    return (
      <h1>Loading...</h1>
    );
  }
  if (error) {
    return (
      <div>Something went wrong! </div>
    );
  }

  return (
    <div>
      <ul>
        <li>
          Hello
        </li>
      </ul>
    </div>
  );
}
