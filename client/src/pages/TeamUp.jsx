import { Link } from 'react-router-dom';

import TeamOrPass from '../components/TeamOrPass/index';
import PlayerInfoCard from '../components/PlayerInfoCard';
import exampleUser from '../helpers/exampleUser';

const TeamUp = () => {


  return (
    <div>
      <div>
        <PlayerInfoCard user={exampleUser} />
      </div>
      <div className="bg-white card-rounded text-center w-100">
        <TeamOrPass />
      </div>
    </div>
  );
};

export default TeamUp;
