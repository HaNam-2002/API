import {api} from "./api.helper";

const url = "categories";

function findAll() {
    return api.FINDALL(url, {}, 'GET');
}

function create(body) {
    return api.CREATE(url, body, 'POST');
}

export const categoryService = {
    findAll,
    create
}