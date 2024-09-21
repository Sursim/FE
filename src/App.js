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
import { EditSurvey } from "./components/features/EditSurvey/index";
import { SettingSurvey } from "./components/features/SettingSurvey";

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
          <Route path="home" element={<HomePage />} />
          <Route path="mySurveys" element={<MySurveysPage />} />
          <Route path="publicSurveys" element={<PublicSurveysPage />} />
          <Route path="rewards" element={<RewardsPage />} />
          <Route path="editSurvey" element={<EditSurvey />} />
          <Route path="settingSurvey" element={<SettingSurvey />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
