import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import PlayerInfoCard from '../components/PlayerInfoCard';
import user from [...];
import FriendList from '../components/FriendList';

const Profile = () => {
    return (
        <div>
            <PlayerInfoCard user={user}></PlayerInfoCard>
            <FriendList></FriendList>
            <GamesList></GamesList>
        </div>
    )
}