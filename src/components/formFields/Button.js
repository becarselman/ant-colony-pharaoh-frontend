const Button = ({ item }) => {
  return !item.isLoading
    ? <button data-style={item.buttonStyle} id={item.id} type={item.buttonType} onClick={item.onClick}>{item.text}</button>
    : <button data-style={item.buttonStyle} id={item.id} type={item.buttonType}>{item.text}</button>
}

export default Button