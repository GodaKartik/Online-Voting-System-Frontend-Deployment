import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
// import Vote from "./pages/Vote";
import CreatePoll from "./pages/CreatePoll";
import Polls from "./pages/Polls";
import Login from "./pages/Login";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create/:username" element={<CreatePoll />} />
          <Route path="/vote/:username" element={<Polls />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
