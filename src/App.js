import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./context/AuthContext";

import MainLayout from "./layout/MainLayout";
import Dashboard from "./components/Dashboard";
import Events from "./components/Events";
import Placements from "./components/Placements";
import Forum from "./components/Forum";
import Profile from "./components/Profile";
import About from "./components/About";
import AuthPage from "./components/AuthPage";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/auth" element={<AuthPage />} />
          <Route
            path="/*"
            element={
              <ProtectedRoute>
                <MainLayout>
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/placements" element={<Placements />} />
                    <Route path="/forum" element={<Forum />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/about" element={<About />} />
                  </Routes>
                </MainLayout>
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
