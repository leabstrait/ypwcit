import {
    facebook,
    instagram,
    twitter,
} from "../assets/icons";


import {
    developer,
    projectManager,
    cyberSecurityEngineer,
    dataScientist,
} from "../assets/images";

export const navLinks = [
    { href: "#about", label: "About" },
    { href: "#events", label: "Events" },
    { href: "#careers", label: "Careers" },
    { href: "#contact", label: "Contact" },
];

export const roles = [
    {
        imgURL: developer,
        label: "Software Developer",
        subtext:
            "Do you want to create and develop innovative software solutions? Are you eager to solve complex problems through coding?",
    },
    {
        imgURL: dataScientist,
        label: "Data Scientist",
        subtext:
            "Do you want to analyze and interpret complex data? Are you eager to uncover insights and drive decision-making through data science?",
    },
    {
        imgURL: cyberSecurityEngineer,
        label: "Cyber Security Engineer",
        subtext:
            "Do you want to protect your systems and networks from potential threats? Are you eager to implement security measures and ensure the safety of your digital assets?",
    },
    {
        imgURL: projectManager,
        label: "Project Manager",
        subtext:
            "Do you want to lead a team of developers and designers? Are you eager to ensure that projects are successful and meet deadlines?",
    },
];

export const financialItSectors = [
    {
        imgURL: developer,
        label: "Transactional Banking",
        subtext:
            "Transactional Banking is a highly specialized area of banking that focuses on the daily transactions between banks and their customers.",
    },
    {
        imgURL: cyberSecurityEngineer,
        label: "Investments",
        subtext:
            "Investments banking is a type of banking that focuses on the management and growth of investment portfolios.",
    },
    {
        imgURL: dataScientist,
        label: "Trading",
        subtext:
            "Trading banking is a type of banking that focuses on the purchase and sale of financial instruments, such as stocks, bonds, and commodities.",
    },
    {
        imgURL: projectManager,
        label: "Wealth Management",
        subtext:
            "Wealth Management banking is a type of banking that focuses on the management and growth of investment portfolios.",
    },
];


export const footerLinks = [
    {
        title: "Useful Links",
        links: [
            { name: "Link 1", link: "/" },
            { name: "Link 2", link: "/" },
            { name: "Link 3", link: "/" },
            { name: "Link 4", link: "/" },
            { name: "Link 5", link: "/" },
            { name: "Link 6", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "Privacy policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "contact@wcit.org.uk", link: "mailto:contact@wcit.org.uk" },
            { name: "+4407123456789", link: "tel:+4407123456789" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];
