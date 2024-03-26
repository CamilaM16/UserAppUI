export function Table(myDataArray : {
    ID: number;
    Name: string;
    Date: string;
}[]) {
    return $("#my-grid").kendoGrid({
        height: "400px",
        columns: [
          { field: "ID", title: "Personal Id", width: "70px" },
          { field: "Name", title: "First Name", width: "150px" },
          { field: "Date", title: "Hire Date", width: "200px", format: "{0:dd-MM-yyyy}" }
        ],
        //toolbar: ["create", "save"],
        filterable: true,
        //editable: true,
        dataSource: {
          data: myDataArray,
          schema: {
            model: {
              id: "ID",
              fields: {
                ID: { type: "number", editable: false },
                Name: { type: "string" },
                Date: { type: "date" }
              }
            }
          }
        }
      });
}