import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        username
      }
    }
  }
`;

export const ADD_SHIFT = gql`
mutation addShift($shifts: [ShiftInput!]!) {
  addShift(shifts: $shifts) {
    shifts{
      date
      day
      time
      username
    }
  }
}`;

export const ADD_SCHEDULE = gql`
mutation addSchedule($date: String!, $day: String!, $time: String!, $username: String!) {
  addSchedule(date: $date, day: $day, time: $time, username: $username) {
    username
  }
}
`;