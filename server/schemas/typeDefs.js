const typeDefs = `
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    gamertag: String
    console: String
    friends: [User]
    rivals: [User]
    profilePic: String
    timePreferences: [String]
    gamePreferences: String
    bio: String
    country: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
    me: User
  }

  type Mutation {
    addUser(
        username: String!
        email: String!
        password: String!
      ): Auth
    updateUser(
        username: String
        email: String
        password: String
        gamertag:String
        console: String
        profilePic: String
        timePreferences: String
        gamePreferences: String
        bio: String
        country: String
      ): User
    login(
      email: String!
      password: String!
      ): Auth
    addFriend(userId: ID!,
      friend: ID!
      ): User
    removeFriend(userId: ID!,
      friend: ID!
      ): User
    addRival(userId: ID!,
      rival: ID!
      ): User
    removeRival(userId: ID!,
      rival: ID!
      ): User
      removeUser: User
  }
`;

module.exports = typeDefs;
