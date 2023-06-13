import Select from "react-select";

const MultiSelect = ({ item }) => {
  const onChange = (selected) => {
    item.setValue(selected.map(a => a.value))
  }

  const value = []

  item.value.forEach(i => {
    value.push(
      item.values.find(o => o.value === i)
    )
  })

  return (
    <div className="form-field">
      <label htmlFor={item.id}>
        {item.labelText}
      </label>
      <Select className="input-field" isMulti id={item.id} name={item.name} onChange={onChange} value={value}
              options={item.values}/>
    </div>
  )
}

export default MultiSelect