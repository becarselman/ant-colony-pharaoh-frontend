import {PlusOutlined} from "@ant-design/icons";

//https://www.pluralsight.com/guides/how-to-use-a-simple-form-submit-with-files-in-react

const Upload = ({item}) => {
    const onChange = e => {
        item.setValue(e.target.value)
    }

    return (
        <div className="form-field">
            <label>
                {item.labelText}
            </label>
            <div className="file-upload-button input-field">
                <label htmlFor={item.id} className="file-upload-label">
                    <PlusOutlined />
                    <span>Upload</span>
                </label>
            </div>
            <input className="input-field" type={item.inputType}
                   id={item.id} name={item.name} value={item.value}
                   onChange={onChange} hidden={true}/>
        </div>
    )
}

export default Upload