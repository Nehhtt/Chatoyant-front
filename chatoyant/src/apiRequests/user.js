import { api } from '../../public/setting.json'

export async function signin(username, password) {
    return fetch(`${api}?username=${username}&password=${password}`)
        .then(response => response.json())
        .then(data => data);
}