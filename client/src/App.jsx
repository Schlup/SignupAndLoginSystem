import axios from "axios";
import { AuthContextProvider } from "./context/AuthContext";
import Rotas from "./Rotas";

axios.defaults.withCredentials = true;

function App() {

  return (
    <AuthContextProvider>
      <Rotas />
    </AuthContextProvider>
  );
}

export default App;
