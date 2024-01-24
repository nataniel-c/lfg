// import './App.css';
// import { Outlet } from 'react-router-dom';
// import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
// import PlayerInfoCard from './components/PlayerInfoCard';
// import Header from './components/Header';
// import TeamOrPass from './components/TeamOrPass';

// import FriendList from './components/FriendList';

// const client = new ApolloClient({
//   uri: '/graphql',
//   cache: new InMemoryCache(),
// });

// function App() {
//   return (
//     <ApolloProvider client={client}>
//       <PlayerInfoCard user={user}/>
//       <div className="flex-column justify-flex-start min-100-vh">
//         <Header />
//         <TeamOrPass />
//         <FriendList />
//         <div className="flex-column justify-center align-center min-100-vh bg-primary">
//           <Outlet />
//         </div>
//       </div>
//     </ApolloProvider>
//   );
// }

// export default App;

import './App.css';
import { Outlet } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import PlayerInfoCard from './components/PlayerInfoCard';
import Header from './components/Header';
import TeamOrPass from './components/TeamOrPass';

import FriendList from './components/FriendList';
// import TemporaryDrawer from './components/FriendList';

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
        <Header />
        <TeamOrPass />
        <FriendList />
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
          <Outlet />
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
