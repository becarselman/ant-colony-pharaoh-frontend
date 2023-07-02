import buttonX from "../../../../../images/svg/buttonX.svg";
import Select from "react-select";

const SelectedItemsList = ({ selectedItems, onRemove, options }) => {
  return (
    <div className="selected-list">
      {selectedItems.map((selectedItem) => {
        const selectedItemData = options.find(
          (option) => option.value === selectedItem.value
        );
        return (
          <div className="selected-items" key={selectedItem.value}>
            <span className="selected-item">{selectedItemData.label}</span>
            <div className="right-side-select">
              <div className="employment-type-select">
            <Select
            options={[
           { value: "full-time", label: "Full Time" },
           { value: "part-time", label: "Part Time" },
           ]}
            isSearchable={false}
            defaultValue={{ value: "full-time", label: "Full Time" }}
            placeholder="Full time"
        />
        </div>
            <img
              src={buttonX}
              alt="Remove"
              className="remove-icon"
              onClick={() => onRemove(selectedItem)}
            />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SelectedItemsList;