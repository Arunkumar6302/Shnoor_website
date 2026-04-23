import { Link, useParams } from "react-router-dom";
import { 
  CloudPage, 
  EnterprisePage, 
  DataAIPage, 
  ConsultingPage, 
  VerificationPage, 
  NetworkPage, 
  HealthcarePage 
} from "./ServicePages";

function ServiceDetailPage() {
  const { slug } = useParams();

  switch(slug) {
    case "cloud-management":
      return <CloudPage />;
    case "enterprise-management":
      return <EnterprisePage />;
    case "data-and-artificial-intelligence":
      return <DataAIPage />;
    case "consulting-and-staffing":
      return <ConsultingPage />;
    case "background-verification":
      return <VerificationPage />;
    case "network-management":
      return <NetworkPage />;
    case "healthcare":
      return <HealthcarePage />;
    default:
      return (
        <main>
          <section className="section" style={{minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <div style={{textAlign: 'center'}}>
              <p className="eyebrow">Service not found</p>
              <h2>This service page is not available.</h2>
              <Link className="primary-button" style={{marginTop: '24px'}} to="/">
                Back to home
              </Link>
            </div>
          </section>
        </main>
      );
  }
}

export default ServiceDetailPage;
