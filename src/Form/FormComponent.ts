import { User } from "../Model/User";
import { DataInput, PasswordInput, TextInput, SwitchText } from "./Component/Types";
import { create, update } from "../Api/Data";

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

function SetUpForm(userData: kendo.ui.FormData, action: Function, message: string) {
  return {
    size: 'large',
    formData: userData,
    items: FormItems(),
    submit: function (e: kendo.ui.FormSubmitEvent) {
      e.preventDefault();
      action(e);
      alert(message);
    }
  }
}

const aux = (e: any) => console.log(e);

export function EditUserForm(userData: User) {
  return $("#form-edit").kendoForm(SetUpForm(userData, (e: any) =>{ update(e.model.Id, e.model, aux) },"Edited"));
}

export function CreateUserForm() {
  return $("#form-add").kendoForm(SetUpForm({}, (e: any) =>{create( e.model, aux) }, "Created"));
}
