import Select from "../../../../formFields/Select";
import MultiSelect from "../../../../formFields/MultiSelect";
import Button from "../../../../formFields/Button";
import DateRangeInput from "../../../../formFields/DateRangeInput";
import Input from "../../../../formFields/Input";

const FormField = ({ item }) => {
    switch(item.type) {
        case "input":
          return <Input item={item} />;
        case "select":
          return <Select item={item} />;
        case "multiselect":
          return <MultiSelect item={item} />;
        case "button":
          return <Button item={item} />;
        case "date-range":
          return <DateRangeInput item={item} />;
        default:
          return "Specified modal item not implemented";
      }
    }

    export default FormField;