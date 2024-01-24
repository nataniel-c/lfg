const typeDefs = `
  type User {
    _id: ID!
    username: String!
    email: String!
    gamerTag: String
    console: String
    friends: [User]
    rivals: [User]
    profilePic: String
    timePreferences: String
    gamePreferences: String
    userbio: String
    country: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
    # Make sure this matches the correct component
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
        gamerTag:String
        console: String
        friends: [User]
        rivals: [User]
        profilePic: String
        timePreferences: String
        gamePreferences: String
        userbio: String
        country: String
      ): User
    login(
      email: String!
      password: String!
      ): Auth
  }
    addfriend(userId: ID!
      ): User
    removefriend(userId: ID!): User
    addRival
    removeRival
  }
`;

module.exports = typeDefs;
