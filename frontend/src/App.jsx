import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CompanyProvider } from "./company";
import Layout from "./components/Layout";
import AboutPage from "./pages/AboutPage";
import CareersPage from "./pages/CareersPage";
import ContactPage from "./pages/ContactPage";
import ExportPage from "./pages/ExportPage";
import HomePage from "./pages/HomePage";
import LogisticsPage from "./pages/LogisticsPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import ServicesPage from "./pages/ServicesPage";
import RecruitmentScamsPage from "./pages/RecruitmentScamsPage";
import LatestOpeningsPage from "./pages/LatestOpeningsPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsConditionsPage from "./pages/TermsConditionsPage";

function App() {
  return (
    <CompanyProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:slug" element={<ServiceDetailPage />} />
            <Route path="/logistics-management" element={<LogisticsPage />} />
            <Route path="/export-management" element={<ExportPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/recruitment-scams" element={<RecruitmentScamsPage />} />
            <Route path="/latest-openings" element={<LatestOpeningsPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-conditions" element={<TermsConditionsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CompanyProvider>
  );
}

export default App;
