import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

// typeDefs
const typeDefs = gql`
  extend type Query {
    user: User
  }

  extend type Mutation {
    setUser(input: userInput!): User
  }

  extend input userInput {
    name: String
  }

  extend type User {
    name: String
  }
`;

// defaults
const defaults = {
  user: {
    __typename: 'User',
    name: null,
  },
};

// queries
export const userQuery = gql`
  query getUser {
    user @client {
      name
    }
  }
`;

// mutations
const setUserMutation = gql`
  mutation setUser($input: userInput) {
    setUser(input: $input) @client
  }
`;

// resolvers
const setUser = (obj, { input }, { cache }) => {
  const { user } = cache.readQuery({ query: userQuery });
  const data = {
    user: {
      ...user,
      ...input,
    },
  };

  cache.writeQuery({
    query: userQuery,
    data,
  });
};

const resolvers = {
  Mutation: {
    setUser,
  },
};

export const clientState = {
  typeDefs,
  defaults,
  resolvers,
};

// enhancers
const userQueryHandler = ({ data }) => ({ user: { ...data.user } });

export const withUserQuery = graphql(userQuery, { props: userQueryHandler });
export const withUserMutation = graphql(setUserMutation, { name: 'setUser' });
