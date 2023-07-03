import { Select, Checkbox } from "antd";
import { CloseOutlined} from "@ant-design/icons";
import { useState } from "react";

const { Option } = Select;

const MultiSelect = ({ item }) => {
  const [employmentTypes, setEmploymentTypes] = useState({});

  const onChange = (selected) => {
    const updatedDevelopers = [...item.value, ...selected];
    item.setValue(updatedDevelopers);
    setEmploymentTypes((prevEmploymentTypes) => {
      const updatedEmploymentTypes = { ...prevEmploymentTypes };
      selected.forEach((developerId) => {
        if (!updatedEmploymentTypes[developerId]) {
          updatedEmploymentTypes[developerId] = "full-time";
        }
      });
      return updatedEmploymentTypes;
    });
  };

  const onEmploymentTypeChange = (developerId, employmentType) => {
    setEmploymentTypes((prevEmploymentTypes) => ({
      ...prevEmploymentTypes,
      [developerId]: employmentType,
    }));
  };

  const onRemoveDeveloper = (developerId) => {
    const updatedDevelopers = item.value.filter(
      (developer) => developer !== developerId
    );
    const updatedEmploymentTypes = { ...employmentTypes };
    delete updatedEmploymentTypes[developerId];
    item.setValue(updatedDevelopers);
    setEmploymentTypes(updatedEmploymentTypes);
  };

  const optionElements = item.options.map((option) => (
    <Option key={option.value} value={option.value}>
      <div className="developer-option">
        <Checkbox
          onChange={(e) => e.stopPropagation()}
          checked={item.value.includes(option.value)}
        />
        <span className="option-value">{option.label}</span>
      </div>
    </Option>
  ));

  const employmentTypeOptionElements = (
    <>
      <Option value="full-time">Full Time</Option>
      <Option value="part-time">Part Time</Option>
    </>
  );

  const selectProps = {
    className: "input-field-multiselect",
    mode: "multiple",
    id: item.id,
    name: item.name,
    onChange: onChange,
    value: [],
    placeholder: item.placeholder,
  };

  const employmentTypeSelectProps = (developer) => {
    return {
      className: "employment-type-select",
      value: employmentTypes[developer.value] || "full-time",
      onChange: (value) => onEmploymentTypeChange(developer.value, value),
    };
  };

  return (
    <div className="form-field">
      <label htmlFor={item.id}>
        {item.labelText}
      </label>
      <Select {...selectProps}>
        {optionElements}
      </Select>
      <div className="selected-developers">
        {item.value.map((developerId) => {
          const developer = item.options.find(
            (option) => option.value === developerId
          );
          return (
            <div key={developer.value} className="selected-developer">
              {developer.label}
              <div>
                <Select {...employmentTypeSelectProps(developer)}>
                  {employmentTypeOptionElements}
                </Select>
                <CloseOutlined
                  onClick={() => onRemoveDeveloper(developer.value)}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MultiSelect;
