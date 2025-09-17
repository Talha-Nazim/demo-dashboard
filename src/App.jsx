// import './App.css'
import Sidebar from "./components/sidebar";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 flex flex-col bg-none">
          <Navbar />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
