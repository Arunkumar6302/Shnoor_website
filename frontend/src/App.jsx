import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { CompanyProvider } from "./company";
import { StoreProvider } from "./storeContext";
import Layout from "./components/Layout";
import ChatWidget from "./components/chatbot/ChatWidget";
import CartSidebar from "./components/CartSidebar";
import AuthModal from "./components/AuthModal";

// Lazy Loaded Pages
const AboutPage = lazy(() => import("./pages/AboutPage"));
const CareersPage = lazy(() => import("./pages/CareersPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const ExportPage = lazy(() => import("./pages/ExportPage"));
const HomePage = lazy(() => import("./pages/HomePage"));
const LogisticsPage = lazy(() => import("./pages/LogisticsPage"));
const ServiceDetailPage = lazy(() => import("./pages/ServiceDetailPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const RecruitmentScamsPage = lazy(() => import("./pages/RecruitmentScamsPage"));
const LatestOpeningsPage = lazy(() => import("./pages/LatestOpeningsPage"));
const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicyPage"));
const TermsConditionsPage = lazy(() => import("./pages/TermsConditionsPage"));
const AdminLearningPage = lazy(() => import("./pages/AdminLearningPage"));
const StorePage = lazy(() => import("./pages/StorePage"));
const ProductDetailsPage = lazy(() => import("./pages/ProductDetailsPage"));
const OrdersPage = lazy(() => import("./pages/OrdersPage"));
const CheckoutPage = lazy(() => import("./pages/CheckoutPage"));
const PaymentSuccessPage = lazy(() => import("./pages/PaymentSuccessPage"));

// Loading Fallback
const PageLoader = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: '#f8fafc' }}>
    <div style={{ width: '40px', height: '40px', border: '4px solid rgba(245, 158, 11, 0.2)', borderTopColor: 'var(--accent)', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
    <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
  </div>
);

function App() {
  return (
    <CompanyProvider>
      <StoreProvider>
        <BrowserRouter>
          <Suspense fallback={<PageLoader />}>
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
                <Route path="/store" element={<StorePage />} />
                <Route path="/store/:id" element={<ProductDetailsPage />} />
                <Route path="/orders" element={<OrdersPage />} />
                <Route path="/checkout/:orderId" element={<CheckoutPage />} />
                <Route path="/payment-success/:orderId" element={<PaymentSuccessPage />} />
              </Route>
              <Route path="/admin" element={<AdminLearningPage />} />
            </Routes>
          </Suspense>
          <CartSidebar />
          <AuthModal />
        </BrowserRouter>
        <ChatWidget />
      </StoreProvider>
    </CompanyProvider>
  );
}

export default App;
