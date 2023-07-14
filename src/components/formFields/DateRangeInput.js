import React from "react";
import DatePicker from "antd/lib/date-picker";
import "./FormField.scss";
import moment from "moment";

const DateRangeInput = ({ item }) => {
  const handleDateFromChange = (date) => {
    item.setValueFrom(date);
  };

  const handleDateToChange = (date) => {
    item.setValueTo(date);
  };

  const isDateSelected = item.valueFrom && item.valueTo;
  const formattedValueFrom = item.valueFrom ? moment(item.valueFrom, ["DD/MM/YYYY", "YYYY-MM-DD"]) : null;
  const formattedValueTo = item.valueTo ? moment(item.valueTo, ["DD/MM/YYYY", "YYYY-MM-DD"]) : null;
  
  

  return (
    <div className="form-field">
      <label htmlFor={item.id}>{item.labelText}</label>
      <div className="date-range-wrapper">
        <DatePicker
          className="date-range-input"
          id={item.id}
          name={item.name}
          defaultValue={formattedValueFrom}
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
          defaultValue={formattedValueTo}
          onChange={handleDateToChange}
          placeholder={item.placeholderTo}
          format="DD/MM/YYYY"
        />
      </div>
    </div>
  );
};

export default DateRangeInput;
