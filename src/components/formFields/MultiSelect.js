import Select, { components } from "react-select";
import "./FormField.scss";

const MultiSelect = ({ item }) => {
  const onChange = (selected) => {
    item.setValue(selected.map((a) => a.value));
  };

  const value = item.value.map((i) =>
    item.options.find((o) => o.value === i)
  );

  const CheckboxOption = (props) => (
    <components.Option {...props}>
      <div className="checkbox-option">
        <label>
          <input type="checkbox" checked={props.isSelected} onChange={() => null} />
          <span className="option-label">{props.label}</span>
        </label>
      </div>
    </components.Option>
  );  
  
  const MultiValueRemove = (props) => (
    <components.MultiValueRemove {...props} onClick={() => null} />
  );
  

  return (
    <div className="form-field">
      <label htmlFor={item.id}>{item.labelText}</label>
      <Select
  className="input-field"
  isMulti
  id={item.id}
  name={item.name}
  onChange={onChange}
  value={value}
  options={item.options}
  placeholder={item.placeholder}
  components={{ Option: CheckboxOption, MultiValueRemove }}
/>

    </div>
  );
};

export default MultiSelect;
