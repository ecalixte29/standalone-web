import create from 'zustand';

interface AuthState {
  token: string | null;
  role: 'agent' | 'admin' | null;
  setAuth: (token: string, role: 'agent' | 'admin') => void;
  clearAuth: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: localStorage.getItem('token'),
  role: (localStorage.getItem('role') as 'agent' | 'admin') || null,
  setAuth: (token, role) => {
    localStorage.setItem('token', token);
    localStorage.setItem('role', role);
    set({ token, role });
  },
  clearAuth: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    set({ token: null, role: null });
  },
})); 