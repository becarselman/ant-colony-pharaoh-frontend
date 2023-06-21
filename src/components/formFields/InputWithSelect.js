const InputWithSelect = ({ item }) => {
    const onChangeInput = e => {
        item.input.setValue(e.target.value)
    }

    const dropdownOptions = item.select.values.map(ddo => {
        const value = ddo.toLowerCase()
        return (
            <option value={value} key={value}>{ddo}</option>
        )
    })

    const onChangeSelect = e => {
        item.select.setValue(e.target.value)
    }

    return (
        <div className="form-field currency-input-wrapper">
            <label htmlFor={item.id}>
                {item.labelText}
            </label>
            <div id={item.id}>
                <input className="input-field currency-input" type={item.input.inputType} placeholder={item.input.placeholder}
                       id={item.input.id} name={item.input.name} value={item.input.value}
                       onChange={onChangeInput}/>
                <select id={item.select.id} name={item.select.name} value={item.select.value}
                        onChange={onChangeSelect}>
                    {dropdownOptions}
                </select>
            </div>
        </div>
    )
}

export default InputWithSelect