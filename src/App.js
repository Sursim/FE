import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import MySurveysPage from "./pages/MySurveysPage";
import PublicSurveysPage from "./pages/PublicSurveysPage";
import RewardsPage from "./pages/RewardsPage";

const Layout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="mySurveys" element={<MySurveysPage />} />
          <Route path="publicSurveys" element={<PublicSurveysPage />} />
          <Route path="rewards" element={<RewardsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
