import csv
import os

data = [
    ("<b>Empowering Growth Through Technology & Trade</b><br/><br/>SHNOOR International LLC is a dynamic organization bridging the worlds of technology and trade. With expertise spanning IT Consulting, Product Development, and SAP Outsourcing, we empower businesses with cutting-edge digital solutions.<br/><br/><b>Our Mission & Vision:</b> Our team combines industry expertise with innovative thinking to deliver solutions that are tailored, scalable, and future-ready. Whether you're seeking end-to-end product development, specialized IT talent, or application design that blends functionality with creativity—SHNOOR International is here to help you achieve success.<br/><br/><a href='/about' style='color: #F59E0B; font-weight: bold; text-decoration: underline;'>View or learn more</a>", [
        "What is Shnoor International?", "Who are you?", "What does Shnoor International do?", "Tell me about your company", "about", "about us",
        "What is your business model?", "Are you an IT company or an import export company?", "What exactly does your company do?",
        "Can you explain what Shnoor International is?", "Give me a brief overview of your business.", "What are your main business areas?",
        "What is your mission?", "What is your vision for business expansion?", "How do you help businesses expand beyond borders?", "vision", "mission", "vision and mission",
        "What makes Shnoor International unique?", "Do you deal with both technology and trade?", "tell me about"
    ]),
    
    ("We are headquartered in Muscat, Oman, with our US office at 10009 Mount Tabor Road, Odessa, Missouri. You can reach us at info@shnoor.com or proc@shnoor.com for sales. <br/><br/><a href='/contact' style='color: #F59E0B; font-weight: bold; text-decoration: underline;'>View or learn more</a>", [
        "Where is your company headquartered?", "Where are your offices located?", "Where are you based?", "What is your US address?",
        "Do you have an office in the US?", "How can I contact you?", "What is your contact email?", "How do I contact sales?",
        "What is the email for procurement?", "How to email support?", "Where is your main office?", "Do you operate in Oman?",
        "Is there an American branch?", "How do I get in touch with your team?", "What is your physical address?"
    ]),

    ("Shnoor International provides a wide range of expert solutions including:<br/><br/>• <b>Cloud Management</b><br/>• <b>Enterprise Management</b><br/>• <b>Data & Artificial Intelligence</b><br/>• <b>Consulting & Staffing</b><br/>• <b>Background Verification</b><br/>• <b>Network Management</b><br/><br/><a href='/services' style='color: #F59E0B; font-weight: bold; text-decoration: underline;'>View all services</a>", [
        "What services do you offer?", "What are your services?", "Services", "Tell me about your services",
        "What can you do for us?", "List of services", "What do you provide?", "Our services",
        "Can you list your services?", "What kind of services do you have?", "Show me your services",
        "What is your service offering?", "What does your company offer?", "Give me a list of your services",
        "IT services", "Provide services"
    ]),

    ("Our comprehensive Cloud Management services ensure efficiency, security, and scalability. We handle cloud migration, cloud architecture, and ongoing cloud infrastructure optimization. <br/><br/><a href='/services' style='color: #F59E0B; font-weight: bold; text-decoration: underline;'>View or learn more</a>", [
        "What cloud services do you provide?", "Do you offer Cloud Management?", "Can you help migrate our servers to the cloud?",
        "How do you ensure cloud security?", "Do you offer cloud migration?", "What are your cloud capabilities?",
        "Can you scale our cloud infrastructure?", "Do you provide cloud architecture services?", "I need help managing AWS/Azure, can you help?",
        "What is included in your cloud management?", "How can you optimize our cloud costs?", "Do you offer enterprise cloud solutions?",
        "Tell me about your Cloud Management services.", "Why should we choose your cloud services?", "Do you do cloud consulting?"
    ]),

    ("We provide expert enterprise resource planning (ERP) solutions and enterprise management services designed to optimize your business operations and drive maximum efficiency. <br/><br/><a href='/services' style='color: #F59E0B; font-weight: bold; text-decoration: underline;'>View or learn more</a>", [
        "Do you offer Enterprise Management?", "Can you help with Enterprise Resource Planning?", "Do you provide ERP solutions?",
        "How can you optimize our business operations?", "What enterprise services do you have?", "Do you offer SAP or ERP implementation?",
        "How do you drive business efficiency?", "Tell me about your enterprise management solutions.", "Can you streamline our enterprise operations?",
        "Do you provide business operation optimization?", "What is your approach to enterprise management?", "Do you have ERP experts?",
        "Can you manage large enterprise systems?", "What enterprise software do you support?", "Do you do enterprise architecture?"
    ]),

    ("We leverage the intersection of Data and Artificial Intelligence to transform industries, providing powerful data insights, machine learning models, and enhanced decision-making tools. <br/><br/><a href='/services' style='color: #F59E0B; font-weight: bold; text-decoration: underline;'>View or learn more</a>", [
        "Do you provide AI solutions?", "What do you offer in Data & Artificial Intelligence?", "Can you build machine learning models?",
        "How can AI transform my industry?", "Do you offer data analytics?", "Can you help with data insights?",
        "Do you provide predictive analytics?", "Tell me about your AI services.", "Do you have AI developers?",
        "Can you implement Artificial Intelligence for our business?", "How does your AI improve decision making?", "Do you offer big data solutions?",
        "What AI technologies do you use?", "Do you offer AI consulting?", "Can you help us adopt AI?"
    ]),

    ("We offer expert IT consulting and specialized staffing solutions tailored to your business. Our professional team helps you find top-notch talent to excel in your industry. <br/><br/><a href='/services' style='color: #F59E0B; font-weight: bold; text-decoration: underline;'>View or learn more</a>", [
        "Do you provide staffing services?", "Can you help us hire IT staff?", "Do you offer IT Consulting?", "How does your staffing process work?",
        "Can you provide temporary IT staff?", "Do you offer tech recruitment?", "Tell me about your Consulting & Staffing solutions.",
        "How can you help me find top IT talent?", "Do you offer staff augmentation?", "Are your consultants experienced?",
        "Can you provide an entire development team?", "What industries do you staff for?", "Do you do permanent IT placement?",
        "Why choose your staffing services?", "Do you offer specialized IT consulting?"
    ]),

    ("Ensure safe hiring practices with our precision Background Verification services. We provide fast, compliant solutions to help HR managers avoid the risks of bad hires. <br/><br/><a href='/services' style='color: #F59E0B; font-weight: bold; text-decoration: underline;'>View or learn more</a>", [
        "Do you do background verification?", "Do you offer background checks?", "How do you verify candidates?",
        "Are your background checks compliant?", "Can you help HR with background screening?", "How fast are your background verifications?",
        "Tell me about your background check process.", "Why should we use your background verification?", "Do you offer criminal background checks?",
        "Can you verify employee employment history?", "Do you provide education verification?", "How do you prevent bad hires?",
        "Is your verification service for HR managers?", "Do you offer precision background verification?", "What is included in a background check?"
    ]),

    ("Our professional Network Management services optimize performance, strengthen security, reduce downtime, and ensure a highly reliable IT infrastructure for your business. <br/><br/><a href='/services' style='color: #F59E0B; font-weight: bold; text-decoration: underline;'>View or learn more</a>", [
        "Do you handle Network Management?", "Can you secure our IT network?", "How do you reduce network downtime?",
        "Do you optimize network performance?", "Tell me about your network services.", "Can you manage our IT infrastructure?",
        "Do you provide network security?", "Do you offer 24/7 network monitoring?", "Can you troubleshoot our network?",
        "How do you ensure IT reliability?", "Do you offer enterprise network management?", "Can you set up our office network?",
        "What is included in your Network Management?", "Do you handle routers and firewalls?", "Why choose your network management?"
    ]),

    ("For the Healthcare industry, we provide specialized services including secure health data management, healthcare analytics, and clinical decision solutions. <br/><br/><a href='/services' style='color: #F59E0B; font-weight: bold; text-decoration: underline;'>View or learn more</a>", [
        "Do you work in the Healthcare sector?", "What IT services do you offer for healthcare?", "Can you handle health data security?",
        "Do you provide healthcare analytics?", "What are your clinical decision solutions?", "Do you comply with healthcare data standards?",
        "Tell me about your healthcare IT services.", "Can you build healthcare applications?", "Do you provide software for hospitals?",
        "How do you secure patient data?", "Do you offer IT consulting for clinics?", "Can you implement EHR systems?",
        "What is your experience in health tech?", "Do you offer healthcare data analytics?", "Why choose Shnoor for healthcare IT?"
    ]),

    ("We offer comprehensive Logistics and Export Management services. We optimize supply chains with advanced software and help businesses thrive in global export markets. <br/><br/><a href='/logistics-management' style='color: #F59E0B; font-weight: bold; text-decoration: underline;'>Logistics</a> | <a href='/export-management' style='color: #F59E0B; font-weight: bold; text-decoration: underline;'>Export Management</a>", [
        "Do you handle logistics?", "What is your Export Management service?", "Can you optimize our supply chain?",
        "Do you offer logistics software?", "How do you manage international exports?", "Tell me about your Logistics Management.",
        "Can you help us export products globally?", "What regions do you cover for export?", "Do you deal with wholesalers and importers?",
        "How do you establish a global trade presence?", "Can you improve our shipping efficiency?", "Do you offer supply chain consulting?",
        "What is included in export management?", "Do you help with export compliance?", "Are you an import export company?"
    ]),
    
    ("Hello! I am the Shnoor International AI assistant. I am doing great! How can I help you today?", [
        "Hi", "Hello", "Hey", "Good morning", "Good afternoon", "Good evening", "Hi there", "Hello there",
        "Greetings", "Hey bot", "Hi chatbot", "Are you there?", "Is anyone there?", "Yo", "Howdy",
        "How are you?", "How are you doing?", "What's up?", "How is it going?", "Are you okay?"
    ]),
    
    ("I can provide information about Shnoor International's services, including our IT consulting, cloud management, import/export operations, ERP solutions, and contact details. What would you like to know?", [
        "What can you do?", "How can you help me?", "What are the features present in this?", "What are your features?",
        "What do you know?", "Tell me what you can do.", "What is your purpose?", "Why are you here?", 
        "What questions can I ask you?", "How does this work?", "What are the features of this chatbot?",
        "What are the capabilities of this bot?", "What information do you have?", "Can you help me?", "What are you capable of?"
    ]),
    
    ("Got it! Let me know if you have any other questions or need further assistance.", [
        "ok", "okay", "alright", "got it", "understood", "cool", "fine", "sounds good", "make sense", "ok thanks", "kk", "sure", "alright then", "ok."
    ]),
    
    ("You're very welcome! Please let me know if you need anything else.", [
        "Thanks", "Thank you", "Thanks a lot", "Thank you very much", "I appreciate it", "Thanks for your help",
        "Great, thanks", "Awesome, thank you", "Good to know, thanks", "Okay, thank you", "Thanks for the info",
        "Thanks!", "Thank you!", "Much appreciated", "Many thanks", "thankyou", "thank u", "ty", "thx", "tq"
    ]),
    
    ("Goodbye! Have a great day and feel free to return if you have more questions.", [
        "Bye", "Goodbye", "See you later", "See ya", "Have a good day", "Have a great day", "Take care",
        "Bye for now", "That's all", "I'm done", "Nothing else", "Catch you later", "Farewell",
        "Have a good one", "Good night"
    ]),
    
    ("I am the official AI chatbot for Shnoor International LLC. I'm here to assist you with information regarding our technology and trade services. <br/><br/><a href='/about' style='color: #F59E0B; font-weight: bold; text-decoration: underline;'>View or learn more</a>", [
        "Who are you?", "What are you?", "Who created you?", "Are you human?", "Are you a bot?", 
        "Are you a robot?", "Are you AI?", "What is your name?", "Do you have a name?", "Who made you?",
        "Who developed you?", "Are you an employee?", "Are you a real person?", "Tell me about yourself", "Are you a chatbot?"
    ]),
    
    ("We take your privacy seriously. Our Privacy Policy ensures that your personal information is protected while using our services. We maintain strict data collection practices to safeguard your rights. <br/><br/><a href='/privacy-policy' style='color: #F59E0B; font-weight: bold; text-decoration: underline;'>View Privacy Policy</a>", [
        "What is your privacy policy?", "can you explain privacy policy?", "Do you have a privacy policy?",
        "How do you protect my data?", "Is my data safe?", "How do you handle personal information?",
        "Tell me about your privacy policy", "Where can I read your privacy policy?", "What are your data collection practices?",
        "Do you sell my data?", "Is my information secure?", "Privacy policy details", "Explain the privacy policy",
        "How is privacy maintained?", "Where is the privacy policy link?"
    ]),
    
    ("Our Terms and Conditions outline your rights and responsibilities when using Shnoor International's services. They provide guidelines on how we operate and engage with clients. <br/><br/><a href='/terms-conditions' style='color: #F59E0B; font-weight: bold; text-decoration: underline;'>View Terms and Conditions</a>", [
        "What are the terms and conditions?", "Where are your terms of service?", "Do you have terms and conditions?",
        "Tell me about your terms and conditions", "Can I see your terms and conditions?", "What are the rules for using your services?",
        "What is your terms policy?", "Where is the terms and conditions link?", "Explain your terms and conditions",
        "What are my rights and responsibilities?", "Terms of use", "Do you have a terms of use page?",
        "What guidelines do you follow?", "Read terms and conditions", "What are the terms of engagement?"
    ]),
    
    ("At SHNOOR International LLC, every career path is a journey of growth. Whether you're an IT expert, software developer, SAP consultant, or trade professional, you will be part of a passionate, diverse team pushing boundaries in technology and global trade. <br/><br/><a href='/careers' style='color: #F59E0B; font-weight: bold; text-decoration: underline;'>View or learn more</a>", [
        "Are you hiring?", "What are the career opportunities?", "How is it to work at Shnoor?",
        "Tell me about careers at Shnoor", "Why should I join Shnoor?", "Do you hire IT experts?",
        "What kind of professionals do you hire?", "Tell me about the work culture", "Join your team",
        "How do I build a career here?", "Do you hire SAP consultants?"
    ]),

    ("Our global clients include industry leaders like Etihad, Emirates Flight Training Academy, COSCO Shipping, ZIM, CargoTrade, and Maersk. We earn the trust of organizations across India, UAE, Bahrain, Qatar, Oman, and Malaysia. <br/><br/><a href='/about' style='color: #F59E0B; font-weight: bold; text-decoration: underline;'>View or learn more</a>", [
        "Who are your clients?", "Tell me about your customers", "Do you work with Emirates?",
        "Do you work with Maersk?", "Where are your clients located?", "Which countries do you serve?",
        "List your top clients", "Do you have clients in UAE?", "Are your clients worldwide?"
    ]),

    ("We are currently looking for Software Engineer Trainees in four areas: 1. SAP (ABAP, CDS Views), 2. Gen AI (OpenAI, Python, LLMs, Vector DBs), 3. Application Development (React/Angular, Node.js/.NET), and 4. Salesforce Developer (Lightning, Apex). <br/><br/><a href='/latest-openings' style='color: #F59E0B; font-weight: bold; text-decoration: underline;'>View Openings</a>", [
        "What jobs are open?", "What are the current job openings?", "Are there trainee roles?",
        "Do you have software engineer jobs?", "Are you hiring for Gen AI?", "Do you have Salesforce jobs?",
        "What are the requirements for SAP developer?", "Are you hiring frontend developers?", "Job descriptions",
        "Tell me about the trainee positions", "What skills do you need for Gen AI?"
    ]),

    ("Our internship details: The duration is 3 Months, with a stipend ranging between 10K-12K, and a PPO amount of 6 LPA. It is a Work From Home setup with 5 Days of working. <br/><br/><a href='/careers' style='color: #F59E0B; font-weight: bold; text-decoration: underline;'>View or learn more</a>", [
        "Tell me about the internship", "What is the internship duration?", "Is there a stipend?",
        "How much is the stipend?", "What is the PPO amount?", "Is it work from home?",
        "How many days a week is the internship?", "Internship details", "Do you offer internships?",
        "Can I get a PPO?", "Is the internship remote?"
    ]),

    ("Recruitment Scams Awareness: SHNOOR International never charges any fees, requests payments, or asks for financial information at any stage of our hiring process. Be alert for requests for money, communication from personal emails (like Gmail or Yahoo), or promises of jobs without interviews. <br/><br/><a href='/recruitment-scams' style='color: #F59E0B; font-weight: bold; text-decoration: underline;'>View or learn more</a>", [
        "Do you charge for jobs?", "Do I have to pay to get hired?", "Is this job offer real?",
        "What are recruitment scams?", "How to identify a fake job offer?", "Do you ask for money?",
        "Are there fake Shnoor job offers?", "How do you protect job seekers?", "Job fraud",
        "Scam awareness", "Do you use Gmail for hiring?", "How to stay safe from job scams?"
    ]),

    ("If you suspect a recruitment scam using the name of SHNOOR International, please ensure emails come from @shnoor.com and contact us immediately at hr@shnoor.com to report fraud. <br/><br/><a href='/contact' style='color: #F59E0B; font-weight: bold; text-decoration: underline;'>Report Fraud</a>", [
        "How do I report a fake job?", "Who do I contact about a scam?", "Where do I report fraud?",
        "What is the HR email?", "How do I verify my offer letter?", "Report fraud",
        "Is this email from you?", "How to check if an offer is genuine?"
    ])
]

csv_file = os.path.join(os.path.dirname(__file__), 'shnoor_kb.csv')

with open(csv_file, mode='w', newline='', encoding='utf-8') as file:
    writer = csv.writer(file)
    writer.writerow(['Question', 'Answer'])
    count = 0
    for answer, questions in data:
        for question in questions:
            writer.writerow([question, answer])
            count += 1

print(f"Successfully generated {count} questions in shnoor_kb.csv")
