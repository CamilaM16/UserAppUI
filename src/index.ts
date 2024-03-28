import { Table } from "./Table/TableComponent";
import * as ko from 'knockout';  
import { UserViewModel } from "./Model/ViewModel";
import { PopupAdd, PopupEdit } from "./Popup/PopupComponent";

$(document).ready(function () {

  ko.applyBindings(UserViewModel);
  Table();
  
  PopupAdd();
  PopupEdit();
});

export function remove(key:string) {
  remove(key);
  alert("User Removed");
}