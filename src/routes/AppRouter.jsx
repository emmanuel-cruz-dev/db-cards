import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import NavigationBar from "../layouts/NavigationBar";
import Footer from "../layouts/Footer";
import LoadingFallback from "../components/ui/LoadingFallback";

const Home = lazy(() => import("../pages/Home"));
const NotFound = lazy(() => import("../pages/NotFound"));
const Planets = lazy(() => import("../pages/Planets"));
const Transformations = lazy(() => import("../pages/Transformations"));
const PlanetDetails = lazy(() => import("../pages/PlanetDetails"));
const CharacterDetails = lazy(() => import("../pages/CharacterDetails"));
const TransformationDetails = lazy(() =>
  import("../pages/TransformationDetails")
);

const AppRouter = () => {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <NavigationBar />
        <main className="flex-grow-1 bg-dark">
          <Suspense fallback={<LoadingFallback />}>
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
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default AppRouter;
