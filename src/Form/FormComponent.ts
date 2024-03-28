import { User } from "Model/User";
import { DataInput, PasswordInput, TextInput, SwitchText } from "./Component/Types";

export function FormItems() {
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

export function SetUpForm(userData: kendo.ui.FormData) {
  return {
    size: 'large',
    formData: userData,
    items: FormItems(),
    submit: function (e: kendo.ui.FormSubmitEvent) {
      e.preventDefault();
      alert('Form submitted successfully');
    }
  }

}

export function EditUserForm(userData: User) {
  return $("#form").kendoForm(SetUpForm(userData));
}