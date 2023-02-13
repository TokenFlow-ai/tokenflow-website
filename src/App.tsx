import React from "react";
import "./global.css";
import { Routes, Route, Navigate } from "react-router-dom";

type AppProps = {
  children?: React.ReactNode;
};

export const App: React.FC<AppProps> = (): JSX.Element => {
  return (
    <>
      <Routes>
        <Route path="/" element={<div>TokenFlow</div>} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </>
  );
};

App.defaultProps = {};
