import { Link } from 'react-router-dom';

import TeamOrPass from '../components/TeamOrPass/index';
import PlayerInfoCard from '../components/PlayerInfoCard';
import exampleUser from '../helpers/exampleUser';
import { QUERY_USERS } from '../utils/queries';
import { useQuery } from "@apollo/client"

const TeamUp = () => {

  const { loading, data } = useQuery(QUERY_USERS);
  console.log(data)
  

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
