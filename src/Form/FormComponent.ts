import { User } from "../Model/User";
import { DataInput, PasswordInput, TextInput, SwitchText } from "./Component/Types";
import { create, update } from "../Data/DataApi";
import { UpdatedUser, UserViewModel } from "../Model/ViewModel";
import { DATA_ADD } from "../Data/Const";

const INITIAL_DATA = {
  Id: "",
  LogOnName: "Username",
  Password: "Admin123",
  IsEnabled: true,
  ExpiryDate: new Date("2024-07-07"),
  PasswordChangeDate: new Date("2024-06-07"),
  FirstName: "FirstName",
  LastName: "LastName"
};

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

function SetUpForm(userData: kendo.ui.FormData) {
  return {
    size: 'large',
    formData: userData,
    items: FormItems(),
    submit: SuccessFunction
  }
}

const aux = (e: any) => console.log(e);


function SuccessFunction(e: kendo.ui.FormSubmitEvent) {
  e.preventDefault();
  let user: User = e.model;
  switch (UserViewModel.titlePopup()) {
    case DATA_ADD.title:
      create(user, aux);
      break;
    case DATA_ADD.title:
      update(user.Id, user, aux)
      break;
    default:
      aux(e);
      break;
  }
  alert(UserViewModel.SuccessMessage());
}
export function CreateForm() {
  $("#form").kendoForm(SetUpForm(INITIAL_DATA));
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