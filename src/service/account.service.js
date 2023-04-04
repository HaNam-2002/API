import {api} from "./api.helper";

const url = "accounts";

function login(user, pass) {
    return api.ApiHelper(url + `/login`, { user: user, pass: pass }, 'POST');
}

function register(body) {
    return api.CREATE(url, body, 'POST');
}

export const accountService = {
    login,
    register
}