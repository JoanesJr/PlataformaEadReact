import './App.css';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import RegisterScreen from './pages/Register';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RegisterScreen />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
