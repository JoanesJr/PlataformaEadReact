import './App.css';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import RegisterCourseScreen from './pages/RegisterCourses'
import RegisterClassRoom from './components/RegisterClassRoom';
import GridViewScreen from './pages/GridView';
import ScreenUser from './pages/ScreenUser';


function App() {

  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ScreenUser />} />
          <Route path="/curso/criar" element={<RegisterCourseScreen />} />
          <Route path="/aula/criar" element={<RegisterClassRoom />} />
          <Route path="/cursos" element={<GridViewScreen screen="course" />} />
          <Route path="/aulas" element={<GridViewScreen screen="classroom" />} />
          <Route path="/usuarios" element={<GridViewScreen screen="user" />} />
        </Routes>
      </BrowserRouter>
     

    </div>
  );
}

export default App;
