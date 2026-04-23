import React from "react";

function LatestOpeningsPage() {
  return (
    <main style={{background: 'var(--bg)', minHeight: '100vh', paddingBottom: '60px'}}>
      {/* Hero Section */}
      <section style={{padding: '80px 0 100px 0', overflow: 'hidden', background: 'var(--shadow-blue)'}}>
        <div className="container" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center'}}>
          <div style={{paddingBottom: '0'}}>
            <p style={{color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '4px', fontWeight: 700, marginBottom: '16px', fontSize: '0.85rem'}}>Careers</p>
            <h1 style={{fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'var(--navy)', marginBottom: '16px', lineHeight: 1.1}}>
              Join Our <span style={{color: 'var(--accent)'}}>Team</span>
            </h1>
            <p style={{fontSize: '1rem', color: 'var(--text)', marginBottom: '24px', lineHeight: 1.7}}>
              Explore exciting career opportunities in innovation and technology at Shnoor International LLC. Predict the future by creating it. You didn’t come this far to stop.
            </p>
            <div style={{display: 'flex', gap: '16px'}}>
              <a href="#roles" className="primary-button" style={{padding: '12px 24px', fontSize: '0.9rem'}}>View Open Roles</a>
            </div>
          </div>
          
          <div style={{height: '100%', display: 'flex', alignItems: 'flex-end'}}>
            <img 
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800" 
              alt="Join Our Team"
              style={{width: '100%', maxHeight: '400px', objectFit: 'cover', objectPosition: 'top', borderTopLeftRadius: '16px', borderTopRightRadius: '16px', boxShadow: '-10px -10px 40px rgba(0,0,0,0.05)'}}
            />
          </div>
        </div>
      </section>

      <div className="container" style={{display: 'flex', flexDirection: 'column', gap: '32px', marginTop: '-40px', position: 'relative', zIndex: 10}}>
        
        {/* Aims To & Internship Details */}
        <div className="content-card">
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '40px', alignItems: 'flex-start'}}>
            <div>
              <h2 style={{fontSize: '1.5rem', marginBottom: '24px', color: 'var(--navy)'}}>SHNOOR Aims To</h2>
              <ul style={{fontSize: '1rem', color: 'var(--text)', paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '12px', lineHeight: 1.6}}>
                <li>Offer exciting career paths in IT services</li>
                <li>Provide structured internships and live projects</li>
                <li>Conduct skill development workshops</li>
                <li>Recruit talented graduates</li>
              </ul>
            </div>

            <div style={{background: '#F8FAFC', padding: '32px', borderRadius: '12px', border: '1px solid var(--line)'}}>
              <h2 style={{fontSize: '1.5rem', marginBottom: '24px', color: 'var(--navy)', textAlign: 'center'}}>Internship Details</h2>
              <div style={{display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap', marginBottom: '32px'}}>
                <div style={{background: 'white', padding: '16px 24px', borderRadius: '8px', border: '1px solid var(--line)', textAlign: 'center', flex: 1}}>
                  <span style={{display: 'block', fontSize: '0.8rem', color: 'var(--muted)', textTransform: 'uppercase', marginBottom: '4px', fontWeight: 600}}>Duration</span>
                  <strong style={{fontSize: '1.1rem', color: 'var(--navy)'}}>3 Months</strong>
                </div>
                <div style={{background: 'white', padding: '16px 24px', borderRadius: '8px', border: '1px solid var(--line)', textAlign: 'center', flex: 1}}>
                  <span style={{display: 'block', fontSize: '0.8rem', color: 'var(--muted)', textTransform: 'uppercase', marginBottom: '4px', fontWeight: 600}}>Stipend</span>
                  <strong style={{fontSize: '1.1rem', color: 'var(--navy)'}}>10K - 12K</strong>
                </div>
                <div style={{background: 'white', padding: '16px 24px', borderRadius: '8px', border: '1px solid var(--line)', textAlign: 'center', flex: 1}}>
                  <span style={{display: 'block', fontSize: '0.8rem', color: 'var(--muted)', textTransform: 'uppercase', marginBottom: '4px', fontWeight: 600}}>PPO</span>
                  <strong style={{fontSize: '1.1rem', color: 'var(--navy)'}}>6 LPA</strong>
                </div>
              </div>
              <div style={{textAlign: 'center'}}>
                <a href="mailto:hr@shnoor.com" className="primary-button" style={{padding: '12px 32px', fontSize: '1rem'}}>Apply via Email</a>
              </div>
            </div>
          </div>
        </div>

        {/* Basic Knowledge Areas */}
        <div className="content-card">
          <h2 style={{fontSize: '1.8rem', marginBottom: '32px', color: 'var(--navy)'}}>Knowledge Areas (Pre-Joining)</h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px'}}>
            <div>
              <h3 style={{color: 'var(--navy)', marginBottom: '12px', fontSize: '1.1rem'}}>1. Programming Fundamentals</h3>
              <ul style={{color: 'var(--text)', paddingLeft: '20px', fontSize: '0.95rem', lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: '6px'}}>
                <li>Object-Oriented Programming (OOP) concepts</li>
                <li>Hands-on with Java / C++ / Python or similar</li>
                <li>Understanding of classes, inheritance, interfaces, exception handling, and loops</li>
              </ul>
            </div>
            <div>
              <h3 style={{color: 'var(--navy)', marginBottom: '12px', fontSize: '1.1rem'}}>2. Web Basics</h3>
              <ul style={{color: 'var(--text)', paddingLeft: '20px', fontSize: '0.95rem', lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: '6px'}}>
                <li>HTML, CSS, JavaScript basics</li>
                <li>Client-server architecture understanding</li>
              </ul>
            </div>
            <div>
              <h3 style={{color: 'var(--navy)', marginBottom: '12px', fontSize: '1.1rem'}}>3. Database Concepts</h3>
              <ul style={{color: 'var(--text)', paddingLeft: '20px', fontSize: '0.95rem', lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: '6px'}}>
                <li>Understanding of RDBMS, tables, joins, primary/foreign keys</li>
                <li>Basics of writing queries in SQL</li>
              </ul>
            </div>
            <div>
              <h3 style={{color: 'var(--navy)', marginBottom: '12px', fontSize: '1.1rem'}}>4. CRM & Cloud (Good to Know)</h3>
              <ul style={{color: 'var(--text)', paddingLeft: '20px', fontSize: '0.95rem', lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: '6px'}}>
                <li>Sales process basics: Leads, Opportunities</li>
                <li>Difference between SaaS, PaaS, IaaS</li>
                <li>How Salesforce fits into the SaaS model</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Job Descriptions Header */}
        <div id="roles" style={{textAlign: 'center', marginTop: '20px'}}>
          <p style={{color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600, fontSize: '0.85rem', marginBottom: '8px'}}>Open Roles</p>
          <h2 style={{fontSize: '2rem', color: 'var(--navy)'}}>Software Engineer Trainees</h2>
        </div>

        {/* Job Roles Grid */}
        <div style={{display: 'grid', gridTemplateColumns: '1fr', gap: '24px'}}>
          
          {/* Role 1 */}
          <article className="content-card">
            <h3 style={{fontSize: '1.5rem', color: 'var(--navy)', marginBottom: '8px'}}>Software Engineer Trainee - Gen AI</h3>
            <p style={{color: 'var(--text)', marginBottom: '24px', lineHeight: 1.6}}>
              Final-year students or recent graduates (B.E/B.Tech – CS, IT, AI, DS) with a passion for cutting-edge AI technologies and a strong desire to develop real-world applications using Generative AI and Agentic systems.
            </p>
            
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px'}}>
              <div>
                <h4 style={{color: 'var(--navy)', marginBottom: '12px'}}>Key Responsibilities:</h4>
                <ul style={{color: 'var(--text)', paddingLeft: '20px', fontSize: '0.95rem', lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: '6px'}}>
                  <li>Design and develop applications using Generative AI models (OpenAI, Claude, Gemini, etc.).</li>
                  <li>Work on Agentic AI systems that can reason, plan, and act autonomously.</li>
                  <li>Build prototypes using LLM APIs, prompt engineering, vector databases.</li>
                  <li>Collaborate to create smart assistants, copilots, and automation agents.</li>
                </ul>
              </div>
              <div>
                <h4 style={{color: 'var(--navy)', marginBottom: '12px'}}>Preferred Skills:</h4>
                <ul style={{color: 'var(--text)', paddingLeft: '20px', fontSize: '0.95rem', lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: '6px'}}>
                  <li>Strong foundation in Python and APIs.</li>
                  <li>Understanding of AI/ML concepts, LLMs, and NLP fundamentals.</li>
                  <li>Exposure to tools like LangChain, OpenAI, HuggingFace, or Pinecone.</li>
                </ul>
              </div>
            </div>
          </article>

          {/* Role 2 */}
          <article className="content-card">
            <h3 style={{fontSize: '1.5rem', color: 'var(--navy)', marginBottom: '8px'}}>Software Engineer Trainee - SAP</h3>
            <p style={{color: 'var(--text)', marginBottom: '24px', lineHeight: 1.6}}>
              Engineering graduates (B.E/B.Tech – CS, IT, AI, DS) with a strong foundation in programming and a keen interest in building enterprise-level applications on the SAP platform.
            </p>
            
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px'}}>
              <div>
                <h4 style={{color: 'var(--navy)', marginBottom: '12px'}}>Key Responsibilities:</h4>
                <ul style={{color: 'var(--text)', paddingLeft: '20px', fontSize: '0.95rem', lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: '6px'}}>
                  <li>Collaborate with functional consultants to deliver technical solutions.</li>
                  <li>Participate in code reviews, debugging, and performance optimization.</li>
                  <li>Ensure high-quality deliverables and adherence to SAP standards.</li>
                  <li>Design, develop, and maintain applications using SAP ABAP.</li>
                </ul>
              </div>
              <div>
                <h4 style={{color: 'var(--navy)', marginBottom: '12px'}}>Good to Have:</h4>
                <ul style={{color: 'var(--text)', paddingLeft: '20px', fontSize: '0.95rem', lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: '6px'}}>
                  <li>Exposure to SAP Business Technology Platform (SAP BTP).</li>
                  <li>Knowledge of CDS Views, RAP, and Data Services.</li>
                  <li>Basic understanding of Fiori/UI5 or SAP CAP.</li>
                </ul>
              </div>
            </div>
          </article>

          {/* Role 3 */}
          <article className="content-card">
            <h3 style={{fontSize: '1.5rem', color: 'var(--navy)', marginBottom: '8px'}}>Software Engineer Trainee - Application Development</h3>
            <p style={{color: 'var(--text)', marginBottom: '24px', lineHeight: 1.6}}>
              Fresh graduates (B.E/B.Tech – CS/IT) with a solid foundation in web technologies and hands-on project experience in both front-end and back-end development.
            </p>
            
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px'}}>
              <div>
                <h4 style={{color: 'var(--navy)', marginBottom: '12px'}}>Key Responsibilities:</h4>
                <ul style={{color: 'var(--text)', paddingLeft: '20px', fontSize: '0.95rem', lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: '6px'}}>
                  <li>Design and develop dynamic web applications using React/Angular and .NET/Node.js.</li>
                  <li>Contribute to API design, UI/UX discussions, and deployment processes.</li>
                  <li>Collaborate with cross-functional teams in agile sprints.</li>
                </ul>
              </div>
              <div>
                <h4 style={{color: 'var(--navy)', marginBottom: '12px'}}>Preferred Skills:</h4>
                <ul style={{color: 'var(--text)', paddingLeft: '20px', fontSize: '0.95rem', lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: '6px'}}>
                  <li>Proficiency in HTML, CSS, JavaScript, and React or Angular.</li>
                  <li>Working knowledge of Node.js or .NET Core.</li>
                  <li>Understanding of SQL and NoSQL database concepts.</li>
                </ul>
              </div>
            </div>
          </article>

          {/* Role 4 */}
          <article className="content-card">
            <h3 style={{fontSize: '1.5rem', color: 'var(--navy)', marginBottom: '8px'}}>Software Engineer Trainee - Salesforce Developer</h3>
            <p style={{color: 'var(--text)', marginBottom: '24px', lineHeight: 1.6}}>
              Fresh graduates (B.E/B.Tech) with a strong passion for cloud platforms and a desire to build expertise in cloud technologies.
            </p>
            
            <div>
              <h4 style={{color: 'var(--navy)', marginBottom: '12px'}}>Key Responsibilities:</h4>
              <ul style={{color: 'var(--text)', paddingLeft: '20px', fontSize: '0.95rem', lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: '6px'}}>
                <li>Build and customize Salesforce applications using Apex, Visualforce, and Lightning Components.</li>
                <li>Configure business processes through Flows, Process Builder, and Validation Rules.</li>
                <li>Develop REST/SOAP-based integrations with external systems.</li>
                <li>Participate in the complete software development lifecycle.</li>
                <li>Collaborate with functional teams to translate requirements into scalable solutions.</li>
              </ul>
            </div>
          </article>

        </div>

      </div>
    </main>
  );
}

export default LatestOpeningsPage;
