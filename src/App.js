import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Desktop1 from "./pages/Desktop1";
import Desktop7 from "./pages/Desktop7";
import Desktop8 from "./pages/Desktop8";
import Desktop10 from "./pages/Desktop10";
import Desktop9 from "./pages/Desktop9";
import Desktop4 from "./pages/Desktop4";
import Desktop6 from "./pages/Desktop6";
import Desktop2 from "./pages/Desktop2";
import Desktop5 from "./pages/Desktop5";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-7":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-8":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-10":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-9":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-4":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-6":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-2":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-5":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Desktop1 />} />
      <Route path="/desktop-7" element={<Desktop7 />} />
      <Route path="/desktop-8" element={<Desktop8 />} />
      <Route path="/desktop-10" element={<Desktop10 />} />
      <Route path="/desktop-9" element={<Desktop9 />} />
      <Route path="/desktop-4" element={<Desktop4 />} />
      <Route path="/desktop-6" element={<Desktop6 />} />
      <Route path="/desktop-2" element={<Desktop2 />} />
      <Route path="/desktop-5" element={<Desktop5 />} />
    </Routes>
  );
}
export default App;
