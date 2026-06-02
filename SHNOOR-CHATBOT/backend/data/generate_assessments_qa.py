import csv
import os

data = [
    ("SHNOOR Assessments is our secure examination and recruitment portal. It allows you to complete placement assessments for SHNOOR recruitment drives, take secure proctored exams, and track your results in one place. <br/><br/><a href='https://assessments.shnoor.com/' target='_blank' style='color: #F59E0B; font-weight: bold; text-decoration: underline;'>View or learn more</a>", [
        "What is SHNOOR Assessments?", "Tell me about this platform", "What is this website?",
        "What does the assessment app do?", "Is this the recruitment portal?", "How do I take exams here?",
        "What is the purpose of this portal?", "Give me an overview of the examination system",
        "about", "vision", "mission", "What is the recruitment portal?"
    ]),

    ("The process is simple: 1. Register with your institute details. 2. Take your assigned secure, proctored assessment. 3. Submit your exam securely and receive completion confirmation. <br/><br/><a href='https://assessments.shnoor.com/' target='_blank' style='color: #F59E0B; font-weight: bold; text-decoration: underline;'>View or learn more</a>", [
        "How does it work?", "How do I start?", "What are the steps?",
        "Tell me the process", "How do I take an assessment?", "What is the assessment workflow?",
        "How to use this portal?", "Explain how it works", "Where do I register?"
    ]),

    ("Our secure platform features Auto-Assigned Tests, Scheduled Tests, Multiple Attempts for specific tests, Auto-Save so you never lose progress, Secure Fullscreen enforcement, and immediate Submission Receipts. <br/><br/><a href='https://assessments.shnoor.com/' target='_blank' style='color: #F59E0B; font-weight: bold; text-decoration: underline;'>View or learn more</a>", [
        "What are the features?", "What features do you offer?", "Tell me about the platform capabilities",
        "List the features", "Does it auto-save?", "Can I take a test multiple times?",
        "Will I get a receipt after submission?", "Are tests scheduled?", "What can this portal do?",
        "Explain the features", "services"
    ]),

    ("We maintain strict academic integrity through Live Proctoring via webcam, Tab Switch Detection (maximum 3 warnings before auto-submission), Encrypted Answers, and Fullscreen Enforcement. <br/><br/><a href='https://assessments.shnoor.com/' target='_blank' style='color: #F59E0B; font-weight: bold; text-decoration: underline;'>View or learn more</a>", [
        "Is it secure?", "How does proctoring work?", "Are exams proctored?",
        "Is my camera required?", "What is the security environment?", "What happens if I switch tabs?",
        "How many tab switch warnings do I get?", "Are my answers encrypted?", "Tell me about security",
        "Is fullscreen enforced?", "What happens if time runs out?", "What is the auto-submit timeout?"
    ]),
    
    ("Before you start, please read detailed instructions, perform system checks for your webcam, and enter fullscreen mode. During the exam, a timer is always visible and answers save automatically. After submission, you will receive confirmation and await result announcements. <br/><br/><a href='https://assessments.shnoor.com/' target='_blank' style='color: #F59E0B; font-weight: bold; text-decoration: underline;'>View or learn more</a>", [
        "What should I expect?", "How do I prepare for the exam?", "What happens during the test?",
        "What happens after submission?", "When will I get my results?", "Is there a timer?",
        "Can I flag questions?", "Do my answers save?", "Preparation guide"
    ]),

    ("Our Privacy Policy ensures your personal data (like email and institution), assessment data (scores, activity logs), and technical data are securely encrypted. We monitor browser behavior for proctoring to ensure exam integrity. <br/><br/><a href='https://assessments.shnoor.com/privacy-policy' target='_blank' style='color: #F59E0B; font-weight: bold; text-decoration: underline;'>View Privacy Policy</a>", [
        "What is your privacy policy?", "Do you collect my data?", "Are my camera recordings saved?",
        "Is my data safe?", "How do you handle personal information?", "Privacy policy details",
        "Do you monitor my browser?", "What data is collected?", "Where is the privacy policy link?"
    ]),

    ("For technical support or issues with your recruitment assessments, you can reach out to info@shnoor.com (General) or proc@shnoor.com (Sales). Phone: +91-9429694298 / +91-9041914601. <br/><br/><a href='https://assessments.shnoor.com/' target='_blank' style='color: #F59E0B; font-weight: bold; text-decoration: underline;'>View or learn more</a>", [
        "How do I contact you?", "Who do I contact for technical issues?", "What is your phone number?",
        "What is the contact email?", "Where is your office?", "What is the US address?",
        "contact", "contact us", "technical support", "I need help", "Who can help me?"
    ]),

    ("Hello! I am the SHNOOR Assessments support assistant. I can help you with questions about exams, proctoring security, registration, and technical support. How can I assist you?", [
        "Hi", "Hello", "Hey", "Good morning", "Hi bot", "Are you there?", "Who are you?",
        "How are you?", "How are you doing?", "What's up?", "How is it going?",
        "Can you help me?", "Are you an AI?", "Greetings", "Hey there"
    ]),
    
    ("Got it! Let me know if you have any other questions or need further assistance with your exam.", [
        "ok", "okay", "alright", "got it", "understood", "cool", "fine", "sounds good", "make sense", "ok thanks", "kk", "sure"
    ]),

    ("You're very welcome! Good luck with your assessment!", [
        "Thanks", "Thank you", "Thanks a lot", "Thank you very much", "I appreciate it",
        "Thanks for your help", "Great, thanks", "Awesome, thank you", "Good to know",
        "Okay, thank you", "thankyou", "thank u", "ty", "thx", "tq"
    ]),

    ("Goodbye! Take care and best of luck on your placement journey.", [
        "Bye", "Goodbye", "See you later", "Catch you later", "See ya", "Have a good day",
        "Take care", "I'm leaving", "Bye for now", "Good night"
    ]),

    ("I am a highly secure AI assistant focusing on ensuring fair examination processes, so I don't tell jokes! Focus on your test!", [
        "Tell me a joke", "Say something funny", "Make me laugh", "Do you know any jokes?",
        "Are you funny?", "Sing a song", "What is your favorite color?", "Tell a joke"
    ]),

    ("I am an AI developed specifically for Shnoor International to assist students and candidates using the Secure Examination Portal.", [
        "Who made you?", "Who created you?", "Who developed you?", "Are you human?",
        "Are you a real person?", "Who programmed you?", "Are you a robot?", "What is your name?"
    ]),

    ("I specialize in answering questions about SHNOOR Assessments features, including Live Proctoring, auto-saving, scheduled tests, and technical support. What would you like to know?", [
        "What do you know?", "What can I ask you?", "How smart are you?", "What is your purpose?",
        "Why are you here?", "What questions can you answer?", "Tell me what to do"
    ])
]

csv_file = os.path.join(os.path.dirname(__file__), 'assessments_kb.csv')

with open(csv_file, mode='w', newline='', encoding='utf-8') as file:
    writer = csv.writer(file)
    writer.writerow(['Question', 'Answer'])
    count = 0
    for answer, questions in data:
        for question in questions:
            writer.writerow([question, answer])
            count += 1

print(f"Successfully generated {count} questions for Assessments in assessments_kb.csv")
