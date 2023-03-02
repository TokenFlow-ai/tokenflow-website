import React, { Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./global.scss";
import { Routes, Route, Navigate } from "react-router-dom";
import { ErrorBoundary } from "./components/layout/ErrorBoundary";
import { Spinner } from "./components/layout/Spinner";
import { Header } from "./components/layout/Header";
import { HomePage } from "./components/HomePage";
import { Footer } from "./components/layout/Footer";

type AppProps = {
  children?: React.ReactNode;
};

export const App: React.FC<AppProps> = (): JSX.Element => {
  return (
    <>
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
          <Footer />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

App.defaultProps = {};
