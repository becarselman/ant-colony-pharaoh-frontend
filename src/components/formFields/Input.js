const Input = ({ item }) => {
  const onChange = e => {
    item.setValue(e.target.value)
  }

  return (
    <div className="form-field">
      <label htmlFor={item.id}>
        {item.labelText}
      </label>
      <input className="input-field" type={item.inputType} placeholder={item.placeholder}
             id={item.id} name={item.name} value={item.value}
             onChange={onChange} hidden={item.hidden} />
    </div>
  )
}

export default Input