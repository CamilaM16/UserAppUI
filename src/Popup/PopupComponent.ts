import { PopupTitle, UserViewModel } from "../Model/ViewModel";
import { CreateUserForm, EditUserForm } from "../Form/FormComponent";

const openPopup = (name:string) => {
    $(name).data("kendoWindow")?.center().open();
}

export function PopupAdd() {
    $("#popup-add").kendoWindow({
        title: "Add User",
        visible: false,
        modal: true,
        resizable: false,
        width: 600
    });

    $("#addButton").click(function () {
        PopupTitle.title("Add User");
        CreateUserForm();
        openPopup("#popup-add");
    });
}

export function PopupEdit() {
    $("#popup-edit").kendoWindow({
        title: "Edit User",
        visible: false,
        modal: true,
        resizable: false,
        width: 600
    });

    $("#editButton").click(function () {
        PopupTitle.title("Edit User");
        EditUserForm(
            {
              Id: UserViewModel.Id(),
              LogOnName: UserViewModel.LogOnName(),
              Password: UserViewModel.Password(),
              IsEnabled: UserViewModel.IsEnabled(),
              ExpiryDate: new Date(UserViewModel.ExpiryDate()),
              PasswordChangeDate: new Date(UserViewModel.PasswordChangeDate()),
              FirstName: UserViewModel.FirstName(),
              LastName: UserViewModel.LastName()                                                                                                                                                                                                
            }
          );
        openPopup("#popup-edit");
    });
}