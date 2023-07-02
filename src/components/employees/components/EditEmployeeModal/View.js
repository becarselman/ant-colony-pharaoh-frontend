import Modal from "../../../modal/Modal";
import {useEffect, useState} from "react";
import FormFields from "./utils/FormFields";
import Departments from "./utils/Departments";
import FormField from "./utils/FormField";
import Stacks from "./utils/Stacks";
import Currencies from "./utils/Currencies";

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
            _id: id,
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
        },
        submitButton: {
            onClick: handleSubmit
        },
        cancelButton: {
            onClick: closeModal
        }
    })

    const items = formFields.map(i => {
        return i.type !== "button"
            ? <FormField item={i} key={i.id}/>
            : FormField({
            item: i,
            k: i.id
        });
    })


    return (
        <>
            <Modal header={"Edit Employee"} handleClose={closeModal} isOpen={isOpen} items={items}/>
        </>
    )
}

export default View