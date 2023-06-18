import "../../formFields/FormField.scss"
import Input from "../../formFields/Input";
import Select from "../../formFields/Select";
import MultiSelect from "../../formFields/MultiSelect";
import Button from "../../formFields/Button";
import Upload from "../../formFields/Upload";
import InputWithSelect from "../../formFields/InputWithSelect";

const FormField = ({ item, k }) => {
    switch(item.type) {
        case "input":
            return <Input item={item} />
        case "select":
            return <Select item={item} />
        case "multiselect":
            return <MultiSelect item={item} />
        case "button":
            //Button won't be wrapped in <FormField>
            //so I need to explicitly provide key for him
            //reason? when displaying modal, I want to separate buttons from form fields
            //not a very clean solution, but too late for full refactor
            return <Button item={item} key={k} />
        case "file":
            return <Upload item={item} />
        case "inputWithSelect":
            return <InputWithSelect item={item} />
        default:
            return "Specified modal item not implemented"
    }
}

export default FormField