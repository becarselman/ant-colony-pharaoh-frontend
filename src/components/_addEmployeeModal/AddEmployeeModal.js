import Modal from "../modal/Modal";
import {useState} from "react";
import FormFields from "./FormFields";
import Departments from "./utils/Departments";

const AddEmployeeModal = ({handleClose, isOpen, isLoading, actions}) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [department, setDepartment] = useState(Departments[0])
  const [salary, setSalary] = useState(0)
  const [stack, setStack] = useState([])

  const resetState = () => {
    setEmail("")
    setPassword("")
    setName("")
    setSurname("")
    setDepartment(Departments[0])
    setSalary(0)
    setStack([])
  }


  const formFields = FormFields({
    email: {
      value: email,
      setter: setEmail
    },
    password: {
      value: password,
      setter: setPassword
    },
    name: {
      value: name,
      setter: setName
    },
    surname: {
      value: surname,
      setter: setSurname
    },
    department: {
      value: department,
      setter: setDepartment
    },
    salary: {
      value: salary,
      setter: setSalary
    },
    stack: {
      value: stack,
      setter: setStack
    }
  })

  const handleSubmit = () => {
    actions.sendUserData({
      email,
      password,
      name,
      surname,
      department,
      salary,
      stack
    })
  }

  return (
    <>
      <Modal handleClose={() => {
        resetState()
        handleClose()
      }} isOpen={isOpen} items={formFields} handleSubmit={handleSubmit} isLoading={isLoading}  />
    </>
  )
}

export default AddEmployeeModal