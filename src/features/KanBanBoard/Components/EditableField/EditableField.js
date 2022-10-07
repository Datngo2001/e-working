import { Button, IconButton, TextField } from "@mui/material";
import React, { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';

import "./Editable.css";

function EditableField(props) {
  const [isEditable, setIsEditable] = useState(false);
  const [inputText, setInputText] = useState(props.defaultValue || "");

  const submission = (e) => {
    e.preventDefault();
    if (inputText && props.onSubmit) {
      setInputText("");
      props.onSubmit(inputText);
    }
    setIsEditable(false);
  };

  return (
    <div className="editable">
      {isEditable ? (
        <form
          className={`editable_edit ${props.editClass ? props.editClass : ""}`}
          onSubmit={submission}
        >
          <TextField
            type="text"
            value={inputText}
            placeholder={props.placeholder || props.text}
            onChange={(event) => setInputText(event.target.value)}
            autoFocus
          />
          <div className="editable_edit_footer">
            <Button variant="outlined" type="submit">{props.buttonText || "Add"}</Button>
            <IconButton onClick={() => setIsEditable(false)} >
              <CloseIcon />
            </IconButton>
          </div>
        </form>
      ) : (
        <p
          className={`editable_display ${props.displayClass ? props.displayClass : ""
            }`}
          onClick={() => setIsEditable(true)}
        >
          {props.text}
        </p>
      )}
    </div>
  );
}

export default EditableField;
