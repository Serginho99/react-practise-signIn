import AuthContextProvider from './AuthContext/AuthContext';
import Router from './Router/Router';

export const App = () => {
  return (
    <AuthContextProvider>
      <Router />
    </AuthContextProvider>
  );
};
