import Modal from "../modal/Modal";
import {useState} from "react";
import FormFields from "./FormFields";
import Departments from "./Departments";

const AddEmployeeModal = ({handleClose, isOpen}) => {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [department, setDepartment] = useState(Departments[0])
    const [salary, setSalary] = useState(0)
    const [stack, setStack] = useState([])

    const resetState = () => {
        setEmail("")
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

    return (
        <>
            <Modal handleClose={() => {
                resetState()
                handleClose()
            }} isOpen={isOpen} items={formFields} />
        </>
    )
}

export default AddEmployeeModal