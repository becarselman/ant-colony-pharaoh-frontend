import Modal from "../modal/Modal";
import {useState} from "react";
import FormFields from "./utils/FormFields";
import Departments from "./utils/Departments";
import FormField from "./utils/FormField";
import Stacks from "./utils/Stacks";
import Currencies from "./utils/Currencies";

//TODO:
/*
when employees table is implemented
and when admin clicks on user row
find a way to forward data from table row to this component
and set initial states to that data
 */
const AddEmployeeModal = ({handleClose, isOpen, isLoading, actions}) => {
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [image, setImage] = useState(undefined)
    const [department, setDepartment] = useState(Departments[0])
    const [salary, setSalary] = useState("")
    const [currency, setCurrency] = useState(Currencies[0])
    const [stack, setStack] = useState(Stacks[0])

    const resetState = () => {
        setName("")
        setSurname("")
        setImage(undefined)
        setDepartment(Departments[0])
        setSalary("")
        setCurrency(Currencies[0])
        setStack(Stacks[0])
    }

    const handleSubmit = () => {
        actions.sendUserData({
            name,
            surname,
            department,
            salary,
            stack
        })
    }


    const resetStateAndCloseModal = () => {
        resetState()
        handleClose()
    }

    const formFields = FormFields({
        isLoading,
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
            onClick: resetStateAndCloseModal
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
            <Modal header={"Add New Employee"} handleClose={resetStateAndCloseModal} isOpen={isOpen} items={items}/>
        </>
    )
}

export default AddEmployeeModal