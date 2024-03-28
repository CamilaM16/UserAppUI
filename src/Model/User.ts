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
