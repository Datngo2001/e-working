import React from 'react';
import { Route, Routes } from 'react-router';
import ProjectListPage from '../pages/ProjectListPage/ProjectListPage';
import ProjectStagePage from '../pages/ProjectStagePage/ProjectStagePage';
import ProjectBoardPage from '../pages/ProjectBoardPage/ProjectBoardPage';

function ConsoleRoute() {
  return (
    <>
      <Routes>
        <Route path="/console" element={<ProjectListPage />} />
        <Route path="/console/project/:id/stage" element={<ProjectStagePage />} />
        <Route path="/console/project/:id/board" element={<ProjectBoardPage />} />
      </Routes>
    </>
  );
}

export default ConsoleRoute;
