import React, { useState } from "react";

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b-2 py-4">
            <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{question}</span>
                <span>{isOpen ? "-" : "+"}</span>
            </div>
            <div
                className={`overflow-hidden transition-max-height duration-300 ${
                    isOpen ? "max-h-60" : "max-h-0"
                }`}
            >
                <p className="mt-2">{answer}</p>
            </div>
        </div>
    );
};
const FAQSection = () => {
    const faqs = [
        {
            question: "How can I create an account on your website?",
            answer: "To create an account, click on the 'Sign Up' button on the homepage and follow the prompts to provide your information and set up your account.",
        },
        {
            question: "Can I change my username after creating an account?",
            answer: "Yes, you can change your username by accessing your account dashboard and clicking the settings tab. Here you can edit your profile as well. Please note that some restrictions may apply.",
        },
        {
            question: "How can I reset my password if I forget it?",
            answer: "To reset your password, visit the login page and click on the 'Forgot Password' link. Follow the instructions provided to reset your password.",
        },
        {
            question: "Can I delete my account at any time?",
            answer: "Yes you can. To do this navigate to your account dashboard, click on the settings tab, scroll down to the delete account segment, Type in your email and password click delete account. An email will be sent to an admin who will delete your account within 24hr. this process is irreversible.",
        },
        {
            question: "How can I contact your support team?",
            answer: "You can reach our support team by visiting the 'Contact Us' page and filling out the contact form. We aim to respond to inquiries within 24 hours.",
        },
    ];

    return (
        <div className="container mx-auto flex flex-col md:flex-row">
            <div className="w-full md:w-1/3">
                <h2 className="font-bold text-2xl mb-6 text-white">
                    HAVE A QUESTION? GET AN ANSWER
                </h2>
            </div>
            <div className="w-full md:w-2/3 text-white bg-black p-6 rounded-xl">
                {faqs.map((faq, idx) => (
                    <FAQItem
                        key={idx}
                        question={faq.question}
                        answer={faq.answer}
                    />
                ))}
            </div>
        </div>
    );
};

export default FAQSection;
