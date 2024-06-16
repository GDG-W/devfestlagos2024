import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/Layout/Layout";
import { ShareComp } from "./components/Share/Share";
import { NotFound } from "./components/Notfound/Notfound";

import ReactGA from 'react-ga4';

ReactGA.initialize('G-PGQDSTV0T7');

function App() {
  const location = useLocation();
  return (
    <Routes key={location.pathname} location={location}>
      <Route index element={<Layout />}></Route>
      <Route path="/share/:username" element={<ShareComp />}></Route>
      <Route
        path="*"
        element={
          <NotFound
            headText="404 - Page Not Found"
            pText="The page you are looking for does not exist."
          />
        }
      />
    </Routes>
  );
}

export default App;
