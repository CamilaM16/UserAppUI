import * as ko from 'knockout';
import { User } from './User';
import { INITIAL_DATA } from '../Data/Const';
import { FormatDate } from '../Data/Formater';

export var UserViewModel = {
    Id: ko.observable(''),
    LogOnName: ko.observable(INITIAL_DATA.Id),
    Password: ko.observable(INITIAL_DATA.Password),
    IsEnabled: ko.observable(INITIAL_DATA.IsEnabled),
    ExpiryDate: ko.observable(INITIAL_DATA.ExpiryDate),
    PasswordChangeDate: ko.observable(INITIAL_DATA.PasswordChangeDate),
    FirstName: ko.observable(INITIAL_DATA.FirstName),
    LastName: ko.observable(INITIAL_DATA.LastName),
    titlePopup: ko.observable(''),
    SuccessMessage: ko.observable(''),
};

export function SetUserViewModel(user: any) {
    UserViewModel.Id(user.Id);
    UserViewModel.LogOnName(user.LogOnName.trim());
    UserViewModel.Password(user.PasswordHash);
    UserViewModel.IsEnabled(user.IsEnabled);
    UserViewModel.ExpiryDate(user.ExpiryDate ? FormatDate(user.ExpiryDate) : "-");
    UserViewModel.PasswordChangeDate(FormatDate(user.PasswordChangeDate));
    UserViewModel.FirstName(user.FirstName.trim());
    UserViewModel.LastName(user.LastName.trim());
}

export function UpdatedUser(): User {
    return {
        Id: UserViewModel.Id(),
        LogOnName: UserViewModel.LogOnName(),
        Password: UserViewModel.Password(),
        IsEnabled: UserViewModel.IsEnabled(),
        ExpiryDate: new Date(UserViewModel.ExpiryDate()),
        PasswordChangeDate: new Date(UserViewModel.ExpiryDate()),
        FirstName: UserViewModel.FirstName(),
        LastName: UserViewModel.LastName()
    };
}