import "./modalItem.scss"

const ModalItem = (props) => {
  if (props.item.input === true) {
    return (
      <div className = "form-field">
        <label >
          { props.item.labelText }
          <input className="input" type = { props.item.type } placeholder = { props.item.placeholder } id = { props.item.id } name = { props.item.name } defaultValue = { props.item.value } />
        </label>
      </div>
    )
  }
  else if (props.item.dropdown === true) {
    const dropdownOptions = props.item.value.map(ddo => {
      const value = ddo.toLowerCase()
      return (
        <option value = { value } key={ value } >{ ddo }</option>
      )
    })

    return (
      <div className = "form-field">
        <label>
          { props.item.labelText }
          <select className="input" id = { props.item.id } name = { props.item.name } >
            { dropdownOptions }
          </select>
        </label>
      </div>
    )
  }
}

export default ModalItem