import csv
import os

data = [
    ("SHNOOR HRM is a next-generation HR management application for small to large-scale businesses. Built with Vue and Laravel, it offers major features to manage your company employees and improve business growth with no hidden fees. <br/><br/><a href='https://hrm.shnoor.com' target='_blank' style='color: #F59E0B; font-weight: bold; text-decoration: underline;'>View or learn more</a>", [
        "What is SHNOOR HRM?", "Tell me about this platform", "What is this website?",
        "What does the HR management app do?", "Is this for small businesses?", "Is this for large businesses?",
        "What technology is it built on?", "Does it have hidden fees?", "What is the purpose of this HR platform?",
        "About the HRM platform", "Give me an overview of the HR system", "Why should I use your HR software?"
    ]),

    ("Our HR platform allows you to start with a free account, edit online with no software needed, supports multiple languages, and provides a highly safe and secure environment. <br/><br/><a href='https://hrm.shnoor.com' target='_blank' style='color: #F59E0B; font-weight: bold; text-decoration: underline;'>View or learn more</a>", [
        "What are the benefits?", "Is it free to start?", "Do I need to download software?",
        "Does it support multiple languages?", "Is the platform secure?", "Is my data safe?",
        "Can I edit online?", "What are the main advantages?", "Why choose your HR system?",
        "Tell me the benefits", "Do you have language support?", "Is there a free trial?"
    ]),

    ("We offer a comprehensive suite of features including: One Click Payroll Processing, Company Asset Management, Multiple Locations support, Dynamic Letter Heads, Leave Management, Attendance Tracking, Multi-Language support, and Employee Survey Forms. <br/><br/><a href='https://hrm.shnoor.com/features' target='_blank' style='color: #F59E0B; font-weight: bold; text-decoration: underline;'>Explore HRM Features</a>", [
        "What are the features?", "What features do you offer?", "Tell me about your capabilities",
        "List the features", "What can this HR platform do?", "What are the modules?",
        "Does it have payroll?", "Does it have asset management?", "Can I manage multiple locations?",
        "Do you have attendance tracking?", "What are the core capabilities?", "Explain the features", "services"
    ]),

    ("The Employee & Staff Management module lets you easily manage employees based on their roles, locations, and positions. You can assign roles and managers, track leaves and attendance, and provide employees with a powerful personal dashboard.", [
        "How does employee management work?", "Tell me about staff management", "Can I assign roles?",
        "Can I manage managers?", "Is there an employee dashboard?", "How do I manage staff?",
        "Does it track location based employees?", "Can I manage employee leaves?", "What is the staff management feature?",
        "Explain employee management", "How do I assign positions?"
    ]),

    ("Our Payroll and Salary Management system makes it easy to manage employee salaries. It features One Click Payroll, automated Salary Slips, and easy tracking for Increments and Promotions.", [
        "Tell me about payroll", "How does salary management work?", "Can I generate salary slips?",
        "How do I process payroll?", "Is there one click payroll?", "How do you handle promotions?",
        "Can it track increments?", "Explain the payroll system", "What is salary management?",
        "Do you provide payslips?", "How fast is payroll processing?"
    ]),

    ("The Accounting module helps you manage company accounts and their expenses effortlessly. It includes Expense Management, Offboarding workflows, and Employee Survey Forms.", [
        "Do you have accounting?", "How do I manage expenses?", "Tell me about expense management",
        "Does it handle offboarding?", "What about company accounts?", "Can I create survey forms?",
        "Explain the accounting feature", "How does offboarding work?", "What is expense management?"
    ]),

    ("Our great and powerful features include: HR Management, Employee Management, Asset Management, Shifts, Appreciations, Holiday, Leave Management, Company Policy, Attendance, Roles, Permissions, News, Offboarding, Survey Forms, Accounting, Payroll, Increment/Promotion, Currencies, Expenses, Awards, and Salary Slips. <br/><br/><a href='https://hrm.shnoor.com/features' target='_blank' style='color: #F59E0B; font-weight: bold; text-decoration: underline;'>Explore All Modules</a>", [
        "What are your great and powerful features?", "List all your features", "Do you manage shifts?",
        "Do you handle company policy?", "Can I give awards?", "Do you track holidays?",
        "Does it have permissions?", "Can it handle multiple currencies?", "Tell me about appreciations",
        "What modules are included in the powerful features?"
    ]),

    ("We offer a Free plan (no credit card required), a Monthly plan (₹499 billed monthly for 50 users with all modules included), and a Shnoor specific plan (₹3500 billed monthly). You can manage projects and talent in a single system. <br/><br/><a href='https://hrm.shnoor.com/pricing' target='_blank' style='color: #F59E0B; font-weight: bold; text-decoration: underline;'>View Pricing Details</a>", [
        "What is the pricing?", "How much does it cost?", "Tell me about the plans",
        "Is there a free plan?", "What is the monthly plan?", "How much is the Shnoor plan?",
        "Do I need a credit card?", "How many users on the monthly plan?", "What are the payment options?",
        "Explain the pricing tiers", "How do I choose a plan?", "Are payments secure?", "pricing"
    ]),

    ("You can connect with us for a demo! Email us at info@shnoor.com, call us at 9429694298, or visit us at 10009 Mount Tabor Road, Odessa, Missouri USA. <br/><br/><a href='https://hrm.shnoor.com/contact' target='_blank' style='color: #F59E0B; font-weight: bold; text-decoration: underline;'>Contact Us</a>", [
        "How do I contact you?", "Where are you located?", "What is your phone number?",
        "Can I get a demo?", "How do I request a demo?", "What is the contact email?",
        "Where is your office?", "What is the US address?", "How can I connect with your team?",
        "Tell me your contact details", "I want a demo", "contact", "contact us"
    ]),

    ("Hello! I am the SHNOOR HRM support assistant. I can help you with questions about our HR platform, payroll, employee management, and accounting features. How can I assist you?", [
        "Hi", "Hello", "Hey", "Good morning", "Hi bot", "Are you there?", "Who are you?",
        "How are you?", "How are you doing?", "What's up?", "How is it going?",
        "I need help", "Can you help me?", "Are you an AI?", "Are you a chatbot?",
        "Greetings", "Hey there", "Is anyone there?", "Yo", "Howdy", "Good afternoon", "Good evening"
    ]),
    
    ("Goodbye! Have a great day and let us know if you need any more help managing your HR workflows.", [
        "Bye", "Goodbye", "See you later", "Catch you later", "See ya", "Have a good day",
        "Take care", "I'm leaving", "Bye for now", "Good night", "That is all", "Thanks bye",
        "Nothing else", "Have a good one", "Farewell", "I have to go", "Talk to you later"
    ]),

    ("You're very welcome! Managing HR can be complex, so I'm always here to help.", [
        "Thanks", "Thank you", "Thanks a lot", "Thank you very much", "I appreciate it",
        "Thanks for your help", "Great, thanks", "Awesome, thank you", "Good to know",
        "Okay, thank you", "Thanks for the info", "Much appreciated", "Many thanks", "That helped"
    ]),

    ("I spend all my time calculating payroll and tracking attendance, so I'm not much of a comedian! How can I assist you with your HR needs today?", [
        "Tell me a joke", "Say something funny", "Make me laugh", "Do you know any jokes?",
        "Are you funny?", "Sing a song", "What is your favorite color?", "Do you like humans?",
        "Tell me a story", "Are you smart?", "What is 2+2?", "Do you like pizza?", "Tell a joke"
    ]),

    ("I am an AI developed specifically for Shnoor International to assist users with the Next Generation SHNOOR HR Management platform.", [
        "Who made you?", "Who created you?", "Who developed you?", "Are you human?",
        "Where do you come from?", "What are you made of?", "Are you a real person?",
        "Who is your boss?", "Who programmed you?", "Are you a robot?", "What is your name?"
    ]),

    ("I specialize in answering questions about SHNOOR HRM features, including Payroll processing, Employee tracking, Asset management, and Accounting. Ask me anything about these modules!", [
        "What do you know?", "What can I ask you?", "How smart are you?", "What is your purpose?",
        "Why are you here?", "What questions can you answer?", "Tell me what to do",
        "I don't know what to ask", "Help me understand", "What are your limitations?", "Give me examples"
    ])
]

csv_file = os.path.join(os.path.dirname(__file__), 'hrm_kb.csv')

with open(csv_file, mode='w', newline='', encoding='utf-8') as file:
    writer = csv.writer(file)
    writer.writerow(['Question', 'Answer'])
    count = 0
    for answer, questions in data:
        for question in questions:
            writer.writerow([question, answer])
            count += 1

print(f"Successfully generated {count} questions for HRM in hrm_kb.csv")
