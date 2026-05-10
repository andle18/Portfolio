import { useEffect, useRef, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WelcomeScreen from "./components/WelcomeScreen";
import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPages";
import { trackPageView } from "./lib/firebase";

function AnalyticsTracker() {
  const location = useLocation();
  const lastTrackedPath = useRef<string | null>(null);

  useEffect(() => {
    const path = `${location.pathname}${location.search}`;

    if (lastTrackedPath.current === path) return;

    lastTrackedPath.current = path;
    void trackPageView(path);
  }, [location.pathname, location.search]);

  return null;
}

function App() {
  // Mostrar el splash solo una vez por sesión del navegador
  const [showWelcome, setShowWelcome] = useState<boolean>(() => {
    if (typeof window === "undefined") return true;
    return !window.sessionStorage.getItem("welcome_shown");
  });

  const handleWelcomeFinish = (): void => {
    window.sessionStorage.setItem("welcome_shown", "true");
    setShowWelcome(false);
  };

  return (
    <BrowserRouter>
      {showWelcome && <WelcomeScreen onFinish={handleWelcomeFinish} />}

      <AnalyticsTracker />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
