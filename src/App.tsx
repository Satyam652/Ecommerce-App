import { AuthProvider } from "./contexts/AuthContext";
import RootRouter from "./router/RootRoute";

const App = () => {
  return (
    <>
      <AuthProvider>
        <RootRouter />
      </AuthProvider>
    </>
  );
};

export default App;
