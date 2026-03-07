import { FileText, Eye, ShieldCheck, Lock } from 'lucide-react';

export const privacySections = [
    {
        id: "intro",
        icon: FileText, // Pass the component reference, not the JSX
        title: "1. Introduction",
        content: "Pakiza Public School is committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website."
    },
    {
        id: "collection",
        icon: Eye,
        title: "2. Information We Collect",
        content: "We may collect and process the following types of information:",
        subContent: [
            {
                label: "Personal Information",
                detail: "Name, Email address, Contact number, Address, Student's name and grade (if applicable), and other information you voluntarily provide."
            },
            {
                label: "Non-Personal Information",
                detail: "IP address, Browser type, Operating system, Pages visited on our site, and the Date and time of your visit."
            }
        ]
    },
    {
        id: "usage",
        icon: ShieldCheck,
        title: "3. How We Use Your Information",
        content: "We utilize the collected data to maintain our high standards of educational service:",
        list: [
            "To provide and maintain our academic services.",
            "To respond to your inquiries and support requests.",
            "To notify you about school updates and changes to our services.",
            "To monitor the security and integrity of our digital platforms."
        ]
    },
    {
        id: "security",
        icon: Lock,
        title: "4. Data Security",
        content: "We implement robust technical and organizational measures to protect your personal information from unauthorized access. However, please note that no method of electronic transmission is 100% secure."
    }
];