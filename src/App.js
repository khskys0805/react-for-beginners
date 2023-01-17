import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import React from 'react'
function App() {
  return (
    <BrowserRouter>
      <Router>
        <Routes>
          <Route path={process.env.PUBLIC_URL + "/movie/:id"} element={<Detail />} />
          <Route path={process.env.PUBLIC_URL + "/"} element={<Home />} />
        </Routes>
      </Router>
    </BrowserRouter>
  );
}

export default App;
