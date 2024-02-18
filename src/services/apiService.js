import axios from "axios";
import {baseURL} from "../constants/ulrs";

const apiService = axios.create({baseURL})

export {
    apiService
}