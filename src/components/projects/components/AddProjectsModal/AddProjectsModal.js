import Modal from "../../../modal/Modal";
import { useState, useEffect } from "react";
import FormFields from "./utils/FormFields";
import FormField from "./utils/FormField";
import ProjectStatus from "./utils/ProjectStatus";
import { formatData as formatProjectData } from "./modules/saga";
import { Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";

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

  const removeDeveloper = (developerId) => {
    const updatedDevelopers = developers.filter((developer) => developer !== developerId);
    setDevelopers(updatedDevelopers);
  };

  const RemoveDeveloperButton = ({ developerId, onClick }) => (
    <Button
      className="button-x"
      type="text"
      size="small"
      icon={<CloseOutlined />}
      onClick={onClick(developerId)}
    />
  );

  const renderSelectedDevelopers = () => {
    return developers.map((developer) => {
      const fullName = `${developer.firstName} ${developer.lastName}`;
      return (
        <div key={developer._id} className="selected-developer">
          <span>{fullName}</span>
          <RemoveDeveloperButton developerId={developer._id} onClick={removeDeveloper} />
        </div>
      );
    });
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
      developerOptions,
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

  const items = formFields.map((i) => {
    return i.type !== "button" ? (
      <FormField item={i} key={i.id} />
    ) : (
      FormField({
        item: i,
        k: i.id,
      })
    );
  });

  const resetStateAndCloseModal = () => {
    resetState();
    handleClose();
  };

  return (
    <>
      <Modal header="Add New Project" handleClose={resetStateAndCloseModal} isOpen={isOpen} items={items}>
        <div className="selected-developers-container">{renderSelectedDevelopers()}</div>
      </Modal>
    </>
  );
};

export default AddProjectsModal;
