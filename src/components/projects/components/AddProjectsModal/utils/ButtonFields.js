const ButtonFields = (componentData) => {
  return [
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

export default ButtonFields;
