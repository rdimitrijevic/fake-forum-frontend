class TopicResponse {
    constructor(success) {
        this.success = success
    }
}

class NewTopic extends TopicResponse {
    constructor(success,id,title,creator,created) {
        super(success);
        this.topic = {
            id: id,
            title: title,
            creator: creator,
            created: created
        }
    }
}

class AllTopics extends TopicResponse {
    constructor(success,topics) {
        super(success);
        this.topics = topics;
    }
}

class FailedTopic extends TopicResponse {
    constructor(success,reason) {
        super(success);
        this.reason = reason
    }
}

function SuccessfulTopicResponse() { return new TopicResponse(true) }
function FailedTopicResponse(reason) { return new FailedTopic(false,reason) }
function AllTopicsResponse(success,topics) { return new AllTopics(success,topics) }
function NewTopicResponse(success,{ topic_id, title, creator, created }) {
    return new NewTopic(success,topic_id,title,creator,created);
}

export {
    AllTopicsResponse,
    NewTopicResponse,
    FailedTopicResponse,
    SuccessfulTopicResponse
}
