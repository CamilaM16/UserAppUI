import { SetUserViewModel } from "../Model/ViewModel";
import { BASE_URL } from "../Data/Const";

export function Table() {
  var dataSource = DataSource();
  $("#my-grid").kendoGrid({
    columns: [
      { field: "IsEnabled", title: "Status", width: "30px", template:  function(dataItem: any) {
        console.log(dataItem);
        if (dataItem.IsEnabled === true) {
            return "<span class='badge badge-success'>Activo</span>";
        } else {
            return "<span class='badge badge-danger'>Inactivo</span>";
        }
      } },
      { field: "LogOnName", title: "User Name", width: "100px" },
      { field: "FirstName", title: "First Name", width: "100px" },
      { field: "LastName", title: "Last Name", width: "100px" },
      { field: "PasswordChangeDate", title: "Change Password Date", width: "100px", format: "{0:dd-MM-yyyy}" },
      { field: "ExpiryDate", title: "Expiry Password Date", width: "100px", format: "{0:dd-MM-yyyy}" },
    ],
    pageable: true,
    selectable: "row",
    dataSource: dataSource,
    change: function (e) {
      var selectedRow = this.dataItem(this.select());
      SetUserViewModel(selectedRow);
  }
  });
  return dataSource;
}

function DataSource() {
  return new kendo.data.DataSource( {
    pageSize: 13,
    type: "odata-v4",
    transport: {
      read: {
        url: function () {
          return BASE_URL;
        }
      }
    },
    schema: {
      model: {
        id: "Id",
        fields: {
          Id: { editable: false },
          LogOnName: { editable: true, validation: { required: true } },
          PasswordHash: { editable: true, validation: { required: true } },
          IsEnabled: { type: "boolean", editable: true },
          ExpiryDate: { type: "date", editable: true, nullable: true },
          PasswordChangeDate: { type: "date", editable: true},
          FirstName: { editable: true, validation: { required: true } },
          LastName: { editable: true, validation: { required: true } }
        }
      }
    }

  });
}