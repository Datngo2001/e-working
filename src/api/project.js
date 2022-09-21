import api from "./";

export function postProject(data) {
    return api.post("/project", data)
}

export function getMyProject() {
    return api.get("/project/my/all")
}