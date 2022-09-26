
const init = {
    projectId: "632e9764ac7ffc8360283814",
    stages: [{
        "project": "632e9764ac7ffc8360283814",
        "name": "Config type script",
        "startDate": "2022-09-30T17:00:00.000Z",
        "endDate": "2022-10-31T17:00:00.000Z",
        "_id": "633114aabf7b8dc35267354b",
        "createDate": "2022-09-26T02:55:38.655Z",
        "updateDate": "2022-09-26T02:55:38.655Z",
        "creator": "DBA7nCqgqRSULY83RmCCn2Str5N2",
        "__v": 0
    }, {
        "project": "632e9764ac7ffc8360283814",
        "name": "Config type script 2",
        "startDate": "2022-10-30T17:00:00.000Z",
        "endDate": "2022-11-31T17:00:00.000Z",
        "_id": "633114aabf7b8dc35267354b",
        "createDate": "2022-09-26T02:55:38.655Z",
        "updateDate": "2022-09-26T02:55:38.655Z",
        "creator": "DBA7nCqgqRSULY83RmCCn2Str5N2",
        "__v": 0
    },],
    current: null,
    loading: false,
    error: {
        action: "",
        message: null
    }
}

export default function stageReducer(state = init, { type }) {
    switch (type) {
        default:
            return state
    }
}