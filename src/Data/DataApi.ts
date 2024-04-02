import { User, UserDb } from "Model/User";
import { BASE_URL } from "./Const";
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

export function create(data:User, action: Function) {
    axios.post(BASE_URL, Format(data))
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
    axios.put(`${BASE_URL}/${key}`, Format(data))
    .then((response) => {
        var data = JSON.stringify(response.data);
        action();
    })
    .catch(function (error) {
        console.error('Error fetching data:', error);
    });
}

