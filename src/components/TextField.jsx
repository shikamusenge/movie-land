import React from "react";
function TextField({
  FieldName,
  FieldType,
  eventHandler,
  fieldPlaceholder,
  handleFocus,
  handleFocusLost,
  Error,
}) {
  return (
    <div>
      <div className="grid grid-row-2 mx-2 my-5">
        <label htmlFor="psw">{FieldName}</label>
        <span className="text-red-600 text-sm justify-center h-8">{Error}</span>
        <input
          type={FieldType}
          className="border rounded-lg focus:outline-none outline-none h-10 px-4"
          placeholder={fieldPlaceholder}
          onChange={eventHandler}
          onFocus={handleFocus}
        />
      </div>
    </div>
  );
}

export default TextField;
