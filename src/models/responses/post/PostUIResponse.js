class PostUIModel {
    constructor(id,content,creator,created) {
        this.id = id
        this.content = content
        this.creator = creator
        this.created = created
    }
}

function getAsPostUIModels (posts) {
    return posts.map( post => {
        return PostModel(
            post.post_id,
            post.content,
            post.creator,
            post.created);
    })
}

function PostModel(id,content,creator,created) {
    return new PostUIModel(
        id,
        content,
        creator,
        created);

}

export {
    getAsPostUIModels,
    PostModel
}
