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

  const optionElements = item.options.map((option) => {
    const isChecked = item.value.includes(option.value);
    return (
      <Option key={option.value} value={option.value} label={option.label}>
        <div className="developer-option">
          <Checkbox onChange={(e) => e.stopPropagation()} checked={isChecked} />
          <div className="developer-name">{option.label}</div>
        </div>
      </Option>
    );
  });

  const SelectedDeveloper = ({ developer }) => (
    <div key={developer.value} className="selected-developer">
      {developer.label}
      <div>
        <EmploymentTypeSelect
          value={employmentTypes[developer.value] || "full-time"}
          onChange={(value) => onEmploymentTypeChange(developer.value, value)}
        />
        <CloseOutlined onClick={() => onRemoveDeveloper(developer.value)} />
      </div>
    </div>
  );

  const EmploymentTypeSelect = ({ value, onChange }) => (
    <Select size={"small"} className="employment-type-select" value={value} onChange={onChange}>
      <Option value="full-time">Full Time</Option>
      <Option value="part-time">Part Time</Option>
    </Select>
  );

  const selectedDevelopers = item.value.map((developerId) => {
    const developer = item.options.find((option) => option.value === developerId);
    return <SelectedDeveloper key={developer.value} developer={developer} />;
  });

  const selectProps = {
    className: "input-field-multiselect",
    mode: "multiple",
    id: item.id,
    name: item.name,
    onChange: onChange,
    value: item.value,
    placeholder: item.placeholder,
    showSearch: true,
    filterOption: (input, option) =>
      option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0,
  };

  return (
    <div className="form-field">
      <label htmlFor={item.id}>{item.labelText}</label>
      <Select {...selectProps}>{optionElements}</Select>
      <div className="selected-developers">{selectedDevelopers}</div>
    </div>
  );
};

export default MultiSelect;
