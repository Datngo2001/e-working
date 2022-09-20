import React from 'react';
import { Route, Routes } from 'react-router';
import ProjectList from '../pages/ProjectListPage/ProjectListPage';

function ConsoleRoute() {
  return (
    <>
      <Routes>
        <Route path="/console">
          <Route path="" element={<ProjectList />} />
        </Route>
      </Routes>
    </>
  );
}

export default ConsoleRoute;
