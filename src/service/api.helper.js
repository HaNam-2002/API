import {API_URL} from '../core/utils/constant'

function ApiHelper(url, data = {}, method = 'POST') {
    console.log(data);
    let bearer = 'Bearer ' + localStorage.getItem('user_token');
    return fetch(API_URL.dev + url, {  // Return promise
        method: method,
        withCredentials: true,
        // credentials: 'include',
        headers: {
            'Authorization': bearer,
            'X-FP-API-KEY': 'chaptoken',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res ? res.json() : null)
        .then((result) => {
            return result;
        }, (error) => {
            console.log(error);
        })
}

function FIND(url) {
    return ApiHelper(url, {}, 'GET');
}


// url có dạng: http://localhost:8083/products ví dụ vậy
function CREATE(url, body) {
    return ApiHelper(url, body, 'POST');
}
// url có dạng: http://localhost:8083/products/id 
function UPDATE(url, body) {
    return ApiHelper(url, body, 'PUT');
}

function DELETE(url) {
    return ApiHelper(url, {}, 'DELETE');
}

export const api = {
    FIND,
    CREATE,
    UPDATE, 
    DELETE,
    ApiHelper,
}