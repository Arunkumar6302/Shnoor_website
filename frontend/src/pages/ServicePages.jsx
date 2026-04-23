import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";

export function CloudPage() {
  return (
    <main>
      <PageHero
        eyebrow="Cloud"
        title="Empowering your business with secure, scalable, and future-ready cloud solutions"
        description="In today’s digital era, the cloud is no longer an option—it’s a necessity. At SHNOOR International LLC, we help businesses harness the full potential of cloud technology to optimize operations, improve collaboration, and reduce infrastructure costs."
      />

      <section className="section bg-alt" style={{paddingTop: '60px'}}>
        <div className="container">
          <p style={{fontSize: '1.1rem', color: 'var(--muted)', marginBottom: '40px', maxWidth: '800px'}}>
            Our cloud experts design, deploy, and manage solutions tailored to your business needs, ensuring you get the perfect balance of performance, security, and scalability. At SHNOOR International, we go beyond just implementing cloud solutions—we ensure your business thrives in the cloud. From planning to ongoing optimization, our team is with you at every stage of your cloud journey.
          </p>

          <h2 style={{fontSize: '2rem', marginBottom: '16px'}}>What We do</h2>
          <p style={{fontSize: '1.1rem', color: 'var(--muted)', marginBottom: '24px'}}>
            We offer three core categories of cloud services to drive maximum business value: Cloud for Customer First, Cloud for Enterprise Management, and Cloud for the Intelligent Enterprise.
          </p>

          <div className="service-grid">
            <article className="service-card">
              <img src="https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&q=80&w=600" alt="AWS Cloud" style={{width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px', marginBottom: '16px'}} />
              <h3>AWS Cloud</h3>
              <p>At SHNOOR International LLC, we help businesses unlock the full potential of Amazon Web Services (AWS)—the world’s most comprehensive and widely adopted cloud platform. Whether you’re migrating to the cloud, optimizing existing workloads, or building next-gen applications, our AWS-certified experts deliver secure, scalable, and cost-effective solutions tailored to your business needs.</p>
            </article>

            <article className="service-card">
              <img src="https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&q=80&w=600" alt="Google Cloud" style={{width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px', marginBottom: '16px'}} />
              <h3>Google Cloud</h3>
              <p>At SHNOOR International LLC, we help businesses leverage the capabilities of Google Cloud Platform (GCP) to achieve agility, scalability, and innovation. Whether you’re migrating workloads, building intelligent applications, or optimizing your infrastructure, our Google Cloud experts deliver solutions that are secure, cost-effective, and performance-driven.</p>
            </article>

            <article className="service-card">
              <img src="https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?auto=format&fit=crop&q=80&w=600" alt="Microsoft Cloud" style={{width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px', marginBottom: '16px'}} />
              <h3>Microsoft Cloud</h3>
              <p>At SHNOOR International LLC, we help organizations harness the full potential of Microsoft Azure—one of the world’s leading cloud platforms. From infrastructure modernization to advanced analytics and AI integration, we design and implement Azure solutions that align with your business goals, ensuring security, efficiency, and growth.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{maxWidth: '800px', margin: '0 auto', textAlign: 'center'}}>
          <h2 style={{fontSize: '2.5rem', marginBottom: '16px'}}>Partners</h2>
          <p style={{fontSize: '1.25rem', color: 'var(--accent)', fontStyle: 'italic', marginBottom: '40px'}}>
            "Stronger together – building success through collaboration."
          </p>
          
          <p style={{fontSize: '1.1rem', color: 'var(--muted)', marginBottom: '24px', textAlign: 'left'}}>
            At SHNOOR International LLC, we believe that great partnerships drive great achievements. We collaborate with industry-leading technology providers, trade networks, and business associates to deliver solutions that combine innovation, expertise, and global reach.
          </p>
          <p style={{fontSize: '1.1rem', color: 'var(--muted)', marginBottom: '24px', textAlign: 'left'}}>
            Our partners play a vital role in helping us provide world-class IT services, SAP outsourcing, and international trade solutions. Together, we create value that empowers businesses to grow, adapt, and thrive in competitive markets.
          </p>

          <h3 style={{fontSize: '1.75rem', marginBottom: '24px', textAlign: 'left'}}>Why Our Partnerships Matter</h3>
          <ul style={{textAlign: 'left', fontSize: '1.1rem', color: 'var(--muted)', display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px', paddingLeft: '20px'}}>
            <li><strong>Innovation</strong> – Access to the latest tools, platforms, and technologies.</li>
            <li><strong>Expertise</strong> – Combining our knowledge with the specialized skills of our partners.</li>
            <li><strong>Global Reach</strong> – Extending services and products across multiple countries and industries.</li>
            <li><strong>Mutual Growth</strong> – Building relationships that create long-term value for all stakeholders.</li>
          </ul>

          <p style={{fontSize: '1.1rem', color: 'var(--muted)', marginBottom: '32px'}}>
            From cloud service providers to global logistics networks, our partners help us deliver end-to-end solutions that make a difference. At SHNOOR International, partnerships aren’t just about contracts—they’re about shared goals, trust, and results.
          </p>

          <div style={{background: 'var(--navy)', color: 'white', padding: '40px', borderRadius: '12px'}}>
            <h3 style={{color: 'white', marginBottom: '16px'}}>Interested in partnering with us?</h3>
            <p>Reach out at <a href="mailto:partners@shnoor.com" style={{color: 'var(--accent)', textDecoration: 'underline'}}>partners@shnoor.com</a> to explore collaboration opportunities.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export function EnterprisePage() {
  return (
    <main>
      <PageHero
        eyebrow="Enterprise Management"
        title="Streamlining operations, empowering decisions, and enabling growth."
        description="From IT infrastructure and application management to ERP solutions, SAP outsourcing, and business process optimization, we deliver end-to-end services that align with your goals and enhance productivity."
      />

      <section className="section bg-alt">
        <div className="container">
          <h2 style={{fontSize: '2rem', marginBottom: '24px'}}>What we do</h2>
          <p style={{fontSize: '1.1rem', color: 'var(--muted)', marginBottom: '24px', maxWidth: '800px'}}>
            At SHNOOR International LLC, our Enterprise Management solutions are designed to help businesses operate smarter, faster, and more efficiently. We provide the strategies, tools, and technologies needed to manage resources, processes, and information across your organization—ensuring every part of your business works in sync.
          </p>

          <div className="split-section" style={{marginBottom: '40px', alignItems: 'flex-start'}}>
            <div className="split-content">
              <h3>ERP Implementation & Support (SAP Outsourcing)</h3>
              <p>SHNOOR International offers specialized SAP outsourcing (ABAP, MM, etc.). Certified SAP experts handle full lifecycle support: development, customization, and maintenance. We optimize your systems for peak performance, cost-efficiency, and scalability. Our global delivery model delivers reliable, 24/7 support for seamless operational excellence.</p>
              
              <h3 style={{marginTop: '32px'}}>Business Process Automation</h3>
              <p>Our Business Process Automation (BPA) solutions utilize AI, RPA, and cloud tools to maximize accuracy, reduce costs, and focus your team on strategic growth. We tailor automation for data entry reporting, approvals, and system integrations. Our expertise ensures faster, seamless processes, and improved, data-driven decision-making.</p>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: '24px'}}>
              <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800" alt="a group of white robots sitting on top of laptops" style={{borderRadius: '8px', width: '100%', height: '240px', objectFit: 'cover'}} />
              <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800" alt="person using macbook pro on white table" style={{borderRadius: '8px', width: '100%', height: '240px', objectFit: 'cover'}} />
            </div>
          </div>

          <div className="split-section" style={{alignItems: 'flex-start'}}>
            <div style={{display: 'flex', flexDirection: 'column', gap: '24px'}}>
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" alt="graphs of performance analytics" style={{borderRadius: '8px', width: '100%', height: '240px', objectFit: 'cover'}} />
              <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" alt="digital circuit board" style={{borderRadius: '8px', width: '100%', height: '240px', objectFit: 'cover'}} />
              <img src="https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&q=80&w=800" alt="server room infrastructure" style={{borderRadius: '8px', width: '100%', height: '240px', objectFit: 'cover'}} />
            </div>
            <div className="split-content">
              <h3>Performance Monitoring & Optimisation</h3>
              <p>we ensure your IT systems and business processes run at their absolute best. Our Performance Monitoring & Optimization services track, analyze, and fine-tune every aspect of your operations—from infrastructure and applications to databases and workflows. We use advanced monitoring tools, real-time analytics, and proactive optimization strategies to identify bottlenecks before they impact performance.</p>
              
              <h3 style={{marginTop: '32px'}}>Data Management & Analytics</h3>
              <p>we help businesses unlock the true value of their data. Our Data Management & Analytics services ensure your data is clean, secure, and well-organized—while delivering actionable insights that drive smarter decisions. From data collection and integration to advanced analytics and visualization, we provide end-to-end solutions that transform raw information into meaningful business intelligence.</p>

              <h3 style={{marginTop: '32px'}}>IT Infrastructure & Management</h3>
              <p>At SHNOOR International LLC, we design, implement, and manage robust IT infrastructures that keep your business running smoothly and securely. Covering everything from on-premises systems to advanced cloud-based environments, we ensure your IT backbone is reliable, highly scalable, and perpetually optimized for peak performance and robust security against emerging threats.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 style={{fontSize: '2.5rem', textAlign: 'center', marginBottom: '32px'}}>Enterprise Management Solutions</h2>
          
          <div className="service-grid" style={{marginBottom: '40px'}}>
            <div className="service-card">
              <h3 style={{color: 'var(--accent)', marginBottom: '16px'}}>Process Automation</h3>
              <p>Streamline workflows to save time and reduce manual errors.</p>
            </div>
            <div className="service-card">
              <h3 style={{color: 'var(--accent)', marginBottom: '16px'}}>Data Accuracy</h3>
              <p>Ensure reliable data for informed decision-making and strategic planning.</p>
            </div>
            <div className="service-card">
              <h3 style={{color: 'var(--accent)', marginBottom: '16px'}}>Cost Reduction</h3>
              <p>Minimize operational costs through efficient resource management.</p>
            </div>
          </div>

          <div style={{background: 'var(--surface-alt)', padding: '32px', borderRadius: '16px', borderLeft: '4px solid var(--navy)'}}>
            <h2 style={{color: 'var(--navy)', marginBottom: '16px'}}>Eliminating Complexity</h2>
            <p style={{fontSize: '1.1rem', color: 'var(--muted)', marginBottom: '24px'}}>
              Tired of disjointed software and silos? We provide the unified backbone your organization needs. Our solutions are designed to end data chaos, automate time-consuming processes, and deliver a single, clear view of your business health. Partner with us for smooth implementation and systems built to support your team, not complicate their work.
            </p>
            <h3 style={{color: 'var(--navy)', marginTop: '32px', marginBottom: '16px'}}>Unify Your Enterprise Stack</h3>
            <p style={{fontSize: '1.1rem', color: 'var(--muted)'}}>
              We deliver high-speed, modular solutions designed to eliminate technical debt and integrate disparate legacy systems. Our focus is on creating a single, secure operational environment that guarantees minimal latency and total data integrity across all crucial business functions.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export function DataAIPage() {
  return (
    <main>
      <PageHero
        eyebrow="Data & Artificial Intelligence"
        title="Turning Data into Decisions. Powering Ideas with Intelligence."
        description="We help organizations harness the potential of AI-powered automation, advanced analytics, and cognitive technologies to enhance efficiency, improve customer experiences, and uncover new business opportunities."
      />

      <section className="section bg-alt">
        <div className="container">
          <h2 style={{fontSize: '2rem', marginBottom: '24px'}}>What we do</h2>
          <p style={{fontSize: '1.1rem', color: 'var(--muted)', marginBottom: '24px', maxWidth: '800px'}}>
            At SHNOOR International LLC, we combine the power of data with the intelligence of AI to help businesses innovate, automate, and grow. Our solutions leverage machine learning, predictive analytics, and natural language processing to transform raw data into actionable insights and intelligent decision-making.
          </p>

          <div className="split-section" style={{marginBottom: '40px'}}>
            <div className="split-content">
              <h3>Intelligent Automation With AI & RPA</h3>
              <p>Our intelligent automation solutions go beyond basic task automation—by integrating AI, we enable your systems to learn, adapt, and make smart decisions. From document processing and data entry to complex decision-making and predictive analysis, our AI-powered bots work around the clock to ensure speed, accuracy, and efficiency.</p>
              
              <h3 style={{marginTop: '32px'}}>Machine Learning Model Development</h3>
              <p>From concept to deployment, we handle every stage of the ML model lifecycle—including data preparation, feature engineering, model training, testing, and optimization. Whether you need a recommendation engine, fraud detection system, demand forecasting model, or intelligent automation, our experts deliver tailored solutions that meet your specific needs.</p>

              <h3 style={{marginTop: '32px'}}>AI Driven Predictive Analysis</h3>
              <p>SHNOOR International LLC utilizes AI and advanced machine learning for predictive analysis. We help businesses stay ahead by forecasting trends, identifying risks, and uncovering new opportunities. Our solutions analyze historical data and patterns to generate highly accurate, actionable forecasts that drive improved decision-making.</p>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: '24px'}}>
              <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800" alt="Circuit board brain" style={{borderRadius: '8px', width: '100%', height: '240px', objectFit: 'cover'}} />
              <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800" alt="cell phone" style={{borderRadius: '8px', width: '100%', height: '240px', objectFit: 'cover'}} />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 style={{fontSize: '2.5rem', textAlign: 'center', marginBottom: '24px'}}>Data & AI Services</h2>
          <p style={{fontSize: '1.2rem', color: 'var(--muted)', textAlign: 'center', marginBottom: '32px'}}>Transform your business with innovative data strategies and AI solutions.</p>
          
          <div className="service-grid" style={{marginBottom: '40px'}}>
            <div className="service-card" style={{borderTop: '4px solid var(--accent)'}}>
              <h3 style={{color: 'var(--navy)', marginBottom: '16px'}}>Data Strategy</h3>
              <p>Craft tailored data strategies that drive business growth and efficiency.</p>
            </div>
            <div className="service-card" style={{borderTop: '4px solid var(--accent)'}}>
              <h3 style={{color: 'var(--navy)', marginBottom: '16px'}}>Predictive Modeling</h3>
              <p>Leverage predictive analytics to anticipate market trends and customer needs.</p>
            </div>
            <div className="service-card" style={{borderTop: '4px solid var(--accent)'}}>
              <h3 style={{color: 'var(--navy)', marginBottom: '16px'}}>Automation Solutions</h3>
              <p>Implement automation to streamline processes and enhance operational performance.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-alt">
        <div className="container split-section">
          <div className="split-content">
            <h2>Data & Artificial Intelligence: Drive Innovation</h2>
            <p>Unlock the power of your data with our specialized AI services. We transform raw information into predictive models and intelligent automation that directly boost your business efficiency and growth. Our structured approach ensures a seamless, ethical AI transformation—from initial strategy to successful enterprise-wide deployment. Partner with us to future-proof your business.</p>
          </div>
          <div className="split-content">
            <h2>Intelligent Transformation</h2>
            <p>Stop relying on guesswork. We empower your business with AI-driven intelligence to make faster, smarter decisions and gain a competitive edge. Our expert team ensures your data foundation is robust, secure, and ready to deploy high-impact predictive and generative AI solutions. It's time to turn potential into performance.</p>
            
            <h3 style={{marginTop: '24px'}}>Your Competitive Edge</h3>
            <p>The future is intelligent. We provide the data architecture and AI expertise required to keep your business ahead of the curve. From custom machine learning models to ensuring your systems are ready for the next wave of innovation, we deliver solutions that are secure, scalable, and built for lasting impact.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export function ConsultingPage() {
  return (
    <main>
      <PageHero
        eyebrow="Consulting & Staffing"
        title="Consulting That Delivers. Staffing That Works."
        description="At SHNOOR International LLC, we provide expert IT consulting and specialized staffing solutions to help businesses achieve their goals faster. Our team connects you with top-tier talent and industry expertise, ensuring the right skills for the right roles—whether for short-term projects or long-term growth."
        aside={
          <div style={{background: 'rgba(255,255,255,0.1)', padding: '24px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)'}}>
            <h3 style={{color: 'var(--accent)', fontSize: '1.5rem', fontStyle: 'italic'}}>"Smart people. Smarter solutions."</h3>
          </div>
        }
      />

      <section className="section bg-alt">
        <div className="container">
          <h2 style={{fontSize: '2rem', marginBottom: '24px'}}>What we do</h2>
          <p style={{fontSize: '1.1rem', color: 'var(--muted)', marginBottom: '24px', maxWidth: '800px'}}>
            At SHNOOR International LLC, we deliver end-to-end consulting and staffing services that empower businesses to scale efficiently, innovate faster, and achieve sustainable growth. Our consulting experts work closely with you to understand your challenges, design effective strategies, and implement solutions that drive measurable results.
          </p>

          <div className="split-section" style={{marginBottom: '32px'}}>
            <div className="split-content">
              <h3>IT & Technology Consulting</h3>
              <p>We bring deep expertise in enterprise systems, cloud solutions, cybersecurity, application development, and emerging technologies to solve complex challenges and unlock new opportunities. From strategy formulation to implementation, our consultants work alongside your team to ensure technology becomes a driver of efficiency, competitiveness, and innovation.</p>
              
              <h3 style={{marginTop: '32px'}}>Temporary & Permanent Staffing</h3>
              <p>Our recruitment specialists leverage industry expertise, advanced screening processes, and a vast talent network to ensure every candidate is a perfect match for your requirements. From IT specialists to business leaders, we source professionals who bring skills, dedication, and cultural fit to your organization.</p>

              <h3 style={{marginTop: '32px'}}>Talent Acquistion & Workforce Management</h3>
              <p>At SHNOOR International LLC, we help organizations attract, hire, and retain the best talent while ensuring efficient workforce management to drive business success. Our solutions are tailored to meet the unique needs of each client, from sourcing top-tier candidates to optimizing team performance.</p>
            </div>
            <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800" alt="Team meeting" className="split-image" style={{height: '100%'}}/>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 style={{fontSize: '2.5rem', textAlign: 'center', marginBottom: '16px'}}>Consulting & Staffing</h2>
          <p style={{fontSize: '1.2rem', color: 'var(--muted)', textAlign: 'center', marginBottom: '32px'}}>Expert IT consulting and strategic staffing solutions for business efficiency and growth.</p>
          
          <div className="service-grid" style={{marginBottom: '40px'}}>
            <div className="service-card">
              <div className="icon">✓</div>
              <h3 style={{color: 'var(--navy)'}}>Talent Acquisition</h3>
              <p>Finding skilled professionals tailored to your business needs.</p>
            </div>
            <div className="service-card">
              <div className="icon">✓</div>
              <h3 style={{color: 'var(--navy)'}}>Project-Based Staffing</h3>
              <p>Flexible staffing solutions for your specific project requirements.</p>
            </div>
            <div className="service-card">
              <div className="icon">✓</div>
              <h3 style={{color: 'var(--navy)'}}>Workforce Management</h3>
              <p>Optimizing workforce efficiency to enhance productivity and performance.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export function VerificationPage() {
  return (
    <main>
      <PageHero
        eyebrow="Verification Services"
        title="Secure Your Hiring"
        description="Employee background screening: Helping you hire the right people. Ensure safe hiring with our comprehensive background verification services tailored for HR professionals."
      />

      <section className="section bg-alt">
        <div className="container split-section">
          <div className="split-content">
            <h2>Key Benefits</h2>
            <div className="feature-list" style={{marginTop: '32px'}}>
              <article>
                <div className="icon">✓</div>
                <div>
                  <h3 style={{margin: '8px 0'}}>Risk Mitigation</h3>
                  <p>Avoid costly hiring mistakes by verifying candidate backgrounds thoroughly and efficiently.</p>
                </div>
              </article>
              <article>
                <div className="icon">✓</div>
                <div>
                  <h3 style={{margin: '8px 0'}}>Fast Solutions</h3>
                  <p>Experience quick turnaround times with our advanced AI-driven background check technology.</p>
                </div>
              </article>
              <article>
                <div className="icon">✓</div>
                <div>
                  <h3 style={{margin: '8px 0'}}>Compliance</h3>
                  <p>Stay compliant with industry regulations while ensuring a smooth hiring process.</p>
                </div>
              </article>
            </div>
          </div>
          <div style={{background: 'var(--navy)', padding: '40px', borderRadius: '16px', color: 'white'}}>
            <h2 style={{color: 'white', marginBottom: '24px'}}>Key Features</h2>
            <ul style={{listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '1.1rem'}}>
              <li><strong style={{color: 'var(--accent)'}}>3-Step Verification Process:</strong> Knowledge in three simple steps, not weeks.</li>
              <li><strong style={{color: 'var(--accent)'}}>Secure Submission:</strong> Initiate checks via our encrypted portal for safety.</li>
              <li><strong style={{color: 'var(--accent)'}}>AI-Powered Verification:</strong> Our system cross-references global data for accuracy.</li>
              <li><strong style={{color: 'var(--accent)'}}>Actionable Reporting:</strong> Receive a clear, compliant report in your dashboard.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{maxWidth: '800px'}}>
          <h2 style={{textAlign: 'center', marginBottom: '24px', fontSize: '2.5rem'}}>Background Verification FAQs</h2>
          
          <div style={{display: 'flex', flexDirection: 'column', gap: '24px'}}>
            <div style={{borderBottom: '1px solid var(--line)', paddingBottom: '24px'}}>
              <h3 style={{color: 'var(--navy)', marginBottom: '8px'}}>What is background verification?</h3>
              <p style={{color: 'var(--muted)'}}>Background verification is the process of checking a candidate's history for employment, education, and criminal records.</p>
            </div>
            <div style={{borderBottom: '1px solid var(--line)', paddingBottom: '24px'}}>
              <h3 style={{color: 'var(--navy)', marginBottom: '8px'}}>Why is it important?</h3>
              <p style={{color: 'var(--muted)'}}>It helps prevent bad hires, ensuring you select trustworthy candidates who fit your company culture and values.</p>
            </div>
            <div style={{borderBottom: '1px solid var(--line)', paddingBottom: '24px'}}>
              <h3 style={{color: 'var(--navy)', marginBottom: '8px'}}>How does your service work?</h3>
              <p style={{color: 'var(--muted)'}}>Our service involves a simple three-step process: submit a request, we conduct checks, and receive a detailed report quickly and efficiently.</p>
            </div>
            <div style={{borderBottom: '1px solid var(--line)', paddingBottom: '24px'}}>
              <h3 style={{color: 'var(--navy)', marginBottom: '8px'}}>How fast is the process?</h3>
              <p style={{color: 'var(--muted)'}}>Our background checks are completed quickly, often within 24 to 48 hours.</p>
            </div>
            <div>
              <h3 style={{color: 'var(--navy)', marginBottom: '8px'}}>Is your service compliant with regulations?</h3>
              <p style={{color: 'var(--muted)'}}>Yes, we ensure all background checks comply with local and federal regulations, maintaining the highest standards of privacy and security.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-alt">
        <div className="container">
          <h2 style={{textAlign: 'center', marginBottom: '16px'}}>Trusted Insights</h2>
          <p style={{textAlign: 'center', color: 'var(--muted)', marginBottom: '24px'}}>Ensure safe hiring with our background checks.</p>
          
          <div className="split-section">
            <div style={{background: 'var(--surface)', padding: '32px', borderRadius: '12px', border: '1px solid var(--line)'}}>
              <p style={{fontStyle: 'italic', fontSize: '1.2rem', marginBottom: '24px'}}>“Shnoor's background checks saved us from a costly hire.”</p>
              <strong>HR Manager</strong>
              <span style={{display: 'block', color: 'var(--muted)'}}>New York</span>
            </div>
            <div style={{background: 'var(--surface)', padding: '32px', borderRadius: '12px', border: '1px solid var(--line)'}}>
              <p style={{fontStyle: 'italic', fontSize: '1.2rem', marginBottom: '24px'}}>“The speed and accuracy of Shnoor's checks are unmatched, making our hiring process seamless and reliable.”</p>
              <strong>Recruitment Lead</strong>
              <span style={{display: 'block', color: 'var(--muted)'}}>San Francisco</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export function NetworkPage() {
  return (
    <main>
      <PageHero
        eyebrow="Network Solutions"
        title="Network Management"
        description="Keeping your business connected, secure, and running smoothly. Comprehensive network management tailored to keep your systems running smoothly."
      />

      <section className="section bg-alt">
        <div className="container split-section">
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" alt="dashboard monitoring" className="split-image" />
          <div className="split-content">
            <h2>Our Services</h2>
            <div style={{marginTop: '32px'}}>
              <h3 style={{marginBottom: '8px', color: 'var(--navy)'}}>Network Monitoring</h3>
              <p style={{color: 'var(--muted)'}}>Constantly tracks your network health to catch issues before they affect your business.</p>
              
              <h3 style={{marginTop: '24px', marginBottom: '8px', color: 'var(--navy)'}}>Security Management</h3>
              <p style={{color: 'var(--muted)'}}>Protects your network from threats with proactive measures and rapid response.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{textAlign: 'center'}}>
          <h2 style={{marginBottom: '24px', fontSize: '2.5rem'}}>Why Choose Our Network Management</h2>
          <div className="service-grid">
            <div className="service-card">
              <h3 style={{color: 'var(--accent)', marginBottom: '16px'}}>Reliable Uptime</h3>
              <p>Keep your systems running smoothly without interruptions.</p>
            </div>
            <div className="service-card">
              <h3 style={{color: 'var(--accent)', marginBottom: '16px'}}>Cost Efficiency</h3>
              <p>Reduce expenses with smart network resource management.</p>
            </div>
            <div className="service-card">
              <h3 style={{color: 'var(--accent)', marginBottom: '16px'}}>Expert Support</h3>
              <p>Get help from knowledgeable professionals anytime you need.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-alt">
        <div className="container" style={{maxWidth: '800px'}}>
          <h2 style={{textAlign: 'center', marginBottom: '24px', fontSize: '2.5rem'}}>FAQs</h2>
          <div style={{display: 'flex', flexDirection: 'column', gap: '24px'}}>
            <div>
              <h3 style={{color: 'var(--navy)'}}>What is network management?</h3>
              <p style={{color: 'var(--muted)'}}>It involves monitoring and maintaining computer networks to ensure smooth operation.</p>
            </div>
            <div>
              <h3 style={{color: 'var(--navy)'}}>What services do you offer?</h3>
              <p style={{color: 'var(--muted)'}}>We provide monitoring, configuration, performance, security, and fault management tailored to your needs.</p>
            </div>
            <div>
              <h3 style={{color: 'var(--navy)'}}>Why choose your solutions?</h3>
              <p style={{color: 'var(--muted)'}}>Our expertise and personalized approach ensure your network runs smoothly and securely.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export function HealthcarePage() {
  return (
    <main>
      <PageHero
        eyebrow="Healthcare IT"
        title="Delivering Reliable Healthcare Solutions Focused on Quality, Safety, and Patient Care"
        description="At SHNOOR International LLC, we leverage advanced healthcare software solutions combined with data intelligence and AI to help healthcare providers streamline operations, enhance patient care, and improve clinical outcomes."
      />

      <section className="section bg-alt">
        <div className="container">
          <p style={{fontSize: '1.2rem', color: 'var(--muted)', marginBottom: '24px', maxWidth: '900px'}}>
            Our systems utilize secure data management, predictive analytics, and intelligent automation to transform complex healthcare data into actionable insights and smarter decision-making. Transform healthcare delivery with intelligent data platforms and AI-driven software solutions.
          </p>

          <div className="service-grid">
            <article className="service-card">
              <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600" alt="Healthcare Management" style={{width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px', marginBottom: '16px'}} />
              <h3>Healthcare Management Systems</h3>
              <p>Our healthcare management systems go beyond basic digital tools by streamlining clinical and administrative workflows. From patient records and scheduling to billing and care coordination, our solutions improve efficiency, accuracy, and collaboration. We help healthcare organizations deliver organized, patient-focused services through intelligent and reliable software platforms.</p>
            </article>
            <article className="service-card">
              <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600" alt="Secure Data" style={{width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px', marginBottom: '16px'}} />
              <h3>Secure Data & Compliance Solutions</h3>
              <p>Our secure data and compliance solutions go beyond standard protection by ensuring privacy, integrity, and regulatory compliance. From encrypted data storage to controlled access and audit tracking, our software safeguards sensitive healthcare information. We enable organizations to maintain trust and meet compliance requirements with confidence.</p>
            </article>
            <article className="service-card">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600" alt="Decision Support Tools" style={{width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px', marginBottom: '16px'}} />
              <h3>Analytics & Decision Support Tools</h3>
              <p>Our analytics and decision support tools exceed conventional reporting by converting healthcare data into actionable insights. Ranging from performance dashboards to predictive analyses, our solutions facilitate well-informed clinical and operational decisions. We assist healthcare providers in optimizing outcomes and enhancing efficiency through data-driven intelligence.</p>
            </article>
          </div>
        </div>
      </section>
      
      <section className="section">
        <div className="container split-section">
          <div className="split-content">
            <h2 style={{fontSize: '2.5rem', marginBottom: '24px'}}>Get in touch</h2>
            <p>Ready to secure and optimize your healthcare platform? Contact us today.</p>
          </div>
          <form className="contact-form">
            <div style={{display: 'flex', gap: '16px'}}>
              <label style={{flex: 1}}>
                Name*
                <input type="text" placeholder="Your name" required />
              </label>
              <label style={{flex: 1}}>
                Last name*
                <input type="text" placeholder="Your last name" required />
              </label>
            </div>
            <label>
              Email*
              <input type="email" placeholder="Your email address" required />
            </label>
            <label>
              Message*
              <textarea rows="4" placeholder="Enter your message" required></textarea>
            </label>
            <button type="submit" className="primary-button" style={{alignSelf: 'flex-start'}}>Submit</button>
          </form>
        </div>
      </section>
    </main>
  );
}
