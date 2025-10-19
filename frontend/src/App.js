import { Routes, Route } from "react-router-dom";
import ClientList from "./ClientList";
import ClientDetails from "./ClientDetails";
import WelcomePage from "./WelcomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/clients" element={<ClientList />} />
      <Route path="/clients/:id" element={<ClientDetails />} />
    </Routes>
  );
}

export default App;