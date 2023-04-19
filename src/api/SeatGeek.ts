// import axios from "axios";

// export default axios.create({
//   baseURL: "https://api.seatgeek.com/2/events?client_id=MjExMjk0NjV8MTY0MTA5MDU5OC40MTYzNzQy",
// });


import axios from 'axios';

const SEATGEEK_API_KEY = 'your_seatgeek_api_key';
const BASE_URL = 'https://api.seatgeek.com/2';

export const searchEvents = async (query: string) => {
  const response = await axios.get(`${BASE_URL}/events`, {
    params: {
      q: query,
      client_id: SEATGEEK_API_KEY,
    },
  });
  return response.data;
};