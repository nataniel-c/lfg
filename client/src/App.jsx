import './App.css';
import { Outlet } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
// import PlayerInfoCard from './components/PlayerInfoCard';
import ResponsiveAppBar from './components/Header';
import FriendList from './components/FriendList';
import Auth from './helpers/auth';
import exampleUser from './helpers/exampleUser';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from './utils/queries';

// Proxy error shenanigans here
const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

let user = exampleUser;
let userName = exampleUser.username;

console.log(Auth.loggedIn());
if (Auth.loggedIn()) { 
  userName = Auth.getUser().data.username;
  user = Auth.getUser().data;
}

// let myId = [];
// let userName = [];
// if (Auth.loggedIn()) { 
//   const myId = Auth.getUser().data?._id || [];
//   const userName = Auth.getUser().data?.username || exampleUser.username;
// }

function App() {

  // const { loading, data } = useQuery(QUERY_ME,{ variables: { userId: myId } });
  // const user = data?.me || exampleUser;
  
  console.log(user);
  return (
    <ApolloProvider client={client}>
      <div className="flex-column justify-flex-start min-100-vh">
        <ResponsiveAppBar user={user} />
      <div className="flex-row align-center justify-center">
        {Auth.loggedIn()? (<div className="flex-column"> 
          <FriendList user={user}/>
        </div>) : (<></>)}
        <div className="flex-column col-auto pt-5 align-center min-100-vh bg-primary">
          <Outlet user={user}/>
        </div>
      </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
