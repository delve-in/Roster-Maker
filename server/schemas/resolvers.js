const { User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
const { Shift } = require('../models');
const { Schedule  } = require('../models');

const resolvers = {
  Query: {
    users: async (parent, args, context) => {
      if (context.user) {
        return User.find({});
      }
      throw new AuthenticationError('You need to be logged in!');
    },
      shift: async (parent, { date, time }) => {
        console.log("this is the date and time");
        console.log(date, time);
        try {
       
          const user = await Shift.find({ date: date, time: time });
          
          console.log("this is the return of shift.find");
          console.log(user);
          return user;
      } catch (error) {
          console.error('Error retrieving shifts:', error);
      }
    },
      schedule: async (parent) => {
        try {
         
          const schedules = await Schedule.find({});
          console.log(`this is all the schedule ${schedules}`);
          return schedules;
      } catch (error) {
          console.error('Error retrieving shifts:', error);
      }
    },
  },

  Mutation: {
    addShift: async (parent, { date, day, time, username } , context) => {
      try {
        console.log(date, day, time, username);
        console.log("inside resolver");
      const newShift = await Shift.create({
        date: date,
        day: day,
        time: time,
        username: username
      });
      console.log(`newShift from resolver ${newShift}`);
        return newShift;
      }
      catch (error) {
        
        console.error('Error adding shift:', error);
      }
    },
    addSchedule: async (parent, { date, day, time, username } , context) => {
      try {
        console.log(date, day, time, username);
        console.log("inside resolver");
      const newShedule = await Schedule.create({
        date: date,
        day: day,
        time: time,
        username: username
      });
      console.log(`newShedule from resolver ${newShedule}`);
        return newShedule;
      }
      catch (error) {
        
        console.error('Error adding shift:', error);
      }
    },
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
    
  }
};

module.exports = resolvers;