import {api} from "./api.helper";

const url = "products";

function findAll() {
    return api.FIND(url, {}, 'GET');
}

function create(body) {
    return api.CREATE(url, body, 'POST');
}

function findById(id) {
    return api.FIND(`${url}/${id}`, {}, 'GET');
}

export const productService = {
    findAll,
    findById,
    create
}