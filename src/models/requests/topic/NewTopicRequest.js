class TopicRequest {
    constructor(title) {
        this.title = title
    }
}

function NewTopicRequest(title) {
    return new TopicRequest(title)
}

export { NewTopicRequest }
