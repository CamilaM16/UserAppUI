import { User } from "Model/User";

export function Table() {
  return $("#my-grid").kendoGrid({
    columns: [
      { field: "IsEnabled", title: "Status", width: "30px" },
      { field: "LogOnName", title: "User Name", width: "100px" },
      { field: "FirstName", title: "First Name", width: "100px" },
      { field: "LastName", title: "Last Name", width: "100px" },
      { field: "PasswordChangeDate", title: "Change Password Date", width: "150px", format: "{0:dd-MM-yyyy}" },
      { field: "ExpiryDate", title: "Expiry Password Date", width: "150px", format: "{0:dd-MM-yyyy}" },
    ],
    pageable: true,
    editable: "popup",
    dataSource: DataSource()
  });
}

function DataSource() {
  const BaseURL = "http://localhost:44341/Users";
  return new kendo.data.DataSource( {
    pageSize: 15,
    type: "odata-v4",
    transport: {
      read: {
        url: function () {
          return BaseURL;
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