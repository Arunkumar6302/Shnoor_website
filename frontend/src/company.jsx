import { createContext, useContext, useEffect, useState } from "react";

const fallbackProfile = {
  name: "SHNOOR International LLC",
  headline: "Bridging Innovation and Trade with Expert IT Solutions and Global Reach",
  summary: "SHNOOR INTERNATIONAL LLC has been formed to work progressively in the field of various IT needs focusing primarily on IT Consulting & Staffing, IT Product Development, Application Designing & Development, SAP Outsourcing, Import & Exports of various products from India to United Arab Emirates, Bahrain, Qatar, Oman & Malaysia.",
  extendedSummary: "Headquartered in MUSCAT - Oman, beyond technology, we also specialize in import and export of quality products from India to the UAE, Bahrain, Qatar, Oman, and Malaysia—building strong trade bridges and lasting partnerships worldwide.",
  headquarters: "Muscat, Oman",
  adminPreview: {
    title: "Operational visibility",
    description: "A built-in admin view helps the team review and manage incoming enquiries."
  },
  contact: {
    generalEmail: "info@shnoor.com",
    salesEmail: "proc@shnoor.com",
    address: "10009 Mount Tabor Road, Odessa Missouri, United States",
    openingHoursWeekdays: "Monday - Friday: 09:00 - 18:00",
    openingHoursWeekend: "Saturday - Sunday: Closed",
    phones: [],
    partnerEmail: "partners@shnoor.com"
  },
  about: {
    title: "Get to know us",
    mission: "To deliver solutions that are tailored, scalable, and future-ready by combining industry expertise with innovative thinking.",
    vision: "To close the gap in the foreign market between buyers and sellers globally.",
    whyChoose: ["Top rated by 100+ clients", "Single partner for technology & trade", "Global Reach"]
  },
  servicesIntro: "From IT Consulting, Product Development, Application Design, and SAP Outsourcing to import and export of premium products.",
  logistics: {
    title: "Logistics Management",
    summary: "Ensuring smooth, reliable, and hassle-free global import-export services.",
    body: ["We deal reasonably with producers, farmers, wholesalers, importers, and other stakeholders to establish a strong global presence."]
  },
  exportManagement: {
    title: "Export Management",
    summary: "Import and export of quality products from India to the UAE, Bahrain, Qatar, Oman, and Malaysia.",
    body: ["Seamlessly connecting technology and trade for your business needs."],
    pillars: ["Quality Assurance", "Customer Satisfaction", "Global Logistics"]
  },
  careers: {
    title: "International Careers",
    subtitle: "Join our global team",
    summary: "Working at the intersection of technology and trade.",
    body: ["Seeking specialized IT talent and innovative thinkers."],
    recruitmentScam: "Please be aware of recruitment scams.",
    tagline: "Build the future with us."
  },
  services: [
    {id: "01", title: "Cloud Management", description: "Seamless cloud migration and management services.", icon: "cloud", slug: "cloud-management"},
    {id: "02", title: "Enterprise Management", description: "Comprehensive enterprise IT solutions including SAP outsourcing.", icon: "enterprise", slug: "enterprise-management"},
    {id: "03", title: "Data & Artificial Intelligence", description: "Leveraging data and AI to innovate faster and operate smarter.", icon: "ai", slug: "data-and-artificial-intelligence"},
    {id: "04", title: "Consulting & Staffing", description: "Specialized IT talent and consulting tailored to your requirements.", icon: "consulting", slug: "consulting-and-staffing"},
    {id: "05", title: "Background Verification", description: "Thorough background verification processes.", icon: "verification", slug: "background-verification"},
    {id: "06", title: "Network Management", description: "Reliable and secure network management solutions.", icon: "network", slug: "network-management"},
    {id: "07", title: "Health Care IT", description: "Specialized technology solutions for the healthcare industry.", icon: "health", slug: "healthcare"},
    {id: "08", title: "Logistics Management", description: "Smooth and reliable logistics handling.", icon: "logistics", slug: "logistics-management"},
    {id: "09", title: "Export Management", description: "Connecting markets across India, UAE, Bahrain, Oman, Qatar, and Malaysia.", icon: "export", slug: "export-management"}
  ],
  markets: ["India", "UAE", "Bahrain", "Qatar", "Oman", "Malaysia"],
  differentiators: [
    {title: "Single Partner for Growth", description: "Blending technological expertise with international trade experience."},
    {title: "Global Reach", description: "Connecting markets from India to the Middle East and Malaysia."},
    {title: "Custom Solutions", description: "End-to-end product development and application design that blends functionality with creativity."}
  ],
  milestones: [],
  testimonials: [
    {
      author: "Amita Khanna",
      company: "Delivery Head, SF Technologies - Singapore",
      quote: "Working with SHNOOR International LLC has been a game-changer for our business. Their IT consulting team understood our requirements perfectly and delivered a custom solution that improved our efficiency by leaps and bounds. On top of that, their import services were smooth, reliable, and hassle-free. It’s rare to find a partner who excels in both technology and trade—SHNOOR does it effortlessly."
    }
  ]
};

const CompanyContext = createContext({
  company: fallbackProfile,
  loading: true
});

export function CompanyProvider({ children }) {
  const defaultSettings = {
    generalEmail: "info@shnoor.com",
    salesEmail: "proc@shnoor.com",
    address: "10009 Mount Tabor Road, Odessa Missouri, United States",
    instagram: "https://www.instagram.com/popular/shnoor-international-llc/",
    twitter: "https://www.linkedin.com/company/shnoor-international",
    linkedin: "https://www.linkedin.com/company/shnoor-international",
    whatsapp: "6302469479"
  };

  const [company, setCompany] = useState(fallbackProfile);
  const [loading, setLoading] = useState(true);
  
  // Use state without localStorage persistence
  const [siteSettings, setSiteSettings] = useState(defaultSettings);

  const [submissions, setSubmissions] = useState([]);

  const addSubmission = async (submission) => {
    const API_BASE = import.meta.env.VITE_API_BASE_URL || "";
    console.log(`Attempting to send enquiry to ${API_BASE}/api/contact...`);
    try {
      const response = await fetch(`${API_BASE}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: submission.name,
          phone: submission.mobile,
          email: submission.email,
          message: submission.message,
        }),
      });
      
      if (!response.ok) {
        throw new Error("Failed to send enquiry");
      }

      console.log("Enquiry sent to backend successfully");
    } catch (error) {
      console.error("Error sending enquiry to backend:", error);
      throw error; // Rethrow to let the component handle it
    }
  };

  useEffect(() => {
    const loadCompany = async () => {
      try {
        const response = await fetch("/api/company");
        const data = await response.json();
        setCompany(data);
      } catch (error) {
        setCompany(fallbackProfile);
      } finally {
        setLoading(false);
      }
    };

    loadCompany();
  }, []);

  return <CompanyContext.Provider value={{ company, loading, siteSettings, addSubmission }}>{children}</CompanyContext.Provider>;
}

export function useCompany() {
  return useContext(CompanyContext);
}
