import { FORMAT_DATE, PASSWORD } from "../../Data/Const";

export function PasswordInput(fieldName: string) {
    return {
        field: fieldName,
        label: `${PASSWORD}:`,
        validation: { required: true },
        hint: "*Enter alphanumeric characters only.",
        editor: function (container: string | JQuery<HTMLElement> | JQuery.TypeOrArray<Element | DocumentFragment>, options: { field: string; }) {
            $('<input type="password" id="Password" name="' + options.field + '" title="Password" required="required" autocomplete="off" aria-labelledby="Password-form-label" data-bind="value: Password" aria-describedby="Password-form-hint"/>')
                .appendTo(container).kendoTextBox();
        }
    }
}

export function DataInput(fieldName: string, labelName: string, optional: boolean) {
    return { field: fieldName, editor: "DatePicker", label: { text: `${labelName}:`, optional },  validation: { required: !optional },format: FORMAT_DATE };
}

export function TextInput(fieldName: string, labelName: string) {
    return { field: fieldName, label: `${labelName}:`, validation: { required: true } };
}

export function SwitchText(fieldName: string, labelName: string) {
    return {
        field: fieldName,
        editor: "Switch",
        label: `${labelName}:`
    };
}