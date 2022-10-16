import api from "./";

export function getAllProjectStage(projectId) {
    return api.get(`stage/project/${projectId}/all`)
}

export function updateStartDate(id, date) {
    return api.put(`stage/${id}`, { startDate: date })
}

export function updateEndDate(id, date) {
    return api.put(`stage/${id}`, { endDate: date })
}

export function createStage(data) {
    return api.post(`stage`, data)
}