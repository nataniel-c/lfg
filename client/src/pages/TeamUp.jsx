import { Link } from 'react-router-dom';

import TeamOrPass from '../components/TeamOrPass/index';
import PlayerInfoCard from '../components/PlayerInfoCard';
import exampleUser from '../helpers/exampleUser';
import { QUERY_USERS, QUERY_ME } from '../utils/queries';
import { useQuery } from "@apollo/client"
import { useParams } from 'react-router-dom';
import exampleUser2 from '../helpers/exampleUser2';

const TeamUp = () => {
  // const { username: userParam } = useParams();
  // console.log(userParam)
  // const { loading, data: users } = useQuery(QUERY_USERS);
  const { loading, data: user } = useQuery(QUERY_ME);
  console.log(user)
  const { data: users } = useQuery(QUERY_USERS)
  const userData = users || [{}];
  const randomUser = userData?.[Math.floor(Math.random()*userData.length)] || exampleUser2[1];
  // const userData = data1?.users || [{}];
  // console.log(userData[Math.floor(Math.random()*userData.length)])

  // const randomUser = userData?.[Math.floor(Math.random()*userData.length)] || exampleUser2;
  
  

  return (
    <div>
      <div>
        <PlayerInfoCard user={exampleUser2[1]} mine={false} />
      </div>
      <div className="bg-white card-rounded text-center w-100">
        <TeamOrPass me={exampleUser} them={exampleUser2[1]}/>
      </div>
    </div>
  );
};

export default TeamUp;
