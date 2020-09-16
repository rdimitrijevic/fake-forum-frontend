import axios from 'axios'

import {create_post_validation, topic_id_validation} from "@/validation/post_validation";
import {AllPostsResponse, FailedPostResponse, NewPostResponse} from "@/models/responses/post/PostResponse";

async function fetch_all_posts(topicId) {
    try {
        let validation = await topic_id_validation(topicId);

        if (validation !== true) return validation;

        let res = await axios
            .get(`http://localhost:8000/posts/${topicId}`);

        if (res.status === 200) {
            console.log(res.data)
            return AllPostsResponse(true,res.data);
        }
    } catch (e) {
        return FailedPostResponse(e.statusText);
    }
}

async function create_post(request) {
    try {
        let validation = await create_post_validation(request);

        if (validation !== true) return validation;

        console.log(request);

        let res = await axios
            .post(
                `http://localhost:8000/posts/${request.parentTopic}`,
                { content: request.content });

        if (res.status === 201) {
            return NewPostResponse(true,res.data);
        }
    } catch (e) {
        return FailedPostResponse(e.statusText);
    }
}

export {
    fetch_all_posts,
    create_post
}
