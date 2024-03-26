
export function FormItems() {
    return [
        { field: "Username", label: "Username:", validation: { required: true } },
        { field: "Email", label: "Email:", validation: { required: true, email: true } },
        {
          field: "Password",
          label: "Password:",
          validation: { required: true },
          hint: "Hint: enter alphanumeric characters only.",
          editor: function (container: string | JQuery<HTMLElement> | JQuery.TypeOrArray<Element | DocumentFragment>, options: { field: string; }) {
            $('<input type="password" id="Password" name="' + options.field + '" title="Password" required="required" autocomplete="off" aria-labelledby="Password-form-label" data-bind="value: Password" aria-describedby="Password-form-hint"/>')
              .appendTo(container)
              .kendoTextBox();
          }
        },
        {
          field: "City",
          editor: "DropDownList",
          editorOptions: {
            dataTextField: "text",
            dataValueField: "id",
            dataSource: {
              data: [
                { text: "Sofia", id: 1 },
                { text: "Bern", id: 2 },
                { text: "Napoli", id: 3 }
              ]
            }
          }
        },
        { field: "Birth", label: { text: "Date of birth:", optional: true }, format: 'dd MMMM yyyy' },
      ]
}

export function SetUpForm(userData: kendo.ui.FormData, validate: kendo.ui.FormValidatable) {
    return {
        size: 'large',
        orientation: "horizontal",
        validatable: validate, 
        formData: userData,
        items: FormItems(),
        submit: function (e: kendo.ui.FormSubmitEvent) {
            e.preventDefault();
            alert('Form submitted successfully');
          }
        }

}