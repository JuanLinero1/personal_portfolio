import "./main.css";
import Header from "./components/Header/Header.jsx";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Project from "./pages/Projects/Project.jsx";
import Resume from "./pages/Resume/Resume.jsx";
import Footer from "./components/Footer/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";

const AppWrapper = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "About", element: <About /> },
    { path: "Project", element: <Project /> },
    { path: "Resume", element: <Resume /> }
  ]);
  return routes;
};

function App() {
  return (
    <Router>
      <Header />
      <AppWrapper />
      <Footer />
    </Router>
  );
}

export default App;
