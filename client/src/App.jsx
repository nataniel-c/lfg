import './App.css';
import { Outlet } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import FriendList from './components/FriendList';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="flex-column justify-flex-start min-100-vh">
        <FriendList />
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
          <Outlet />
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
