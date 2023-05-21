import React, {useState} from "react";
import Modal from "../modal/modal";

const Dashboard = ({props}) => {
  const [isOpen, setIsOpen] = useState(false);

  const employees = [
    {
      input: true,
      type: "text",
      placeholder: "Name and Surname",
      value: "",
      id: "name-surname",
      name: "name-surname",
      labelText: "Name and Surname: "
    },
    {
      dropdown: true,
      value: [
        "HR",
        "QA",
        "Backend",
        "Frontend",
        "DevOps"
      ],
      id: "department",
      name: "department",
      labelText: "Department: ",
    },
  ]

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        Click to Open Modal
      </button>

      <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen} items = { employees } />
    </>
  );
}

export default Dashboard