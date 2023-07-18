const FormButtons = (componentData) => {
    return [
        {
            type: "button",
            buttonType: "button",
            buttonStyle: "secondary",
            id: "cancel",
            text: componentData.isLoading === false
                ? "Cancel"
                : "...",
            isLoading: componentData.isLoading,
            onClick: componentData.cancelButton.onClick
        },
        {
            type: "button",
            buttonType: "submit",
            buttonStyle: "primary",
            id: "submit",
            text: componentData.isLoading === false
                ? "Edit Employee"
                : "...",
            isLoading: componentData.isLoading,
            onClick: componentData.submitButton.onClick
        }
    ]
}

export default FormButtons
