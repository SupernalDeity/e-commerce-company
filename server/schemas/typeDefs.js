const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    courseOneCart: Boolean
    courseOneOwned: Boolean
    courseTwoCart: Boolean
    courseTwoOwned: Boolean
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(id: ID!): User
    me: User
  }

  type Mutation {
    addUser(email:String!, username:String!, password:String!): Auth
    login(email:String!, password:String!): Auth
    updateCourse(id:ID!, 
      courseOneOwned:Boolean, courseOneCart:Boolean, 
      courseTwoOwned:Boolean, courseTwoCart:Boolean
      ): User
  }
`;

module.exports = typeDefs;
