import {apiService} from "./apiService";
import {urls} from "../constants/ulrs";

const postService ={
    getALl: ()=> apiService.get(urls.posts),
    create: (data) => apiService.post(urls.posts, data)
}

export {
    postService
}