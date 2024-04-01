import { UserViewModel } from "../Model/ViewModel";
import { CleanData, CreateForm, UpdateData } from "../Form/FormComponent";

let popup;

const openPopup = (name:string) => {
    $(name).data("kendoWindow")?.center().open();
}

export function Popup() {
    $("#popup").kendoWindow({
        title: UserViewModel.titlePopup(),
        visible: false,
        modal: true,
        resizable: false,
        width: 600
    });

    popup = $("#popup").data("kendoWindow");
    CreateForm();
}

export function EventClickForm(action: Function) {
    $("#addButton").click(function () {
        UserViewModel.titlePopup("Add User");
        UserViewModel.SuccessMessage("User Created")
        popup.setOptions({
            title: UserViewModel.titlePopup()
        });
        CleanData();
        openPopup("#popup");
        action();
    });

    $("#editButton").click(function () {
        UserViewModel.titlePopup("Edit User");
        UserViewModel.SuccessMessage("User Updated");
        popup.setOptions({
            title: UserViewModel.titlePopup()
        });
        UpdateData();
        openPopup("#popup");
        action();
    });
}

function EnableButtonClickEvent() {

}