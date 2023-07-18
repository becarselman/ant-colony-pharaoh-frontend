import Modal from "../../../modal/Modal";
import {useState} from "react";
import FormFields from "./utils/FormFields";
import Departments from "./utils/Departments";
import FormField from "./utils/FormField";
import Stacks from "./utils/Stacks";
import Currencies from "./utils/Currencies";
import FormButtons from "./utils/FormButtons";

const View = ({handleClose, isOpen, isLoading, actions}) => {
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
            firstName: name,
            lastName: surname,
            department,
            monthlySalary: salary,
            techStack: stack
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
        }
    })

    const formButtons = FormButtons({
        isLoading,
        submitButton: {
            onClick: handleSubmit
        },
        cancelButton: {
            onClick: resetStateAndCloseModal
        }
    })

    const formItems = formFields.map(i => <FormField item={i} key={i.id}/> )

    const buttonItems = formButtons.map(i => <FormField item={i} key={i.id}/> )


    return (
        <>
            <Modal header={"Add New Employee"} handleClose={resetStateAndCloseModal} isOpen={isOpen} formItems={formItems} buttonItems={buttonItems}/>
        </>
    )
}

export default View