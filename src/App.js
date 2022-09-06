import './App.css';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import RegisterUserScreen from './pages/RegisterUser';
import RegisterCourseScreen from './pages/RegisterCourses'
import RegisterClassRoom from './components/RegisterClassRoom';
import GridViewScreen from './pages/GridView';

function App() {

  return (
    <div className="App">
      
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<RegisterUserScreen />} />
          <Route path="/curso/criar" element={<RegisterCourseScreen />} />
          <Route path="/aula/criar" element={<RegisterClassRoom />} />
          <Route path="/cursos" element={<GridViewScreen screen="course" />} />
          <Route path="/aulas" element={<GridViewScreen screen="classroom" />} />
          <Route path="/usuarios" element={<GridViewScreen screen="user" />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
     

    </div>
  );
}

export default App;
