import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '../store/auth';

function ProtectedRoute({ allowedRoles }: { allowedRoles: ('agent' | 'admin')[] }) {
  const role = useAuthStore((s) => s.role);

  if (!role) return <Navigate to="/login" replace />;
  if (!allowedRoles.includes(role)) return <Navigate to="/login" replace />;

  return <Outlet />;
}

export default ProtectedRoute; 