import { Button, TextField } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CREATE_PROJECT_REQUEST } from '../../../../store/reducer/project/projectActionTypes';
import styles from './createProjectForm.module.css';

function CreateProjectForm({ onProjectCreated }) {
  const { loading, error } = useSelector((state) => state.project);
  const dispatch = useDispatch();
  const isSubmited = useRef(false);
  const [inputs, setInputs] = useState({
    name: '',
    admins: [],
    members: []
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    isSubmited.current = true;
    dispatch({
      type: CREATE_PROJECT_REQUEST,
      payload: inputs
    });
  };

  const isSuccess = () => {
    console.log(isSubmited.current);
    console.log(error);
    if (isSubmited.current && error && error.action !== CREATE_PROJECT_REQUEST) {
      return false;
    }
    return true;
  };

  useEffect(() => {
    if (isSuccess) {
      onProjectCreated();
    }
  }, [error]);

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2}>
        <TextField
          name="name"
          type="text"
          value={inputs.name || ''}
          label="Your project name"
          variant="outlined"
          onChange={handleChange}></TextField>
        <div className={styles['submit-container']}>
          <Button type="submit" variant="contained" disabled={loading}>
            Create
          </Button>
        </div>
      </Stack>
    </form>
  );
}

export default CreateProjectForm;
