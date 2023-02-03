import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rocketsSlice';
import Rocket from '../components/Rocket';

const Rockets = () => {
  const dispatch = useDispatch();
  const rocketData = useSelector((state) => state.rockets.rockets);

  useEffect(() => {
    if (rocketData.length === 0) {
      dispatch(fetchRockets());
    }
  }, [dispatch, rocketData]);

  return (
    <div className="rocket-container">
      {rocketData.map((rocket) => (
        <Rocket
          key={rocket.id}
          rocketName={rocket.rocketName}
          description={rocket.description}
          image={rocket.images[0]}
          id={rocket.id}
          reserved={rocket.reserved}
        />
      ))}
    </div>
  );
};

export default Rockets;
