import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "../layouts/NavigationBar";
import Footer from "../layouts/Footer";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Planets from "../pages/Planets";
import Transformations from "../pages/Transformations";
import PlanetDetails from "../pages/PlanetDetails";
import CharacterDetails from "../pages/CharacterDetails";
import TransformationDetails from "../pages/TransformationDetails";

const AppRouter = () => {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <NavigationBar />
        <main className="flex-grow-1 bg-dark">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/characters/:id" element={<CharacterDetails />} />
            <Route path="/planets" element={<Planets />} />
            <Route path="/planets/:id" element={<PlanetDetails />} />
            <Route path="/transformations" element={<Transformations />} />
            <Route
              path="/transformations/:id"
              element={<TransformationDetails />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default AppRouter;
