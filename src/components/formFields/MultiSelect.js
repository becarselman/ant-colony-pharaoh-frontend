import { Select, Checkbox } from "antd";
import { CloseOutlined } from "@ant-design/icons";

const { Option } = Select;

const MultiSelect = ({ item }) => {
    const onChange = (selected) => {
        item.setValue(selected);
    };

    const onRemoveDeveloper = (developerId) => {
        const updatedDevelopers = Array.isArray(item.value)
            ? item.value.filter((developer) => developer !== developerId)
            : [];
        item.setValue(updatedDevelopers);
    };

    const SelectedDeveloper = ({ developer }) => (
        <div key={developer.value} className="selected-developer">
            {developer.label}
            <div>
                <CloseOutlined onClick={() => onRemoveDeveloper(developer.value)} />
            </div>
        </div>
    );

    const selectedDevelopers = Array.isArray(item.value)
        ? item.options
            .filter(option => item.value.includes(option.value))
            .map(developer => (
                <SelectedDeveloper key={developer.value} developer={developer} />
            ))
        : [];

    const optionElements = item.options?.map((option) => {
        const isChecked = Array.isArray(item.value) ? item.value.includes(option.value) : false;
        return (
            <Option key={option.value} value={option.value} label={option.label}>
                <div className="developer-option">
                    <Checkbox onChange={(e) => e.stopPropagation()} checked={isChecked} />
                    <div className="developer-name">{option.label}</div>
                </div>
            </Option>
        );
    });

    const selectProps = {
        className: "input-field-multiselect",
        mode: "multiple",
        id: item.id,
        name: item.name,
        onChange: onChange,
        value: Array.isArray(item.value) ? item.value : undefined,
        placeholder: item.placeholder,
        showSearch: true,
        filterOption: (input, option) => option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0,
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