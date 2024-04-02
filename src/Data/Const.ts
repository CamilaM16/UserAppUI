import { DataPopup } from "../Model/Data";

export const BASE_URL = "http://localhost/Backend/Users";
export const PASSWORD = 'Password';
export const FORMAT_DATE = 'dd MMMM yyyy';
export const WARNING_MESSAGE = 'Invalid Form Activation';
export const REMOVE_MESSAGE = 'User Removed';
export const REMOVE_CONFIRM_MESSAGE = 'Do you want REMOVE user?';
export const QTY_BY_PAGE = 13;
export const SALT = 10;

export const DATA_EDIT: DataPopup = {
    title: "Edit User",
    message: "User Updated"
};

export const DATA_ADD: DataPopup = {
    title: "Add User",
    message: "User Created"
};

export const INITIAL_DATA = {
    Id: "",
    LogOnName: "Username",
    Password: "******",
    IsEnabled: true,
    ExpiryDate: "",
    PasswordChangeDate: "",
    FirstName: "FirstName",
    LastName: "LastName"
};