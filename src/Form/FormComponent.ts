import { User } from "../Model/User";
import { DataInput, PasswordInput, TextInput, SwitchText } from "./Component/Types";
import { create, update } from "../Data/DataApi";
import { UpdatedUser, UserViewModel } from "../Model/ViewModel";
import { DATA_ADD, DATA_EDIT, INITIAL_DATA, WARNING_MESSAGE } from "../Data/Const";

function FormItems() {
  return [
    TextInput("FirstName", "First Name"),
    TextInput("LastName", "Last Name"),
    TextInput("LogOnName", "Username"),
    PasswordInput("PasswordHash"),
    SwitchText("IsEnabled", "Is Active"),
    DataInput("PasswordChangeDate", "Password Due Date", false),
    DataInput("ExpiryDate", "Password Expiry Date", true)
  ]
}

function SetUpForm(userData: kendo.ui.FormData, action: Function) {
  return {
    size: 'large',
    formData: userData,
    items: FormItems(),
    submit: (e: any) => {SuccessFunction(e); action();}
  }
}

const aux = () => alert(UserViewModel.SuccessMessage());

function SuccessFunction(e: any) {
  e.preventDefault();
  let user: User = e.model;
  switch (UserViewModel.titlePopup()) {
    case DATA_ADD.title:
      create(user, aux);
      break;
    case DATA_EDIT.title:
      update(user.Id, user, aux)
      break;
    default:
      alert(WARNING_MESSAGE);
      break;
  }
}

export function CreateForm(action: Function) {
  $("#form").kendoForm(SetUpForm(INITIAL_DATA, action));
}

export function UpdateData() {
  var kendoForm = $("#form").data("kendoForm");
  let updatedUser = UpdatedUser();
  kendoForm.setOptions({
    formData: updatedUser
  });
}

export function CleanData() {
  var kendoForm = $("#form").data("kendoForm");
  kendoForm.setOptions({
    formData: {}
  });
}