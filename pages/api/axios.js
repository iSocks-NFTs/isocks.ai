import axios from 'axios'
const baseURL = process.env === "PRODUCTION" ? process.env.NEXT_PUBLIC_LIVE_BASEURL : process.env.NEXT_PUBLIC_LOCAL_BASEURL;
export default axios.create({
    baseURL
});