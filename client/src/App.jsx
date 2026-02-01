import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Import your pages (You will need to create these files in the 'pages' folder)
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import AdminDashboard from './pages/Admin/AdminDashboard';
import StudentDashboard from './pages/Student/StudentDashboard';
import FacultyDashboard from './pages/Faculty/FacultyDashboard';

function App() {
  return (
    <Router>
      <Routes>
        {/* --- Public Routes --- */}
        {/* Redirect root URL to Login */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* --- Student Routes --- */}
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/student/my-events" element={<h1>My Events Page</h1>} />

        {/* --- Admin Routes --- */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/create-event" element={<h1>Create Event Page</h1>} />

        {/* --- Faculty Routes --- */}
        <Route path="/faculty/dashboard" element={<FacultyDashboard />} />
        <Route path="/faculty/reports" element={<h1>Faculty Reports Page</h1>} />

        {/* --- 404 Not Found --- */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;