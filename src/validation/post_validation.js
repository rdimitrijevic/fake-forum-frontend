import {FailedPostResponse} from "@/models/responses/post/PostResponse";

async function content_val(content) {
    if (typeof content !== 'string')
        throw Error('Invalid data type');

    if (content.length === 0)
        throw Error("Content can't be empty");
}

async function topic_id_validation(topic_id) {
    console.log(topic_id)
    return topic_id.length === 0 ? FailedPostResponse("Topic id can't be empty"): true;
}

async function create_post_validation(post) {
    return content_val(post.content)
        .then((_) => true)
        .catch(err => FailedPostResponse(err.message));
}

export {
    create_post_validation,
    topic_id_validation
}
