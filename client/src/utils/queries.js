import { gql } from '@apollo/client';

export const QUERY_SHIFT = gql`
query Shift($date: String!, $time: String!) {
  shift(date: $date, time: $time) {
    username
  }
}
`;

export const QUERY_SCHEDULE = gql`
query Schedule {
    schedule {
      date
      day
      time
      username
    }
  }
`;