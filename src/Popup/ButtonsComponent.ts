import { CleanData, UpdateData } from "../Form/FormComponent";
import { UserViewModel } from "../Model/ViewModel";
import { DataPopup } from "../Model/Data";
import { DATA_ADD, DATA_EDIT, REMOVE_CONFIRM_MESSAGE, REMOVE_MESSAGE } from "../Data/Const";
import { remove } from "../Data/DataApi";
import { OpenPopup, UpdateTitlePopup } from "./PopupComponent";

export function RemoveButton(action: Function) {
    $("#deleteButton").click(function () {
        if (confirm(REMOVE_CONFIRM_MESSAGE)) {
            const ACTION = () => { alert(REMOVE_MESSAGE); action(); }
            remove(UserViewModel.Id(), ACTION);
        }
    }
    );
}

export function EventClickForm() {
    EnableButtonClickEvent("#addButton", DATA_ADD, CleanData);
    EnableButtonClickEvent("#editButton", DATA_EDIT, UpdateData);
}

function EnableButtonClickEvent(id: string, data: DataPopup, action: Function) {
    $(id).click(function () {
        UserViewModel.titlePopup(data.title);
        UserViewModel.SuccessMessage(data.message);
        UpdateTitlePopup()
        action();
        OpenPopup();
    });
}