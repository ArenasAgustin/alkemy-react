import Login from "./pages/Login/Login";
import { Routes, Route } from "react-router-dom";
import { AuthWrapper } from "./components/AuthWrapper/AuthWrapper";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/" element={<AuthWrapper />}>
          <Route path="/home" element={<Home />} />

          <Route path="/list" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
