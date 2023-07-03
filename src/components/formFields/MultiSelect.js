import { Select, Checkbox } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { useState } from "react";

const { Option } = Select;

const MultiSelect = ({ item }) => {
  const [employmentTypes, setEmploymentTypes] = useState({});
  const onChange = (selected) => {
    item.setValue(selected);
  };

  const onEmploymentTypeChange = (developerId, employmentType) => {
    setEmploymentTypes((prevEmploymentTypes) => ({
      ...prevEmploymentTypes,
      [developerId]: employmentType,
    }));
  };

  const onRemoveDeveloper = (developerId) => {
    const updatedDevelopers = item.value.filter((developer) => developer !== developerId);
    const updatedEmploymentTypes = { ...employmentTypes };
    delete updatedEmploymentTypes[developerId];
    item.setValue(updatedDevelopers);
    setEmploymentTypes(updatedEmploymentTypes);
  };

  const optionElements = item.options.map((option) => (
    <Option key={option.value} value={option.value}>
      <div className="developer-option">
        <div className="checkbox-wrapper">
          <Checkbox
            onChange={(e) => e.stopPropagation()}
            checked={item.value.includes(option.value)}
          />
        </div>
        <div className="developer-name">{option.label}</div>
      </div>
    </Option>
  ));
  

  const selectedDevelopers = item.value.map((developerId) => {
    const developer = item.options.find((option) => option.value === developerId);
    return (
      <div key={developer.value} className="selected-developer">
        {developer.label}
        <div>
          <Select
            className="employment-type-select"
            value={employmentTypes[developer.value] || "full-time"}
            onChange={(value) => onEmploymentTypeChange(developer.value, value)}
          >
            <Option value="full-time">Full Time</Option>
            <Option value="part-time">Part Time</Option>
          </Select>
          <CloseOutlined onClick={() => onRemoveDeveloper(developer.value)} />
        </div>
      </div>
    );
  });

  const selectProps = {
    className:"input-field-multiselect",
    mode:"multiple",
    id:item.id,
    name:item.name,
    onChange:onChange,
    value:item.value,
    placeholder:item.placeholder,
  };

  return (
    <div className="form-field">
      <label htmlFor={item.id}>{item.labelText}</label>
      <Select {...selectProps}>
        {optionElements}
      </Select>
      <div className="selected-developers">{selectedDevelopers}</div>
    </div>
  );
};

export default MultiSelect;
