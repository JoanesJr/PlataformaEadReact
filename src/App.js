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

function App() {

  return (
    <div className="App">
      
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<RegisterUserScreen />} />
          <Route path="/curso" element={<RegisterCourseScreen />} />
          <Route path="/aula" element={<RegisterClassRoom />} />
        </Routes>
        <Footer />
      </BrowserRouter>
     

    </div>
  );
}

export default App;
