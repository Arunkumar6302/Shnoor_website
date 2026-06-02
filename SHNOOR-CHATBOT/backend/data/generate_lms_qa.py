import csv
import os

data = [
    ("Shnoor International helps organizations deliver structured training, practical learning, certification readiness, and measurable outcomes through one modern learning ecosystem. <br/><br/><a href='https://lms.shnoor.com' target='_blank' style='color: #F59E0B; font-weight: bold; text-decoration: underline;'>View or learn more</a>", [
        "What is SHNOOR LMS?", "What is this platform?", "Tell me about this learning platform.",
        "What is your mission?", "What is your vision?", "What is the purpose of SHNOOR LMS?",
        "Why should I use SHNOOR LMS?", "What do you do?", "What is the goal of this LMS?",
        "About this platform", "Give me an overview of the LMS", "What does your company do?",
        "What is the learning ecosystem?", "Who is this LMS for?", "What is the platform's vision?"
    ]),

    ("Our platform offers eight core capabilities designed for enterprise-ready delivery: Structured cohorts, Live instruction, Practice labs, Progress tracking, Certification paths, Compliance readiness, Fast onboarding, and Global accessibility. <br/><br/><a href='https://lms.shnoor.com' target='_blank' style='color: #F59E0B; font-weight: bold; text-decoration: underline;'>Explore LMS Capabilities</a>", [
        "What are the features present in this?", "What are the features?", "Tell me about your capabilities",
        "What features do you offer?", "What can this platform do?", "Platform features",
        "List the features", "What are your core capabilities?", "Does it have progress tracking?",
        "Does it have certification paths?", "Can it handle fast onboarding?", "Is it globally accessible?",
        "Tell me the platform features", "What makes this LMS special?", "Explain the features"
    ]),

    ("We offer every learning format built for the way your teams actually work, including: Instructor-led training, Private corporate programs, Practice arena, Facilitated labs, and Exam preparation. <br/><br/><a href='https://lms.shnoor.com' target='_blank' style='color: #F59E0B; font-weight: bold; text-decoration: underline;'>Explore Training Programs</a>", [
        "What are the training options?", "Tell me about training", "How do you train people?",
        "What kind of training is available?", "Do you offer instructor-led training?", "Are there corporate programs?",
        "Do you have a practice arena?", "Do you have facilitated labs?", "Is there exam preparation?",
        "How does training work?", "Explain the training formats", "What learning formats do you support?",
        "Can I get private training?", "What are your training services?", "Tell me about corporate training"
    ]),

    ("Our clear learning workflow operates in three steps: 1. Launch role-based journeys (create onboarding, compliance, and upskilling tracks). 2. Deliver guided learning (combine live sessions, self-paced modules, and practice labs). 3. Validate mastery (use assessments, assignments, and certification paths to measure skill readiness). <br/><br/><a href='https://lms.shnoor.com' target='_blank' style='color: #F59E0B; font-weight: bold; text-decoration: underline;'>View or learn more</a>", [
        "How it works?", "How does it work?", "What is the learning workflow?",
        "Explain the workflow", "How do I launch journeys?", "How is mastery validated?",
        "How do you deliver learning?", "What is the process?", "Tell me how the system works",
        "How does the LMS operate?", "What are the steps?", "Can you explain the workflow?",
        "How to use the platform?", "What is the learning process?", "How do we measure skill readiness?"
    ]),
    
    ("We have successfully onboarded 500+ learners across various programs, providing 8 core platform capabilities with 99.9% reliable learning operations.", [
        "How many learners do you have?", "What is your reliability?", "Do you have a lot of users?",
        "How many people use this?", "What is the uptime?", "Is the platform reliable?",
        "Give me some statistics", "How big is the platform?", "How many capabilities do you have?",
        "How many learners are onboarded?", "What is the completion rate?", "Is this an enterprise platform?",
        "Tell me about your scale", "Is it 99.9% reliable?", "Can you handle enterprise delivery?"
    ]),

    ("Let's plan the right learning experience for your team! You can reach out for enterprise training, private programs, certification pathways, or platform guidance.<br/><br/><b>Emails:</b> info@shnoor.com (General), proc@shnoor.com (Sales)<br/><b>Phone:</b> +91-9429694298 or +91-9041914601<br/><b>Address:</b> 10009 Mount Tabor Road, Odessa, Missouri, United States<br/><br/>For technical issues with course access, you can also reach support@shnoor.com.<br/><br/><a href='https://lms.shnoor.com/contact' target='_blank' style='color: #F59E0B; font-weight: bold; text-decoration: underline;'>View Contact Page</a>", [
        "How do I get help?", "Who do I contact for support?", "I forgot my password.",
        "I can't log in.", "How do I reset my password?", "My course isn't loading.",
        "Where is the help desk?", "Do you have technical support?", "How do I contact admin?",
        "Is there an email for support?", "I have an issue with an exam.", "Who can help me?",
        "Why is my account locked?", "How do I change my email address?", "What are the support hours?",
        "contact", "contact us", "phone number", "email address", "where are you located", "sales email"
    ]),
    
    ("Hello! I am the SHNOOR LMS support assistant. I am doing great! I can help you with courses, exams, certifications, and technical support. How can I assist you?", [
        "Hi", "Hello", "Hey", "Good morning", "Hi bot", "Are you there?", "Who are you?",
        "How are you?", "How are you doing?", "What's up?", "How is it going?",
        "I need help", "Can you help me?", "Are you an AI?", "Are you a chatbot?",
        "Greetings", "Hey there", "Is anyone there?", "Yo", "Howdy", "Good afternoon", "Good evening"
    ]),
    
    ("Goodbye! Have a great day and feel free to return if you need help with your courses.", [
        "Bye", "Goodbye", "See you later", "Catch you later", "See ya", "Have a good day",
        "Take care", "I'm leaving", "Bye for now", "Good night", "That is all", "Thanks bye",
        "Nothing else", "Have a good one", "Farewell", "I have to go", "Talk to you later"
    ]),

    ("You're very welcome! Let me know if you have any other questions about the LMS.", [
        "Thanks", "Thank you", "Thanks a lot", "Thank you very much", "I appreciate it",
        "Thanks for your help", "Great, thanks", "Awesome, thank you", "Good to know",
        "Okay, thank you", "Thanks for the info", "Much appreciated", "Many thanks", "That helped"
    ]),

    ("I am a serious LMS assistant, so I don't have many jokes! But I do know that learning is fun. How can I help you with your training?", [
        "Tell me a joke", "Say something funny", "Make me laugh", "Do you know any jokes?",
        "Are you funny?", "Sing a song", "What is your favorite color?", "Do you like humans?",
        "Tell me a story", "Are you smart?", "What is 2+2?", "Do you like pizza?", "Tell a joke"
    ]),

    ("I am an AI developed specifically for Shnoor International to assist users with the SHNOOR Learning Management System.", [
        "Who made you?", "Who created you?", "Who developed you?", "Are you human?",
        "Where do you come from?", "What are you made of?", "Are you a real person?",
        "Who is your boss?", "Who programmed you?", "Are you a robot?", "What is your name?"
    ]),

    ("I specialize in answering questions about SHNOOR LMS features, training options, compliance, and onboarding. Feel free to ask about any of our platform capabilities!", [
        "What do you know?", "What can I ask you?", "How smart are you?", "What is your purpose?",
        "Why are you here?", "What questions can you answer?", "Tell me what to do",
        "I don't know what to ask", "Help me understand", "What are your limitations?", "Give me examples"
    ])
]

csv_file = os.path.join(os.path.dirname(__file__), 'lms_kb.csv')

with open(csv_file, mode='w', newline='', encoding='utf-8') as file:
    writer = csv.writer(file)
    writer.writerow(['Question', 'Answer'])
    count = 0
    for answer, questions in data:
        for question in questions:
            writer.writerow([question, answer])
            count += 1

print(f"Successfully generated {count} questions for LMS in lms_kb.csv")
