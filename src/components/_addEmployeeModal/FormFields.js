import Departments from "./utils/Departments";
import Stacks from "./utils/Stacks";

const FormFields = (states) => {
    return [
        {
            input: true,
            type: "email",
            placeholder: "Email",
            value: states.email.value,
            setValue: states.email.setter,
            id: "email",
            name: "email",
            labelText: "Email: "
        },
        {
            input: true,
            type: "password",
            placeholder: "Password",
            value: states.password.value,
            setValue: states.password.setter,
            id: "password",
            name: "password",
            labelText: "Password: "
        },
        {
            input: true,
            type: "text",
            placeholder: "Name",
            value: states.name.value,
            setValue: states.name.setter,
            id: "name",
            name: "name",
            labelText: "Name: "
        },
        {
            input: true,
            type: "text",
            placeholder: "Surname",
            value: states.surname.value,
            setValue: states.surname.setter,
            id: "surname",
            name: "surname",
            labelText: "Surname: "
        },
        {
            dropdown: true,
            values: Departments,
            value: states.department.value,
            setValue: states.department.setter,
            id: "department",
            name: "department",
            labelText: "Department: ",
        },
        {
            input: true,
            type: "number",
            placeholder: "Salary",
            value: states.salary.value,
            setValue: states.salary.setter,
            id: "salary",
            name: "salary",
            labelText: "Salary: "
        },
        {
            multiselect: true,
            values: Stacks,
            value: states.stack.value,
            setValue: states.stack.setter,
            id: "stack",
            name: "stack",
            labelText: "Stack: "
        }
    ]
}

export default FormFields