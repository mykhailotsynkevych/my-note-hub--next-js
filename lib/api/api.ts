import axios from "axios";

// axios.defaults.baseURL = process.env.NEXT_PUBLIC_NOTES_URL;
export const nextServer = axios.create({
  baseURL: 'http://localhost:3000/api',
  withCredentials: true, // дозволяє axios працювати з cookie
});

