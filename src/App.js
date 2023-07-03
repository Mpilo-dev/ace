import { Routes, Route } from "react-router-dom";
import PlayerRegistration from "./routes/player-registration/player-registration";
import PlayersList from "./routes/players-list/players-list";


import Home from "./routes/home/home.components";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/player-registration" element={<PlayerRegistration />} />
        <Route path="/players-list" element={<PlayersList />} />
      </Routes>
    </>
  );
}

export default App;
