import './App.css';
import Navigation from './component/navigation/Navigation';
import Home from './component/home/Home';
import EditContact from './component/editContact/EditContact';
import AddContact from './component/addContact/AddContact';
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/add" exact element={<AddContact />} />
          <Route path="/edit/:id" element={<EditContact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
