import { gql } from 'apollo-boost';

const ALL_PEOPLE = gql`
  query ($cursor: String) {
    allPeople(first: 10, after: $cursor) {
      totalCount
      pageInfo {
        startCursor
        endCursor
      }
      edges {
        node {
          id
          name
          gender
          birthYear
        }
      }
      people {
        name
        birthYear
        gender
        homeworld {
          id
          name
        }
        species {
          id
          name
        }
        id
      }
    }
  }
`;

export default {
  ALL_PEOPLE,
};
