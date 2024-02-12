const typeDefs = `
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
  }

  type Schedule {
    _id: ID!
    date: String!
    day: String!
    time: String!
    username: String!
  }

  type Shift {
    _id: ID!
    date: String!
    day: String!
    time: String!
    username: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    shift (date: String!, time: String!): [Shift]
    schedule: [Schedule]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addShift(date: String!, day: String!, time: String!, username: String!): Shift
    addSchedule(date: String!, day: String!, time: String!, username: String!): Schedule
  }
  `;

  module.exports = typeDefs;