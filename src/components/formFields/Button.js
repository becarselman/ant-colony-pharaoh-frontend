const Button = ({ item }) => {
  return !item.isLoading
    ? <button id={item.id} type={item.buttonType} onClick={item.onClick}>{item.text}</button>
    : <button id={item.id} type={item.buttonType}>{item.text}</button>
}

export default Button