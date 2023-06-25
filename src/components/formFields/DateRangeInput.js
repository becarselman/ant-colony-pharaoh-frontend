import React from "react";
import DatePicker from "antd/lib/date-picker";
import "./FormField.scss";

const DateRangeInput = ({ item }) => {
  const handleDateFromChange = (date) => {
    item.setValueFrom(date);
  };

  const handleDateToChange = (date) => {
    item.setValueTo(date);
  };

  const isDateSelected = item.valueFrom && item.valueTo;

  return (
    <div className="form-field">
      <label htmlFor={item.id}>{item.labelText}</label>
      <div className="date-range-wrapper">
        <DatePicker
          className="date-range-input"
          id={item.id}
          name={item.name}
          value={item.valueFrom}
          onChange={handleDateFromChange}
          placeholder={item.placeholderFrom}
          format="DD/MM/YYYY"
        />
        {isDateSelected ? (
          <span className="date-range-separator-to">to</span>
        ) : (
          <span className="date-range-separator">-</span>
        )}
        <DatePicker
          className="date-range-input"
          id={item.id}
          name={item.name}
          value={item.valueTo}
          onChange={handleDateToChange}
          placeholder={item.placeholderTo}
          format="DD/MM/YYYY"
        />
      </div>
    </div>
  );
};

export default DateRangeInput;
