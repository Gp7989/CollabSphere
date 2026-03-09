import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock fetching user session
    const checkAuth = async () => {
      try {
        const storedUser = localStorage.getItem('collabsphere_user');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error("Failed to parse user session", error);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (email, password) => {
    // Mock login
    const mockUser = {
      id: '1',
      name: 'Jane Doe',
      email,
      avatar: 'https://i.pravatar.cc/150?u=jane',
      role: 'admin',
    };
    setUser(mockUser);
    localStorage.setItem('collabsphere_user', JSON.stringify(mockUser));
    return mockUser;
  };

  const register = async (name, email, password) => {
    // Mock register
    const mockUser = {
      id: '1',
      name,
      email,
      avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random`,
      role: 'member',
    };
    setUser(mockUser);
    localStorage.setItem('collabsphere_user', JSON.stringify(mockUser));
    return mockUser;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('collabsphere_user');
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};