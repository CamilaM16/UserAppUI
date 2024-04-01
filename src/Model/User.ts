export interface User {
    Id: string;
    LogOnName: string;
    Password: string;
    IsEnabled: boolean;
    ExpiryDate?: Date | null;
    PasswordChangeDate: Date;
    FirstName: string;
    LastName: string;
}

export interface UserDb {
    Id: string;
    LogOnName: string;
    PasswordHash: string;
    IsEnabled: boolean;
    ExpiryDate?: Date | null;
    PasswordChangeDate: Date;
    FirstName: string;
    LastName: string;
}
