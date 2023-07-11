import Modal from "../../../modal/Modal";
import { useState, useEffect } from "react";
import FormFields from "./utils/FormFields";
import FormField from "./utils/FormField";
import ProjectStatus from "./utils/ProjectStatus";
import { formatData as formatProjectData } from "./modules/saga";
import {dateMapper} from "./utils/dateMapper";

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
    setId(projectData.key)
    setName(projectData.name)
    setDescription(projectData.description)
    if (projectData.duration) {
      setDuration((prev) => ({
        from: dateMapper(projectData.duration.split(" - ")[0]),
        to: dateMapper(projectData.duration.split(" - ")[1])
      }))
    }
    setDevelopers(projectData.developers)
    setHourlyRate(projectData.hourlyRate)
    setProjectValue(projectData.projectValue)
    setProjectStatus(projectData.status)
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
    developerOptions: developerOptions || [],
    submitButton: {
      onClick: handleSubmit,
    },
  });

  const items = formFields.map(i => {
    return i.type !== "button"
        ? <FormField item={i} key={i.id}/>
        : FormField({
          item: i,
          k: i.id
        });
  })

  const closeModal = () => {
    handleClose();
  };

  return (
    <>
      <Modal header="Edit Project" handleClose={closeModal} isOpen={isOpen} items={items} />
    </>
  );
};

export default EditProjectsModal;