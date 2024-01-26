import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query users {
      users {
        _id
        username
        email
        gamerTag
        console
        friends {
          _id
          username
          email
        }
        rivals {
          _id
          username
          email
        }
        profilePic
        timePreferences
        gamePreferences
        userbio
        country
      }
    }
  `;
  
  export const QUERY_USER = gql`
  query user($userId: ID!) {
    user(userId: $userId) {
      _id
      username
      email
      gamerTag
      console
      friends {
        _id
        username
        email
      }
      rivals {
        _id
        username
        email
      }
      profilePic
      timePreferences
      gamePreferences
      userbio
      country
    }
  }
`;

export const QUERY_ME = gqp`
query me {
  _id
  username
  email
  gamerTag
  console
  friends {
    _id
    username
    email
  }
  rivals {
    _id
    username
    email
  }
  profilePic
  timePreferences
  gamePreferences
  userbio
  country
}
`;
