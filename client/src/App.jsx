import './App.css';
import { Outlet } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
// import PlayerInfoCard from './components/PlayerInfoCard';
import ResponsiveAppBar from './components/Header';
import FriendList from './components/FriendList';


// Proxy error shenanigans here
const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      {/* <PlayerInfoCard user={user}/> */}
      <div className="flex-column justify-flex-start min-100-vh">
        <ResponsiveAppBar />
      <div className="flex-row align-center justify-center">
        <div className="flex-column"> 
          <FriendList />
        </div>
        <div className="flex-column col-auto pt-5 align-center min-100-vh bg-primary">
          <Outlet />
        </div>
      </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
