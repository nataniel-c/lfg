import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser(
    $username: String
    $email: String
    $password: String
    $gamertag: String
    $console: String
    $profilePic: String
    $timePreferences: String
    $gamePreferences: String
    $bio: String
    $country: String
  ) {
    updateUser(
      username: $username
      email: $email
      password: $password
      gamertag: $gamertag
      console: $console
      profilePic: $profilePic
      timePreferences: $timePreferences
      gamePreferences: $gamePreferences
      bio: $bio
      country: $country
    ) {
      _id
      username
      email
      gamertag
      console
      profilePic
      timePreferences
      gamePreferences
      bio
      country
    }
  }
`;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;


export const ADD_FRIEND = gql`
  mutation addFriend($userId: ID!, $friend: ID!) {
    addFriend(userId: $userId, friend: $friend) {
      _id
      username
      email
      friends
    }
  }
`;

export const REMOVE_FRIEND = gql`
  mutation removeFriend($userId: ID!, $friend: ID!) {
    removeFriend(userId: $userId, friend: $friend) {
      _id
      username
      email
      friends
    }
  }
`;

export const ADD_RIVAL = gql`
  mutation addRival($userId: ID!, $rival: ID!) {
    addRival(userId: $userId, rival: $rival) {
      _id
      username
      email
      rivals
    }
  }
`;


export const REMOVE_RIVAL = gql`
  mutation removeRival($userId: ID!, $rival: ID!) {
    removeRival(userId: $userId, rival: $rival) {
      _id
      username
      email
      rivals
    }
  }
`;

export const REMOVE_USER = gql`
  mutation removeUser {
    removeUser {
      _id
      username
      email
    }
  }
`;