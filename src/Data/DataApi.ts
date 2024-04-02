import { User } from "Model/User";
import { hash } from "bcryptjs";
import { BASE_URL, SALT } from "./Const";
import axios from "axios";
import { Format } from "./Formater";

export async function get() {
    var result = await axios.get(BASE_URL)
    .then((response) => {
        return JSON.stringify(response.data);
    })
    .catch(function (error) {
        console.error('Error fetching data:', error);
    });
    return result;
}

export async function create(data:User, action: Function) {

    axios.post(BASE_URL, HashPassword(data))
    .then((response) => {
        var data = JSON.stringify(response.data);
        action();
    })
    .catch(function (error) {
        console.error('Error fetching data:', error);
    });
}

export function remove(key:string, action: Function) {
    axios.delete(`${BASE_URL}/${key}`)
    .then((response) => {
        var data = JSON.stringify(response.data);
        action();
    })
    .catch(function (error) {
        console.error('Error fetching data:', error);
    });
}

export function update(key:string, data:User, action: Function) {
    axios.put(`${BASE_URL}/${key}`, HashPassword(data))
    .then((response) => {
        var data = JSON.stringify(response.data);
        action();
    })
    .catch(function (error) {
        console.error('Error fetching data:', error);
    });
}

async function HashPassword(data: User) {
    let newUser = Format(data);
    newUser.PasswordHash = await hash(data.Password, SALT); 
    return newUser;
}