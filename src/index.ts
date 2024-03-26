import { Table } from "./table";
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

  let myDataArray = [
    {ID: 1, Name: "Tom", Date: "10/15/2022"},
    {ID: 2, Name: "John", Date: "11/25/2022"},
    {ID: 3, Name: "Annie", Date: "05/09/2022"},
    {ID: 4, Name: "Rachel", Date: "08/06/2022"},
    {ID: 5, Name: "Klemens", Date: "10/07/2022"},
    {ID: 6, Name: "Micah", Date: "05/19/2022"},
    {ID: 7, Name: "Junie", Date: "04/04/2022"},
    {ID: 8, Name: "Krishnah", Date: "07/19/2022"},
    {ID: 9, Name: "Enrichetta", Date: "01/11/2022"},
    {ID: 10, Name: "Marten", Date: "02/13/2022"},
    {ID: 11, Name: "Rosmunda", Date: "08/15/2022"},
  ];

  Table(myDataArray);
});