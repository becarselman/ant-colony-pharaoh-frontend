import Modal from "../../../modal/Modal";
import { useState, useEffect } from "react";
import FormFields from "./utils/FormFields";
import FormField from "./utils/FormField";
import ProjectStatus from "./utils/ProjectStatus";
import { formatData as formatProjectData } from "./modules/saga";
import {dateMapper} from "./utils/dateMapper";
import ButtonFields from "./utils/ButtonFields";

const EditProjectsModal = ({ handleClose, isOpen, isLoading, actions, employees, projectData }) => {
  const [id, setId] = useState("")
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
    setId(projectData._id)
    setName(projectData.name)
    setDescription(projectData.description)
    if (projectData.duration) {
      setDuration((prev) => ({
        from: projectData.duration.from,
        to: projectData.duration.to
      }))
    }
    // setDevelopers(projectData.developers.includes(",") ? projectData.developers.split(", ") : projectData.developers.length === 0 ? [] : [projectData.developers]);
    setDevelopers(projectData.developers.map(developer => developer._id))
    setHourlyRate(projectData.hourlyRate)
    setProjectValue(projectData.projectValue)
    setProjectStatus(projectData.projectStatus)
  }, [projectData])

  useEffect(() => {
    fetchDevelopers();
  }, []);

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
      id,
      name,
      description,
      duration,
      developers,
      hourlyRate,
      projectValue,
      projectStatus,
      developerOptions
    );
    actions.editProjectRequest(projectData);
  };

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
    developerOptions: developerOptions || []
  });

  const buttonFields = ButtonFields({
    isLoading,
    submitButton: {
      onClick: handleSubmit,
    },
  });

  const formItems = formFields.map((i) => <FormField item={i} key={i.id} /> );

  const buttonItems = buttonFields.map((i) => <FormField item={i} key={i.id} /> );

  const closeModal = () => {
    handleClose();
  };

  return (
    <>
      <Modal header="Edit Project" handleClose={closeModal} isOpen={isOpen} formItems={formItems} buttonItems={buttonItems} />
    </>
  );
};

export default EditProjectsModal;