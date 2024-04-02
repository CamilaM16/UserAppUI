import { UserViewModel } from "../Model/ViewModel";
import { CreateForm } from "../Form/FormComponent";

export function OpenPopup() {
    $("#popup").data("kendoWindow")?.center().open();
}

export function Popup(successAction: Function) {
    $("#popup").kendoWindow({
        title: UserViewModel.titlePopup(),
        visible: false,
        modal: true,
        resizable: false,
        width: 600
    });

    const success = () => {
        successAction();
        ClosePopUp();
    };
    CreateForm(success);
}

export function UpdateTitlePopup() {
    let popup = $("#popup").data("kendoWindow");
    popup.setOptions({
        title: UserViewModel.titlePopup()
    });
}

function ClosePopUp() {
    $("#popup").data("kendoWindow")?.close();
}