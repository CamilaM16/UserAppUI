import { User } from "Model/User";
import axios from "axios";

export const BaseURL = "http://localhost:44341/Users";

export function create(data:User, action: Function) {
    axios.post(BaseURL, data)
    .then((response) => {
        var data = JSON.stringify(response.data);
        action(data);
    })
    .catch(function (error) {
        console.error('Error fetching data:', error);
    });
}

export function remove(key:string, action: Function) {
    axios.delete(`${BaseURL}/${key}`)
    .then((response) => {
        var data = JSON.stringify(response.data);
        action(data);
    })
    .catch(function (error) {
        console.error('Error fetching data:', error);
    });
}

export function update(key:string, data:User, action: Function) {
    axios.patch(`${BaseURL}/${key}`, data)
    .then((response) => {
        var data = JSON.stringify(response.data);
        action(data);
    })
    .catch(function (error) {
        console.error('Error fetching data:', error);
    });
}