import { Route, Routes } from "react-router-dom";
import "./App.css";
import Show from "./components/Show";

function App() {
  return (
    <div className="app_container">
      <Routes>
        <Route path="*" element={<Show />} />
      </Routes>
    </div>
  );
}

export default App;
