import { Button, IconButton, TextField } from '@mui/material';
import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

import styles from './editableField.module.css';

function EditableField({ defaultValue, onSubmit, placeholder, text, buttonText }) {
  const [isEditable, setIsEditable] = useState(false);
  const [inputText, setInputText] = useState(defaultValue || '');

  const submission = (e) => {
    e.preventDefault();
    if (inputText && onSubmit) {
      setInputText('');
      onSubmit(inputText);
    }
    setIsEditable(false);
  };

  return (
    <div className={styles['editable']}>
      {isEditable ? (
        <form onSubmit={submission} className={styles['edit']}>
          <TextField
            type="text"
            value={inputText}
            placeholder={placeholder || text}
            onChange={(event) => setInputText(event.target.value)}
            autoFocus
          />
          <div className={styles['footer']}>
            <Button variant="outlined" type="submit">
              {buttonText || 'Add'}
            </Button>
            <IconButton onClick={() => setIsEditable(false)}>
              <CloseIcon />
            </IconButton>
          </div>
        </form>
      ) : (
        <p className={styles['display']} onClick={() => setIsEditable(true)}>
          {text}
        </p>
      )}
    </div>
  );
}

export default EditableField;
