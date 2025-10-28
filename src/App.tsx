import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import NavigationBar from "./layouts/NavigationBar";
import Footer from "./layouts/Footer";
import ProgressBar from "./components/ui/ProgressBar";

function App() {
  return (
    <Router>
      <ProgressBar />
      <div className="d-flex flex-column min-vh-100">
        <NavigationBar />
        <main className="flex-grow-1 bg-dark">
          <AppRouter />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
