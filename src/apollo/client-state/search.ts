import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

// typeDefs
const typeDefs = gql`
  extend type Query {
    currentSearch: Search
  }

  extend type Mutation {
    setCurrentSearch(input: searchInput!): Search
  }

  extend input searchInput {
    endDay: String
    startDay: String
  }

  extend type Search {
    endDay: String
    startDay: String
  }
`;

// defaults
const defaults = {
  currentSearch: {
    __typename: 'Search',
    endDay: null,
    startDay: null,
  },
};

// queries
export const currentSearchQuery = gql`
  query getCurrentSearch {
    currentSearch @client {
      endDay
      startDay
    }
  }
`;

// mutations
const setCurrentSearchMutation = gql`
  mutation setCurrentSearch($input: searchInput) {
    setCurrentSearch(input: $input) @client
  }
`;

// resolvers
const setCurrentSearch = (obj, { input }, { cache }) => {
  const { currentSearch } = cache.readQuery({ query: currentSearchQuery });
  const data = {
    currentSearch: {
      ...currentSearch,
      ...input,
    },
  };

  cache.writeQuery({
    query: currentSearchQuery,
    data,
  });
};

const resolvers = {
  Mutation: {
    setCurrentSearch,
  },
};

export const clientState = {
  typeDefs,
  defaults,
  resolvers,
};

// enhancers
const currentSearchQueryHandler = ({ data }) => ({ ...data.currentSearch });

export const withSearchQuery = graphql(currentSearchQuery, { props: currentSearchQueryHandler });
export const withSearchMutation = graphql(setCurrentSearchMutation, { name: 'setCurrentSearch' });
