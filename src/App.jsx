// import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Tables from "./pages/Tables";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/Login";
import DashboardLayout from "./layouts/DashboardLayout";
import Signup from "./pages/Signup";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <AuthLayout>
              <Login />
            </AuthLayout>
          }
        />
        <Route
          path="/signup"
          element={
            <AuthLayout>
              <Signup />
            </AuthLayout>
          }
        />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <DashboardLayout>
                <Dashboard />
              </DashboardLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/tables"
          element={
            <PrivateRoute>
              <DashboardLayout>
                <Tables />
              </DashboardLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/analytics"
          element={
            <PrivateRoute>
              <DashboardLayout>
                <Analytics />
              </DashboardLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/settings/*"
          element={
            <PrivateRoute>
              <DashboardLayout>
                <Settings />
              </DashboardLayout>
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
