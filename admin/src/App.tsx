import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



import Login from "./pages/Login";
import Register from "./pages/Register";
import MainLayout from "./Dashboard/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/dashboard"
          element={<MainLayout/>}
        />
        {/* <Route
        path="/" */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;