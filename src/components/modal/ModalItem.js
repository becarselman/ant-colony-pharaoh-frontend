import "./modalItem.scss"
import Select from "react-select";

const ModalItem = (props) => {
    if (props.item.input === true) {
        return (
            <div className="form-field">
                <label htmlFor={props.item.id}>
                    {props.item.labelText}
                </label>
                <input className="input" type={props.item.type} placeholder={props.item.placeholder}
                       id={props.item.id} name={props.item.name} value={props.item.value}
                       onChange={e => props.item.setValue(e.target.value)}/>
            </div>
        )
    } else if (props.item.dropdown === true) {
        const dropdownOptions = props.item.values.map(ddo => {
            const value = ddo.toLowerCase()
            return (
                <option value={value} key={value}>{ddo}</option>
            )
        })

        return (
            <div className="form-field">
                <label htmlFor={props.item.id}>
                    {props.item.labelText}
                </label>
                <select className="input" id={props.item.id} name={props.item.name} value={props.item.value}
                        onChange={e => props.item.setValue(e.target.value)}>
                    {dropdownOptions}
                </select>
            </div>
        )
    } else if (props.item.multiselect === true) {
        const onChange = (selected) => {
            props.item.setValue(selected.map(a => a.value))
        }

        const value = []

        props.item.value.forEach(i => {
            value.push(
                props.item.values.find(o => o.value === i)
            )
        })

        return (
            <div className="form-field">
                <label htmlFor={props.item.id}>
                    {props.item.labelText}
                </label>
                <Select className="input" isMulti id={props.item.id} name={props.item.name} onChange={onChange} value={value}
                        options={props.item.values}/>
            </div>
        )
    }
}

export default ModalItem