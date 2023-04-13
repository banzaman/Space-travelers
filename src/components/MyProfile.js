import { useSelector } from 'react-redux';

const MyProfilePage = () => {
  const { rocketItems } = useSelector((store) => store.rockets);
  const reserveRockets = rocketItems.filter((rocket) => rocket.reserved === true);

  return (
    <div className="profile-section">
      <section className="profile-missions">
        <h1>My Rockets</h1>
        <ul>
          {reserveRockets.length > 0 ? (
            reserveRockets.map((rocket) => (
              <li key={rocket.id} className="profile-missions-item">
                {rocket.name}
              </li>
            ))
          ) : (
            <li>No rockets reserved.</li>
          )}
        </ul>
      </section>
    </div>
  );
};

export default MyProfilePage;
