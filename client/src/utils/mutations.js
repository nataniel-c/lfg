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
    $gamerTag: String
    $console: String
    $profilePic: String
    $timePreferences: String
    $gamePreferences: String
    $userbio: String
    $country: String
  ) {
    updateUser(
      username: $username
      email: $email
      password: $password
      gamerTag: $gamerTag
      console: $console
      profilePic: $profilePic
      timePreferences: $timePreferences
      gamePreferences: $gamePreferences
      userbio: $userbio
      country: $country
    ) {
      _id
      username
      email
      gamerTag
      console
      profilePic
      timePreferences
      gamePreferences
      userbio
      country
    }
  }
`;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        _id
        username
        email
      }
      token
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