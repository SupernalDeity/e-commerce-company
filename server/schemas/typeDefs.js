const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String

    evsrCart: Boolean
    evsrOwned: Boolean

    h2pCart: Boolean
    h2pOwned: Boolean

    how2Cart: Boolean
    how2Owned: Boolean

    wdbCart: Boolean
    wdbOwned: Boolean

    jsbCart: Boolean
    jsbOwned: Boolean

    js10Cart: Boolean
    js10Owned: Boolean

    hcfullCart: Boolean
    hcfullOwned: Boolean

    hc30Cart: Boolean
    hc30Owned: Boolean

    hcbCart: Boolean
    hcbOwned: Boolean
    
    pfullCart: Boolean
    pfullOwned: Boolean

    p30Cart: Boolean
    p30Owned: Boolean

    mdbbCart: Boolean
    mdbbOwned: Boolean
    
    efullCart: Boolean
    efullOwned: Boolean

    r60Cart: Boolean
    r60Owned: Boolean

    nfullCart: Boolean
    nfullOwned: Boolean
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
      evsrOwned:Boolean, evsrCart:Boolean, 
      h2pOwned:Boolean, h2pCart:Boolean,
      how2Owned:Boolean, how2Cart:Boolean,
      wdbOwned:Boolean, wdbCart:Boolean,
      jsbOwned:Boolean, jsbCart:Boolean,
      js10Owned:Boolean, js10Cart:Boolean,
      hcfullOwned:Boolean, hcfullCart:Boolean,
      hc30Owned:Boolean, hc30Cart:Boolean,
      hcbOwned:Boolean, hcbCart:Boolean,
      pfullOwned:Boolean, pfullCart:Boolean,
      p30Owned:Boolean, p30Cart:Boolean,
      mdbbOwned:Boolean, mdbbCart:Boolean,
      efullOwned:Boolean, efullCart:Boolean,
      r60Owned:Boolean, r60Cart:Boolean,
      nfullOwned:Boolean, nfullCart:Boolean
      ): User
  }
`;

module.exports = typeDefs;
