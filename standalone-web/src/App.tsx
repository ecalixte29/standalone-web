import { Routes, Route, Navigate } from 'react-router-dom';
import AgentDashboard from './pages/AgentDashboard';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <Routes>
      <Route path="/agent/*" element={<AgentDashboard />} />
      <Route path="/admin/*" element={<AdminDashboard />} />
      <Route path="*" element={<Navigate to="/agent" replace />} />
    </Routes>
  );
}

export default App; 