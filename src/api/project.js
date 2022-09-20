import api from "./";

export function postProject(data) {
    api.post("/project", data)
}