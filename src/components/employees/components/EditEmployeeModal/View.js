import Modal from "../../../modal/Modal";
import {useEffect, useState} from "react";
import FormFields from "./utils/FormFields";
import Departments from "./utils/Departments";
import FormField from "./utils/FormField";
import Stacks from "./utils/Stacks";
import Currencies from "./utils/Currencies";
import formButtons from "./utils/FormButtons";
import FormButtons from "./utils/FormButtons";

const View = ({handleClose, isOpen, isLoading, actions, employeeData}) => {
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [image, setImage] = useState(undefined)
    const [department, setDepartment] = useState(Departments[0])
    const [salary, setSalary] = useState("")
    const [currency, setCurrency] = useState(Currencies[0])
    const [stack, setStack] = useState(Stacks[0])

    useEffect(() => {
        setId(employeeData.key)
        setName(employeeData.name)
        setSurname(employeeData.surname)
        setDepartment(employeeData.department)
        setSalary(employeeData.salary)
        setStack(employeeData.stack)
    }, [employeeData])

    const handleSubmit = () => {
        actions.sendEditUserData({
            id,
            firstName: name,
            lastName: surname,
            department,
            monthlySalary: salary,
            techStack: stack
        })
    }


    const closeModal = () => {
        handleClose()
    }

    const formFields = FormFields({
        isLoading,
        id: {
            state: {
                value: id
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
        image: {
            state: {
                value: image,
                setter: setImage
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
        currency: {
            state: {
                value: currency,
                setter: setCurrency
            }
        },
        stack: {
            state: {
                value: stack,
                setter: setStack
            }
        }
    })

    const formButtons = FormButtons({
        isLoading,
        submitButton: {
            onClick: handleSubmit
        },
        cancelButton: {
            onClick: closeModal
        }
    })

    const formItems = formFields.map(i => <FormField item={i} key={i.id}/>)
    const buttonItems = formButtons.map(i => <FormField item={i} key={i.id}/>)


    return (
        <>
            <Modal header={"Edit Employee"} handleClose={closeModal} isOpen={isOpen} formItems={formItems} buttonItems={buttonItems} />
        </>
    )
}

export default View