import * as ko from 'knockout';  
import { User } from './User';

export var UserViewModel = {
    Id: ko.observable(''),
    LogOnName: ko.observable('Username'),
    Password: ko.observable('*****'),
    IsEnabled: ko.observable(true),
    ExpiryDate: ko.observable(""),
    PasswordChangeDate: ko.observable(""),
    FirstName: ko.observable('First Name'),
    LastName: ko.observable('Last Name')
};

export var PopupTitle =  {
    title: ko.observable("Pop Up") 
}

export function SetUserViewModel(user:any) {
    UserViewModel.Id(user.Id);
    UserViewModel.LogOnName(user.LogOnName);
    UserViewModel.Password(user.PasswordHash);
    UserViewModel.IsEnabled(user.IsEnabled);
    UserViewModel.ExpiryDate(user.ExpiryDate? user.ExpiryDate.toString() : "-");
    UserViewModel.PasswordChangeDate(user.PasswordChangeDate.toString());
    UserViewModel.FirstName(user.FirstName);
    UserViewModel.LastName(user.LastName);
}