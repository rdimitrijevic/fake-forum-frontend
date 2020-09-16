import Vue from 'vue'
import axios from 'axios'

import {NewTopicResponse, AllTopicsResponse, FailedTopicResponse} from "@/models/responses/topic/TopicResponse";
import {create_validation} from "@/validation/topic_validation";

async function fetch_all_topics() {
    try {
        let res = await axios
            .get('http://localhost:8000/topics');

        if (res.status === 200) {
            console.log(res.data)
            return AllTopicsResponse(true,res.data);
        }
    } catch (e) {
        return FailedTopicResponse(e.message);
    }
}

async function create_topic(request) {
    try {
        let validation = await create_validation(request);

        if (validation !== true) return validation;

        let res = await axios
            .post(
                'http://localhost:8000/topics',
                request);

        if (res.status === 201) {
            return NewTopicResponse(true,res.data);
        }
    } catch (e) {
        return FailedTopicResponse(e.statusText);
    }
}

export {
    fetch_all_topics,
    create_topic
}
