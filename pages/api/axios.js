import axios from 'axios'
import { baseURL } from '../../config';
export default axios.create({
    baseURL,
    headers:{
        x_api_key:process.env.NEXT_PUBLIC_BACKEND_KEY
    },

});