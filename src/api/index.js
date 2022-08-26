import endpoints from './url';
const url = "http://localhost:8000/api";

const basicFetch = async endpoint => {
    const req = await fetch(`${url}${endpoint}`);
    const json = await req.json();
    return json;
}

const tFetch = async (endpoint, met, data) => {
    const req = await fetch(`${url}${endpoint}`, {
        method: met,
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
    .then(res => res.json())
    .catch(err => err.json())

    return req;

}

export {
    endpoints,
    basicFetch,
    tFetch
}