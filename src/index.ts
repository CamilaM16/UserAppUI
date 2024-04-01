import { Table } from "./Table/TableComponent";
import * as ko from 'knockout';  
import { UserViewModel } from "./Model/ViewModel";
import { Popup } from "./Popup/PopupComponent";
import { EventClickForm, RemoveButton } from "./Popup/ButtonsComponent";

$(document).ready(function () {
  ko.applyBindings(UserViewModel);

  var dataSource = Table();
  const REFRESH_TABLE = () => dataSource.read();

  Popup(REFRESH_TABLE);
  EventClickForm();
  RemoveButton(REFRESH_TABLE);
});