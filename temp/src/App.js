import Main from "./components/main";
import About from "./components/About";
import Project from "./components/Project";
import {BrowserRouter, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/project' element={<Project />}/>
          {/* <Route path='/re' */}
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;