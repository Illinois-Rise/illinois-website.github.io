import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Grid } from "@mui/material";
import reportWebVitals from "./reportWebVitals";
import AboutUs from "./pages/AboutUs";
import AbsentFormPage from "./pages/AbsentFormPage";
import Awards from "./pages/Awards";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import PastResults from "./pages/PastResults";
import Practice from "./pages/Practice";
import ProspectivePlayers from "./pages/ProspectivePlayers";
import Roster from "./pages/Roster";
import TeamHistory from "./pages/TeamHistory";
import Tournaments from "./pages/Tournaments";
import HistorySection from "./components/HistorySection";

import {
  ABOUT_US,
  ABSENT_FORM,
  AWARDS,
  CONTACT_US,
  HOME,
  PAST_RESULTS,
  PRACTICE,
  PROSPECTIVE_PLAYERS,
  ROSTER,
  TEAM_HISTORY,
  TOURNAMENTS,
} from "./constants/Routes";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path={ABOUT_US} element={<AboutUs />} />
          <Route path={ABSENT_FORM} element={<AbsentFormPage />} />
          <Route path={AWARDS} element={<Awards />} />
          <Route path={CONTACT_US} element={<ContactUs />} />
          <Route path={HOME} element={<Home />} />
          <Route path={PAST_RESULTS} element={<PastResults />} />
          <Route path={PRACTICE} element={<Practice />} />
          <Route path={PROSPECTIVE_PLAYERS} element={<ProspectivePlayers />} />
          <Route path={ROSTER} element={<Roster />} />
          <Route path={TEAM_HISTORY} element={<TeamHistory />}>
            <Route path=":historyId" element={<HistorySection/>}></Route>
          </Route>
          <Route path={TOURNAMENTS} element={<Tournaments />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
