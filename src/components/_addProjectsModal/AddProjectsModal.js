import Modal from "../modal/Modal";
import { useState, useEffect } from "react";
import FormFields from "./utils/FormFields";
import FormField from "./utils/FormField";
import ProjectStatus from "./utils/ProjectStatus";
import { formatData as formatProjectData } from "./modules/saga";

const AddProjectsModal = ({ handleClose, isOpen, isLoading, actions, employees }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState({
    from: "",
    to: "",
  });
  const [developers, setDevelopers] = useState([]);
  const [hourlyRate, setHourlyRate] = useState(0);
  const [projectValue, setProjectValue] = useState(0);
  const [projectStatus, setProjectStatus] = useState(ProjectStatus.Active);
  const [developerOptions, setDeveloperOptions] = useState([]);

  useEffect(() => {
    fetchDevelopers();
  }, []);

  const resetState = () => {
    setName("");
    setDescription("");
    setDuration({
      from: "",
      to: "",
    });
    setDevelopers([]);
    setHourlyRate(0);
    setProjectValue(0);
    setProjectStatus(ProjectStatus.Active);
  };

  const fetchDevelopers = async () => {
    actions.fetchAllEmployeesRequest();
  };

  useEffect(() => {
    if (employees) {
      const options = employees.reduce((acc, developer) => {
        const option = {
          value: developer._id,
          label: `${developer.firstName} ${developer.lastName}`,
          employee: developer,
        };
        acc.push(option);
        return acc;
      }, []);
      setDeveloperOptions(options);
    }
  }, [employees]);

  const handleSubmit = () => {
    const projectData = formatProjectData(
      name,
      description,
      duration,
      developers,
      hourlyRate,
      projectValue,
      projectStatus,
      developerOptions
    );
    actions.createProjectRequest(projectData);
  };

  const formFields = FormFields({
    isLoading,
    name: {
      state: {
        value: name,
        setter: setName,
      },
    },
    description: {
      state: {
        value: description,
        setter: setDescription,
      },
    },
    durationFrom: {
      state: {
        value: duration.from,
        setter: (value) => setDuration((prevState) => ({ ...prevState, from: value })),
      },
    },
    durationTo: {
      state: {
        value: duration.to,
        setter: (value) => setDuration((prevState) => ({ ...prevState, to: value })),
      },
    },
    developers: {
      state: {
        value: developers,
        setter: setDevelopers,
      },
    },
    hourlyRate: {
      state: {
        value: hourlyRate,
        setter: setHourlyRate,
      },
    },
    projectValue: {
      state: {
        value: projectValue,
        setter: setProjectValue,
      },
    },
    projectStatus: {
      state: {
        value: projectStatus,
        setter: setProjectStatus,
      },
      options: Object.values(ProjectStatus),
    },
    developerOptions: developerOptions || [],
    submitButton: {
      onClick: handleSubmit,
    },
  });

  const items = formFields.map((item) => {
    return <FormField item={item} key={item.id} />;
  });

  const resetStateAndCloseModal = () => {
    resetState();
    handleClose();
  };

  return (
    <>
      <Modal handleClose={resetStateAndCloseModal} isOpen={isOpen} items={items} />
    </>
  );
};

export default AddProjectsModal;
