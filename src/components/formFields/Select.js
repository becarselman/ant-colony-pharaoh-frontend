const Select = ({ item }) => {
  const dropdownOptions = item.values.map(ddo => (
    <option value={ddo} key={ddo}>{ddo}</option>
  ));

  const onChange = e => {
    item.setValue(e.target.value);
  };

  return (
    <div className="form-field">
      <label htmlFor={item.id}>
        {item.labelText}
      </label>
      <select className="input-field" id={item.id} name={item.name} value={item.value}
              onChange={onChange}>
        {dropdownOptions}
      </select>
    </div>
  );
};

export default Select;
