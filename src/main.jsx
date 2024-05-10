import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store.js";
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import TemplatePage from "./pages/TemplatePage.jsx";
import UserDetails from "./pages/UserDetails.jsx";
import {
  ProfileDetails,
  EducationDetails,
  WorkExperience,
  Skills,
  Projects,
  Achievements,
  Bio,
} from "./components/index.js";
import DownloadPage from "./pages/DownloadPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="templates" element={<TemplatePage />} />

      <Route path="/user-details" element={<UserDetails />}>
        <Route path="profile" element={<ProfileDetails />} />
        <Route path="education" element={<EducationDetails />} />
        <Route path="work" element={<WorkExperience />} />
        <Route path="skills" element={<Skills />} />
        <Route path="projects" element={<Projects />} />
        <Route path="achievements" element={<Achievements />} />
        <Route path="bio" element={<Bio />} />
      </Route>
      <Route path="download-resume" element={<DownloadPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
