import Select, { components } from "react-select";
import { useState } from "react";
import "./FormField.scss";
import SelectedItemsList from "../projects/components/AddProjectsModal/utils/SelectedItemsList";

const MultiSelect = ({ item }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const onChange = (selected) => {
    item.setValue(selected);
  };

  const value = Array.isArray(item.value)
    ? item.value.map((i) => item.options.find((o) => o.value === i.value))
    : [];

  const CheckboxOption = (props) => {
    const handleOptionClick = () => {
      const selected = props.selectProps.value || [];
      const option = props.data;
      const isOptionSelected = selected.some(
        (selectedOption) => selectedOption.value === option.value
      );
      if (isOptionSelected) {
        const updatedSelection = selected.filter(
          (selectedOption) => selectedOption.value !== option.value
        );
        props.selectProps.onChange(updatedSelection);
      } else {
        const updatedSelection = [...selected, option];
        props.selectProps.onChange(updatedSelection);
      }
      setMenuOpen(true);
    };

    return (
      <components.Option {...props}>
        <div className="checkbox-option">
          <label>
            <input
              type="checkbox"
              checked={props.isSelected}
              onChange={() => null}
            />
            <span className="option-label" onMouseDown={handleOptionClick}>
              {props.label}
            </span>
          </label>
        </div>
      </components.Option>
    );
  };

  const availableOptions = Array.isArray(item.value)
    ? item.options.filter(
        (option) => !item.value.some((value) => value === option.value)
      )
    : item.options;

  return (
    <div className="form-field">
      <label htmlFor={item.id}>{item.labelText}</label>
      <Select
        className="input-field-multiselect"
        id={item.id}
        name={item.name}
        onChange={onChange}
        value={value}
        options={availableOptions}
        components={{ Option: CheckboxOption }}
        menuIsOpen={isMenuOpen}
        onMenuClose={() => setMenuOpen(false)}
        onMenuOpen={() => setMenuOpen(true)}
        closeMenuOnSelect={false}
        placeholder={item.placeholder}
      />

      {item.value.length > 0 && (
        <SelectedItemsList
          selectedItems={item.value}
          onRemove={(selectedItem) =>
            item.setValue((prevValue) =>
              prevValue.filter((item) => item.value !== selectedItem.value)
            )
          }
          options={item.options}
        />
      )}
    </div>
  );
};

export default MultiSelect;