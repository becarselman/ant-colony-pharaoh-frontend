import Departments from "./Departments";
import Stacks from "./Stacks";
import Currencies from "./Currencies";

const FormFields = (componentData) => {
    return [
        {
            type: "input",
            inputType: "text",
            placeholder: "First Name",
            value: componentData.name.state.value,
            setValue: componentData.name.state.setter,
            id: "name",
            name: "name",
            labelText: "First Name"
        },
        {
            type: "input",
            inputType: "text",
            placeholder: "Last Name",
            value: componentData.surname.state.value,
            setValue: componentData.surname.state.setter,
            id: "surname",
            name: "surname",
            labelText: "Last Name"
        },
        {
            type: "file",
            inputType: "file",
            placeholder: "Profile Image",
            value: componentData.image.state.value,
            setValue: componentData.image.state.setter,
            id: "image",
            name: "image",
            labelText: "Profile Image"
        },
        {
            type: "select",
            values: Departments,
            value: componentData.department.state.value,
            setValue: componentData.department.state.setter,
            id: "department",
            name: "department",
            labelText: "Department",
        },
        {
            type: "inputWithSelect",
            id: "salary-with-currency",
            labelText: "Salary",
            input: {
                inputType: "number",
                placeholder: "Enter the amount",
                value: componentData.salary.state.value,
                setValue: componentData.salary.state.setter,
                id: "salary",
                name: "salary",
                labelText: "Salary"
            },
            select: {
                values: Currencies,
                value: componentData.currency.state.value,
                setValue: componentData.currency.state.setter,
                id: "currency",
                name: "currency",
                labelText: "Currency"
            }
        },
        {
            type: "select",
            values: Stacks,
            value: componentData.stack.state.value,
            setValue: componentData.stack.state.setter,
            id: "stack",
            name: "stack",
            labelText: "Tech Stack"
        }
    ]
}

export default FormFields