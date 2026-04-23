import React from "react";

function RecruitmentScamsPage() {
  return (
    <main style={{background: 'var(--bg)', minHeight: '100vh', padding: '100px 0'}}>
      <div className="container" style={{maxWidth: '900px'}}>
        
        <div className="content-card">
          <h1 style={{fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '24px', color: 'var(--navy)', lineHeight: 1.2}}>
            Recruitment Scams Awareness
          </h1>
          
          <p style={{fontSize: '1rem', marginBottom: '40px', color: 'var(--text)', lineHeight: 1.7}}>
            At SHNOOR International, we are committed to maintaining the highest standards of transparency, trust, and ethical practices in all our recruitment and consultancy services. Unfortunately, many fraudulent individuals and unauthorized agencies misuse the name of reputed companies to mislead job seekers with fake job offers, fraudulent interviews, and false promises of overseas employment.
          </p>

          <h2 style={{fontSize: '1.8rem', marginBottom: '16px', color: 'var(--navy)'}}>What Are Recruitment Scams?</h2>
          <p style={{fontSize: '1rem', marginBottom: '40px', color: 'var(--text)', lineHeight: 1.7}}>
            Recruitment scams involve fraudulent job advertisements, fake offer letters, or demands for money under the guise of employment opportunities. Scammers may use emails, fake websites, social media platforms, or messaging apps to target job seekers by pretending to represent SHNOOR International.
          </p>

          <h2 style={{fontSize: '1.8rem', marginBottom: '16px', color: 'var(--navy)'}}>How to Identify a Recruitment Scam?</h2>
          <p style={{fontSize: '1rem', marginBottom: '16px', color: 'var(--text)'}}>Be alert if you notice:</p>
          <ul style={{fontSize: '1rem', marginBottom: '24px', color: 'var(--text)', paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '12px', lineHeight: 1.6}}>
            <li>Requests for money, deposits, or processing fees in exchange for a job.</li>
            <li>Unofficial communication from personal email accounts (e.g., Gmail, Yahoo, Hotmail) instead of our verified domain.</li>
            <li>Poorly written offer letters with suspicious formatting or spelling errors.</li>
            <li>Promises of guaranteed jobs without interviews.</li>
            <li>Fake websites or social media pages claiming to be SHNOOR International.</li>
          </ul>
          <p style={{fontSize: '1rem', marginBottom: '40px', color: 'var(--navy)', fontWeight: 'bold', padding: '16px', background: '#F8FAFC', borderRadius: '8px', borderLeft: '4px solid var(--accent)'}}>
            Important: SHNOOR International never charges job seekers any money for interviews, job applications, or placements.
          </p>

          <h2 style={{fontSize: '1.8rem', marginBottom: '16px', color: 'var(--navy)'}}>How We Protect Job Seekers</h2>
          <ul style={{fontSize: '1rem', marginBottom: '40px', color: 'var(--text)', paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '12px', lineHeight: 1.6}}>
            <li>We conduct all recruitment through our official website and verified communication channels.</li>
            <li>Offer letters are issued only on our official letterhead and signed by authorized personnel.</li>
            <li>All job-related communication is shared from our official domain email IDs.</li>
            <li>We encourage applicants to verify the authenticity of any job offer by contacting us directly.</li>
          </ul>

          <h2 style={{fontSize: '1.8rem', marginBottom: '16px', color: 'var(--navy)'}}>How to Stay Safe</h2>
          <ol style={{fontSize: '1rem', marginBottom: '40px', color: 'var(--text)', paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '12px', lineHeight: 1.6}}>
            <li>Never share personal or financial details with unknown recruiters.</li>
            <li>Verify email addresses and websites before responding.</li>
            <li>Report suspicious activity to SHNOOR International’s official contact channels.</li>
            <li>Always check with our HR Department before accepting any offer.</li>
          </ol>

          <h2 style={{fontSize: '1.8rem', marginBottom: '16px', color: 'var(--navy)'}}>Report Fraud</h2>
          <p style={{fontSize: '1rem', marginBottom: '8px', color: 'var(--text)'}}>
            If you suspect a recruitment scam using the name of SHNOOR International, please contact us immediately:
          </p>
          <p style={{fontSize: '1.1rem', marginBottom: '24px', color: 'var(--navy)', fontWeight: 600}}>
            📧 hr@shnoor.com
          </p>
          <p style={{fontSize: '1rem', color: 'var(--text)', fontStyle: 'italic'}}>
            Together, we can fight recruitment fraud and ensure a safe and transparent job search experience.
          </p>
        </div>

      </div>
    </main>
  );
}

export default RecruitmentScamsPage;
