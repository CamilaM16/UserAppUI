import { User, UserDb } from "Model/User";
import { BASE_URL } from "./Const";
import axios from "axios";

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
        action(data);
    })
    .catch(function (error) {
        console.error('Error fetching data:', error);
    });
}

export function remove(key:string, action: Function) {
    axios.delete(`${BASE_URL}/${key}`)
    .then((response) => {
        var data = JSON.stringify(response.data);
        action(data);
    })
    .catch(function (error) {
        console.error('Error fetching data:', error);
    });
}

export function update(key:string, data:User, action: Function) {
    axios.patch(`${BASE_URL}/${key}`, data)
    .then((response) => {
        var data = JSON.stringify(response.data);
        action(data);
    })
    .catch(function (error) {
        console.error('Error fetching data:', error);
    });
}

function Format(user:User) : UserDb {
    return {
        Id: user.Id,
        LogOnName: user.LogOnName,
        PasswordHash: user.Password,
        IsEnabled: user.IsEnabled,
        ExpiryDate: user.ExpiryDate,
        PasswordChangeDate: user.PasswordChangeDate,
        FirstName: user.FirstName,
        LastName: user.LastName   
    }
}