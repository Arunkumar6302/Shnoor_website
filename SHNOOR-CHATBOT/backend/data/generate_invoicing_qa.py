import csv
import os

data = [
    ("SHNOOR Invoicing is a smart platform to create, manage, and send professional invoices without the hassle. You can automate reminders, track payments, and stay in control of your business finances from one simple platform. <br/><br/><a href='https://invoicecloud.in/' target='_blank' style='color: #F59E0B; font-weight: bold; text-decoration: underline;'>View or learn more</a>", [
        "What is SHNOOR Invoicing?", "Tell me about this platform", "What is invoicecloud.in?",
        "What does the invoicing app do?", "Is this for billing?", "How do I create invoices?",
        "What is the purpose of this portal?", "Give me an overview of the invoicing system",
        "home", "overview"
    ]),

    ("We were founded in 2025 with a team of 50+ members and 1k+ happy clients. Our philosophy is 'Simplicity First, Built for Growth, and Customer Obsessed'. We aim to remove complexity from billing. <br/><br/><a href='https://invoicecloud.in/' target='_blank' style='color: #F59E0B; font-weight: bold; text-decoration: underline;'>Learn About Us</a>", [
        "About", "About us", "Who are you?", "When was this founded?", "How many clients do you have?",
        "What is your philosophy?", "Tell me about the company", "mission", "vision"
    ]),

    ("Our powerful features include Smart Invoice Creation (convert raw text/emails to invoices in seconds), an Intelligent Dashboard for real-time overviews, and Smart Payment Reminders. <br/><br/><a href='https://invoicecloud.in/' target='_blank' style='color: #F59E0B; font-weight: bold; text-decoration: underline;'>Explore Features</a>", [
        "What are the features?", "What features do you offer?", "Tell me about the capabilities",
        "List the features", "Does it have a dashboard?", "Can it send reminders?",
        "How fast can I create an invoice?", "Explain the features", "services", "smart invoice creation"
    ]),

    ("We offer simple plans with clear value: <b>Free Plan</b> (₹0/forever, 10 invoices/mo), <b>Professional Plan</b> (₹19/mo, unlimited invoices, custom branding, 5 users), and <b>Business Plan</b> (₹49/mo, custom templates, 24/7 support, API access, white-label). <br/><br/><a href='https://invoicecloud.in/' target='_blank' style='color: #F59E0B; font-weight: bold; text-decoration: underline;'>View Pricing</a>", [
        "What is the pricing?", "How much does it cost?", "Tell me about the plans",
        "Is there a free plan?", "What is the monthly plan?", "How much is the professional plan?",
        "How much is the business plan?", "Explain the pricing tiers", "pricing", "plans", "cost"
    ]),

    ("We have a detailed FAQ covering topics like how fast you can create an invoice, client payment options, automated recurring billing, tracking overdue invoices, and risk-free trials. <br/><br/><a href='https://invoicecloud.in/#faq' target='_blank' style='color: #F59E0B; font-weight: bold; text-decoration: underline;'>Read FAQs</a>", [
        "FAQ", "Frequently asked questions", "Can my clients pay me directly?", "Can I automate recurring billing?",
        "How do I keep track of unpaid invoices?", "Is there a risk-free way to try?", "What happens as my business scales?"
    ]),

    ("You can reach us anytime! Phone: +91-9429694298. Email: info@shnoor.com (General) or proc@shnoor.com (Sales). You can also chat with us on WhatsApp. <br/><br/><a href='https://invoicecloud.in/contact' target='_blank' style='color: #F59E0B; font-weight: bold; text-decoration: underline;'>Contact Us</a>", [
        "How do I contact you?", "Who do I contact for support?", "What is your phone number?",
        "What is the contact email?", "contact", "contact us", "technical support", "I need help", "whatsapp"
    ]),

    ("Hello! I am the SHNOOR Invoicing assistant. I can help you with questions about creating invoices, pricing plans, tracking payments, and our features. How can I assist you?", [
        "Hi", "Hello", "Hey", "Good morning", "Hi bot", "Are you there?", "Who are you?",
        "How are you?", "How are you doing?", "What's up?", "How is it going?",
        "Can you help me?", "Greetings", "Hey there"
    ]),
    
    ("Got it! Let me know if you need anything else to manage your billing smarter.", [
        "ok", "okay", "alright", "got it", "understood", "cool", "fine", "sounds good", "make sense", "ok thanks", "kk", "sure"
    ]),

    ("You're very welcome! Here to make your invoicing hassle-free.", [
        "Thanks", "Thank you", "Thanks a lot", "Thank you very much", "I appreciate it",
        "Thanks for your help", "Great, thanks", "Awesome, thank you", "Good to know",
        "Okay, thank you", "thankyou", "thank u", "ty", "thx", "tq"
    ]),

    ("Goodbye! Have a great day and happy invoicing!", [
        "Bye", "Goodbye", "See you later", "Catch you later", "See ya", "Have a good day",
        "Take care", "I'm leaving", "Bye for now", "Good night"
    ]),

    ("I'm an AI built for serious financial matters like invoicing, so my sense of humor is a bit dry! Let's get back to billing.", [
        "Tell me a joke", "Say something funny", "Make me laugh", "Do you know any jokes?",
        "Are you funny?", "Sing a song", "What is your favorite color?", "Tell a joke"
    ]),

    ("I am an AI developed specifically for Shnoor Invoicing to help businesses manage their billing effortlessly.", [
        "Who made you?", "Who created you?", "Who developed you?", "Are you human?",
        "Are you a real person?", "Who programmed you?", "Are you a robot?", "What is your name?"
    ]),

    ("I specialize in answering questions about SHNOOR Invoicing features, pricing plans, and how to automate your billing process. What would you like to know?", [
        "What do you know?", "What can I ask you?", "How smart are you?", "What is your purpose?",
        "Why are you here?", "What questions can you answer?", "Tell me what to do"
    ])
]

csv_file = os.path.join(os.path.dirname(__file__), 'invoicing_kb.csv')

with open(csv_file, mode='w', newline='', encoding='utf-8') as file:
    writer = csv.writer(file)
    writer.writerow(['Question', 'Answer'])
    count = 0
    for answer, questions in data:
        for question in questions:
            writer.writerow([question, answer])
            count += 1

print(f"Successfully generated {count} questions for Invoicing in invoicing_kb.csv")
