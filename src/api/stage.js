import api from "./";

export function getAllProjectStage(projectId) {
    return api.get(`stage/project/${projectId}/all`)
}