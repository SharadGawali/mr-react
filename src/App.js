import Dlmode from "./Components/Dlmode";
import Nav from "./Components/Nav";
import TextForm from "./Components/TextForm";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
          <>
          <Router>
            <Nav title="Home"/>
            <div className="container my-3">
        <Routes>
          <Route exact path="/dlmode" element={<Dlmode/>}/>

          <Route exact path="/" element={<TextForm/>}/>
        </Routes>
        </div>
        </Router> 
          </>
  );
}

export default App;
