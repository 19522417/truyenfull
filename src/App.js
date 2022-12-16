import Form from "./components/Home.js";
import Test from './components/Form.js';
import SinglePage from "./components/SinglePage.js";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className ="container">
        <Routes>
          <Route exact path="/" element={<Form/>} />
          <Route exact path="/login" element={<Test/>} />
          <Route exact path="/:id" element={<SinglePage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
