import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./routes/main";
import Login from "./routes/login";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/main" element={<Main />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route></Route>
      </Routes>
    </Router>
  );
}

export default App;
