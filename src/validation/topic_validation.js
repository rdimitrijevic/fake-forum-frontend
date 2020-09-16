import {FailedTopicResponse} from "@/models/responses/topic/TopicResponse";

async function title_val(name) {
    if (typeof name !== 'string')
        throw Error('Invalid data type');

    if(name.length < 10)
        throw Error('Title too short, minimum length 10');

    const regex = /[\w ()\[\].,{}$&*<>@!%"':-]/gu;
    if (regex.test(name))
        return true;
    else
        throw Error('Invalid topic title format');
}

async function update_validation(topic) {
    return title_val(topic.new_title)
        .then((_) => true)
        .catch(err => FailedTopicResponse(err.message));
}

async function create_validation(topic) {
    return title_val(topic.title)
        .then((_) => true)
        .catch(err => FailedTopicResponse(err.message));
}

export {
    update_validation,
    create_validation
}
