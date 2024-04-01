import { DataPopup } from "../Model/Data";

export const BASE_URL = "http://localhost:44341/Users";
export const PASSWORD = 'Password';
export const FORMAT_DATE = 'dd MMMM yyyy';

export const DATA_EDIT: DataPopup = {
    title: "Edit User",
    message: "User Updated"
};

export const DATA_ADD: DataPopup = { 
    title: "Add User",
    message: "User Created"
};