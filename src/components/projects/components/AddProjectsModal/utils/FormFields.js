import ProjectStatus from "./ProjectStatus";

const FormFields = (componentData) => {
  const projectStatusOptions = Object.values(ProjectStatus);

  return [
    {
      type: "input",
      inputType: "text",
      placeholder: "Name",
      value: componentData.name.state.value,
      setValue: componentData.name.state.setter,
      id: "name",
      name: "name",
      labelText: "Name",
    },
    {
      type: "input",
      inputType: "text",
      placeholder: "Description",
      value: componentData.description.state.value,
      setValue: componentData.description.state.setter,
      id: "description",
      name: "description",
      labelText: "Description",
    },
    {
      type: "input",
      inputType: "date",
      placeholder: "From",
      value: componentData.durationFrom.state.value,
      setValue: componentData.durationFrom.state.setter,
      id: "from",
      name: "from",
      labelText: "Duration",
    },
    {
      type: "input",
      inputType: "date",
      placeholder: "To",
      value: componentData.durationTo.state.value,
      setValue: componentData.durationTo.state.setter,
      id: "to",
      name: "to",
    },
    {
      type: "multiselect",
      values: componentData.developers.state.value,
      value: componentData.developers.state.value,
      setValue: componentData.developers.state.setter,
      id: "developers",
      name: "developers",
      labelText: "Assign developers",
      placeholder: "Select team members working on this project",
      options: componentData.developerOptions, 
    },
    {
      type: "input",
      inputType: "number",
      placeholder: "Hourly Rate",
      value: componentData.hourlyRate.state.value,
      setValue: componentData.hourlyRate.state.setter,
      id: "hourlyRate",
      name: "hourlyRate",
      labelText: "Hourly Rate",
    },
    {
      type: "input",
      inputType: "number",
      placeholder: "Project Value",
      value: componentData.projectValue.state.value,
      setValue: componentData.projectValue.state.setter,
      id: "projectValue",
      name: "projectValue",
      labelText: "Project Value (BAM) ",
    },
    {
      type: "select",
      values: projectStatusOptions,
      value: componentData.projectStatus.state.value,
      setValue: componentData.projectStatus.state.setter,
      id: "projectStatus",
      name: "projectStatus",
      labelText: "Project Status",
    },
    {
      type: "button",
      buttonType: "submit",
      buttonStyle: "primary",
      id: "submit",
      text: componentData.isLoading === false ? "Add Project" : "...",
      isLoading: componentData.isLoading,
      onClick: componentData.submitButton.onClick,
      
    },
  ];
};

export default FormFields;
