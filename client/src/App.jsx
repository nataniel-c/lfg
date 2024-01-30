import './App.css';
import { Outlet } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
// import PlayerInfoCard from './components/PlayerInfoCard';
import ResponsiveAppBar from './components/Header';
import FriendList from './components/FriendList';
import Auth from './helpers/auth';
import exampleUser from './helpers/exampleUser';

// Proxy error shenanigans here
const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

const user = exampleUser;
const userName = exampleUser.username

console.log(Auth.loggedIn())
if (Auth.loggedIn()) { 
  const userName = Auth.getUser().data.username
  const user = Auth.getUser().data
}

console.log(user)

function App() {
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
