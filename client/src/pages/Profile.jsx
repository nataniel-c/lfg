import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import PlayerInfoCard from '../components/PlayerInfoCard';
// import user from [NEED SEED FILE];
import FriendList from '../components/FriendList';

const Profile = () => {
    return (
        <div>
            <PlayerInfoCard user={user}></PlayerInfoCard>
            <GamesList></GamesList>
        </div>
    )
}

export default Profile;