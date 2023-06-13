import Departments from "./Departments";
import Stacks from "./Stacks";
import * as actions from "../modules/actions";

const FormFields = (componentData) => {
    return [
        {
            type: "input",
            inputType: "email",
            placeholder: "Email",
            value: componentData.email.state.value,
            setValue: componentData.email.state.setter,
            id: "email",
            name: "email",
            labelText: "Email: "
        },
        {
            type: "input",
            inputType: "password",
            placeholder: "Password",
            value: componentData.password.state.value,
            setValue: componentData.password.state.setter,
            id: "password",
            name: "password",
            labelText: "Password: "
        },
        {
            type: "input",
            inputType: "text",
            placeholder: "Name",
            value: componentData.name.state.value,
            setValue: componentData.name.state.setter,
            id: "name",
            name: "name",
            labelText: "Name: "
        },
        {
            type: "input",
            inputType: "text",
            placeholder: "Surname",
            value: componentData.surname.state.value,
            setValue: componentData.surname.state.setter,
            id: "surname",
            name: "surname",
            labelText: "Surname: "
        },
        {
            type: "select",
            values: Departments,
            value: componentData.department.state.value,
            setValue: componentData.department.state.setter,
            id: "department",
            name: "department",
            labelText: "Department: ",
        },
        {
            type: "input",
            inputType: "number",
            placeholder: "Salary",
            value: componentData.salary.state.value,
            setValue: componentData.salary.state.setter,
            id: "salary",
            name: "salary",
            labelText: "Salary: "
        },
        {
            type: "multiselect",
            values: Stacks,
            value: componentData.stack.state.value,
            setValue: componentData.stack.state.setter,
            id: "stack",
            name: "stack",
            labelText: "Stack: "
        },
        {
            type: "button",
            buttonType: "submit",
            id: "submit",
            text: componentData.isLoading === false
              ? "Submit"
              : "...",
            isLoading: componentData.isLoading,
            onClick: componentData.submitButton.onClick
        }
    ]
}

export default FormFields