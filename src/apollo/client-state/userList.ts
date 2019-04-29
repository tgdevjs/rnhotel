import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

// typeDefs
const typeDefs = gql`
  extend type Query {
    UserList: [User]
  }

  extend type Mutation {
    setUserList(input: userListInput!): UserList
  }

  extend input userListInput {
    name: String
  }

  extend type UserList {
    name: String
  }
`;

// defaults
const defaults = {
  userList: ['tg', 'Giraldo', 'Paris', 'sdfsdf'].map(name => ({
    __typename: 'User',
    name,
  })),
};

// queries
const userListQuery = gql`
  query getUserList {
    userList @client {
      name
    }
  }
`;

// mutations
const addUserMutation = gql`
  mutation addUser($input: userListInput) {
    addUser(input: $input) @client
  }
`;

// resolvers
const addUser = (obj, { input }, { cache }) => {
  const { userList } = cache.readQuery({ query: userListQuery });
  const data = {
    userList: [{ __typename: 'User', ...input }, ...userList],
  };

  cache.writeQuery({
    query: userListQuery,
    data,
  });
};

const resolvers = {
  Mutation: {
    addUser,
  },
};

export const clientState = {
  typeDefs,
  defaults,
  resolvers,
};

// enhancers
const userListQueryHandler = ({ data: { userList } }) => {
  return { userList };
};

export const withUserListQuery = graphql(userListQuery, { props: userListQueryHandler });
export const withAddUserMutation = graphql(addUserMutation, { name: 'addUser' });
