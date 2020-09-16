class PostResponse {
    constructor(success) {
        this.success = success
    }
}

class NewPost extends PostResponse {
    constructor(success,id,topic,content,creator,created) {
        super(success);
        this.post = {
            id: id,
            topic: topic,
            content: content,
            creator: creator,
            created: created
        }
    }
}

class AllPosts extends PostResponse {
    constructor(success,posts) {
        super(success);
        this.posts = posts;
    }
}

class FailedPost extends PostResponse {
    constructor(success,reason) {
        super(success);
        this.reason = reason
    }
}

function SuccessfulPostResponse() { return new PostResponse(true) }
function FailedPostResponse(reason) { return new FailedPost(false,reason) }
function AllPostsResponse(success,posts) { return new AllPosts(success,posts) }
function NewPostResponse(success,{ post_id, topic_id, creator, content, created }) {
    return new NewPost(success,post_id,topic_id,content,creator,created);
}

export {
    AllPostsResponse,
    NewPostResponse,
    FailedPostResponse,
    SuccessfulPostResponse
}
