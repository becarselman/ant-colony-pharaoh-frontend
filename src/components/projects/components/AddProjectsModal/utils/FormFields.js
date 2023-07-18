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
      type: "date-range",
      placeholderFrom: "Start date",
      valueFrom: componentData.durationFrom.state.value,
      setValueFrom: componentData.durationFrom.state.setter,
      placeholderTo: "End date",
      valueTo: componentData.durationTo.state.value,
      setValueTo: componentData.durationTo.state.setter,
      id: "duration",
      name: "duration",
      labelText: "Duration",
    },    
    {
      type: "multiselect",
      values: componentData.developers.state.value,
      value: componentData.developers.state.value,
      setValue: componentData.developers.state.setter,
      placeholder: "Select team members working on this project",
      id: "developers",
      name: "developers",
      labelText: "Assign developers",
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
    }
  ];
};

export default FormFields;
