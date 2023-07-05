import "../../formFields/FormField.scss"
import Input from "../../formFields/Input";
import Select from "../../formFields/Select";
import MultiSelect from "../../formFields/MultiSelect";
import Button from "../../formFields/Button";

const FormField = ({ item }) => {
    switch(item.type) {
        case "input":
            return <Input item={item} />
        case "select":
            return <Select item={item} />
        case "multiselect":
            return <MultiSelect item={item} />
        case "button":
            return <Button item={item} />
        default:
            return "Specified modal item not implemented"
    }
}
