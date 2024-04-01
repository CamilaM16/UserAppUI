import { Table } from "./Table/TableComponent";
import * as ko from 'knockout';  
import { UserViewModel } from "./Model/ViewModel";
import { EventClickForm, Popup } from "./Popup/PopupComponent";

$(document).ready(function () {

  ko.applyBindings(UserViewModel);
  var dataSource = Table();
  Popup();
  EventClickForm(()=>{dataSource.read()});
});

export function remove(key:string) {
  remove(key);
  alert("User Removed");
}