import { SetUpForm } from "./form";

$(document).ready(function () {
  $("#popup").kendoWindow({
    title: "Mi Popup",
    visible: false,
    modal: true,
    resizable: false,
    width: 500
  });

  $("#form").kendoForm( SetUpForm(
    {
      Username: "Alex",
      Email: "alex123@email.com",
      Password: "pass123",
      Birth: new Date('03/06/2001'),
      City: 2
    },
    {
      validateOnBlur: true,
      validationSummary: true,
      errorTemplate: "<span>#=message#</span>"
    }
  ));

  $("#openPopup").click(function() {
    $("#popup").data("kendoWindow").center().open();
  });
});