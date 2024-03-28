import { Table } from "./Table/TableComponent";
import { EditUserForm } from "./Form/FormComponent";

$(document).ready(function () {
  $("#popup").kendoWindow({
    title: "My Popup",
    visible: false,
    modal: true,
    resizable: false,
    width: 600
  });

  EditUserForm(
    {
      Id: "f3e331d5-9a64-4a9e-8bea-a043bb49ed34",
      LogOnName: "User Name",
      Password: "Tessdfksdkfjt",
      IsEnabled: false,
      ExpiryDate: new Date("2024-03-21T12:01:00-04:00"),
      PasswordChangeDate: new Date("2024-06-08T12:00:00-04:00"),
      FirstName: "Test 1",
      LastName: "Doe Test 2"                                                                                                                                                                                                
    }
  );

  $("#openPopup").click(function () {
    $("#popup").data("kendoWindow")?.center().open();
  })

  $("#openPopup").kendoButton({
      themeColor: "primary"
  });
  Table();
});

