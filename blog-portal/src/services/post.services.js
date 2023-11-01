import { ApiService } from "../utilities/Api.service";

const postServicesUrls = {
    getPosts : "/posts",
};

const getPosts = () => {
    const response = ApiService.get(postServicesUrls.getPosts);
    return response;
};

const getPostById = (postId) => {
    const response =ApiService.get(`${postServicesUrls.getPosts}/${postId}`)
    return response;
}

const addPost = (payload) => {
// console.log(payload,'payload');
const response = ApiService.post(postServicesUrls, payload);
return response;
}

export const PostServices = {
    getPosts,
    getPostById,
    addPost
};