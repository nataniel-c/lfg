import { Link } from 'react-router-dom';
import Auth from '../helpers/auth';
import Logout from '../components/Logout';
import { useQuery } from '@apollo/client';
import { QUERY_USERS } from '../utils/queries.js';

const Home = () => {
  const { loading, data: users } = useQuery(QUERY_USERS);
  const userData = users ? users : [];
  console.log(userData)
  return (
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
        <h1>Welcome to Looking for Gamers!</h1>
      </div>
      <div className="card-footer text-center m-3">
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="m-2 btn btn-lg btn-primary" to="/me">
                View My Profile
              </Link>
              <Logout />
            </>
          ) : (
            <>
            <div className="card-body m-5 text-center">
              <h2>Sign up or Login to start teaming up!:</h2>
              
            </div>
              <Link className="btn btn-lg btn-primary m-3" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
