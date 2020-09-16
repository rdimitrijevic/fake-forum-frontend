class PostRequestClass {
    constructor(content,parentTopic) {
        this.content = content
        this.parentTopic = parentTopic
    }
}

function PostRequest(content,parentTopic) {
    return new PostRequestClass(content,parentTopic)
}

export { PostRequest }
