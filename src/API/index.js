import axios from 'axios';

// const scheduleURL = 'http://localhost:1000/schedule';
// export const fetchSchedule = async () => await axios.get(scheduleURL);



const scheduleURL = 'https://nba-rs.herokuapp.com/schedule';
export const fetchSchedule = async () => await axios.get(scheduleURL);