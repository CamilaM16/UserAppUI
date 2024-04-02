import { User, UserDb } from "../Model/User";

export function Format(user:User) : UserDb {
    return {
        Id: user.Id,
        LogOnName: user.LogOnName,
        PasswordHash: user.Password,
        IsEnabled: user.IsEnabled,
        ExpiryDate: user.ExpiryDate ? FormatDate(user.ExpiryDate) : null,
        PasswordChangeDate: FormatDate(user.PasswordChangeDate),
        FirstName: user.FirstName,
        LastName: user.LastName   
    }
}

export function FormatDate(date:Date) {
    return date.toISOString().split('T')[0];
}