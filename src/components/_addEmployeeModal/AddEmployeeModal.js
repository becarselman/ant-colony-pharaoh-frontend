import Modal from "../modal/Modal";
import {useState} from "react";
import FormFields from "./utils/FormFields";
import Departments from "./utils/Departments";
import FormField from "./utils/FormField";

//TODO:
/*
when employees table is implemented
and when admin clicks on user row
find a way to forward data from table row to this component
and set initial states to that data
 */
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

  const formFields = FormFields({
    isLoading,
    email: {
      state: {
        value: email,
        setter: setEmail
      }
    },
    password: {
      state: {
        value: password,
        setter: setPassword
      }
    },
    name: {
      state: {
        value: name,
        setter: setName
      }
    },
    surname: {
      state: {
        value: surname,
        setter: setSurname
      }
    },
    department: {
      state: {
        value: department,
        setter: setDepartment
      }
    },
    salary: {
      state: {
        value: salary,
        setter: setSalary
      }
    },
    stack: {
      state: {
        value: stack,
        setter: setStack
      }
    },
    submitButton: {
      onClick: handleSubmit
    }
  })

  const items = formFields.map(i => {
      return (
          <FormField item = { i } key = { i.id } />
      )
    })

  const resetStateAndCloseModal = () => {
    resetState()
    handleClose()
  }

  return (
    <>
      <Modal handleClose={resetStateAndCloseModal} isOpen={isOpen} items={items} />
    </>
  )
}

export default AddEmployeeModal