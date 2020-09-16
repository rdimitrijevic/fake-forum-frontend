class TopicUIModel {
    constructor(id,title,creator,created) {
        this.id = id;
        this.title = title;
        this.creator = creator;
        this.created = created;
    }
}

function getAsTopicUIModels (topics) {
    return topics.map( topic => {
        return TopicModel(
            topic.topic_id,
            topic.title,
            topic.creator,
            topic.created);
    })
}

function TopicModel(id,title,creator,created) {
    return new TopicUIModel(
        id,
        title,
        creator,
        created);

}

export {
    getAsTopicUIModels,
    TopicModel
}
