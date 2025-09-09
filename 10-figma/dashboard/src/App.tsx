import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Expenses from "./pages/expenses/Expenses";

function App() {
  return (
    <div>
      <Router>
        <Sidebar />
        <Expenses />
      </Router>
    </div>
  );
}

export default App;
