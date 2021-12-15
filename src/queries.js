import { gql } from '@apollo/client';

const GET_MY_DATA = gql`
  {
    intro
    emailAddress
    linkedIn
  }
`;

const GET_BLOGS = gql`
  {
    blogs {
      intro
      myBiggestTakeAways
      theDailyGrind
      theThingsILove
      theThingsIDisLike
      interestingFacts
    }
  }
`;

export { GET_MY_DATA, GET_BLOGS };
