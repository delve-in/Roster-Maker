const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Time {
    _id: ID
    time: Int
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    users: [User]
    time: [Time]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
  `;

  module.exports = typeDefs;