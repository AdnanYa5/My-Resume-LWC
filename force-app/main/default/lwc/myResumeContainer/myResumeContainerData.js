import SOCIAL from '@salesforce/resourceUrl/SOCIAL'
import nikhil from '@salesforce/resourceUrl/adnan';
export const PROFILE_IMAGE = nikhil

export const SOCIAL_LINKS = [
    {
        type:'twitter',
        label:"twitter/mohdadnan58",
        link:"https://twitter.com/MohdAdnan58",
        icon:SOCIAL+'/SOCIAL/twitter.svg'
    },
    {
        type: "facebook",
        label: "facebook/adnanmohd",
        link: "https://www.facebook.com/profile.php?id=100006855346307",
        icon: SOCIAL + '/SOCIAL/facebook.svg'
    },
    {
        type: "github",
        label: "github/adnanya5",
        link: "https://github.com/AdnanYa5",
        icon: SOCIAL + '/SOCIAL/github.svg'
    },
    {
        type: "linkedin",
        label: "linkedin/adnanuddin",
        link: "https://www.linkedin.com/in/adnanuddin-mohammed-7bb711173",
        icon: SOCIAL + '/SOCIAL/linkedin.svg'
    },
    {
        type: "trailhead",
        label: "trailhead/madnanuddin",
        link: "https://trailblazer.me/id/madnanuddin",
        icon: SOCIAL + '/SOCIAL/trailhead.svg'
    }
]

export const USER_DETAILS = {
    NAME: 'Mohammed Adnanuddin',
    ROLE: 'Senior Salesforce Developer',
    EMAIL: 'mohd.adnan58@gmail.com',
    PHONE: '+61-401354064 / +91-9819432522'
}

export const CAREER_SUMMARY = {
    HEADING: "CAREER SUMMARY",
    DESCRIPTION: "Having 5.10 years of IT experience(Wipro + Appirio) and in that approx. 5 years of Salesforce development and implementation experience along with domain expertise and 6 months of Workday experience. Have good interaction and understanding of the client needs by providing the technical solutions for the requirements. Good attitude to learn new things with honesty, practical approach and good communications skills. Started working in Australia(Melbourne) from March 2019 approx. 1.5 years and before that from India (Pune) location.",
    KEYS_POINTS: [
        "Overall 5 years of Salesforce development experience, During tenure worked for 11 different projects for 4 different clients from Energy, Healthcare, Retail and Consumer Goods domain.",
        "Currently working with one of the leading Energy client of Australia as a Salesforce Developer through WIPRO Technologies, Melbourne from March 2019 to Till Date.",
        "Before coming to Australia worked as Technical Lead(Senior Project Engineer) at WIPRO Technologies,  Pune for one of the leading Consumer Goods client in US.",
        "Good knowledge of Wipro way and Appirio way of Development and Support.",
    ]
}

export const EXPERIENCE_DATA = {
    HEADING: "Work Experience",
    EXPERIENCES: [{
            ROLE: "Senior Salesforce Developer",
            COMPANY_NAME: "Origin Energy",
            DURATION: "2019 - Present",
            DESCRIPTION: "Redesigning and Rebuilding the existing Parter Portal Community. Development of Solar and LPG applications.",
            DESCRIPTION_POINTS: [
                "Rebuilding the community with lightning components allowed Origin to have a flexible structure to future-proof. Developed a custom lightning theme with updated branding such as header, footer and logo.",
                "Developed guided referral functionality using lightning components which includes tiles, address search, file upload, validations etc.",
                "Extensively used Triggers and Trigger Handlers for doing complex business processes for Leads, Opportunities and Quote/Proposals. Inbound and Outbound integration using RESTful services (Solar).",
                "Stabilizing the already developed application (LPG)",
                "Doing Deployments using CI/CD approach."
            ],
            TECHNOLOGIES_USED: {
                HEADING: 'Technologies used',
                LIST: [
                    "Salesforce.com",
                    "Community Cloud",
                    "Sales Cloud",
                    "Service Cloud",
                    "HTML5/CSS3",
                    "Apex",
                    "Lightning Components",
                    "Restful Integration",
                    "Triggers/Trigger Framework",
                    "Omnichannel",
                    "CI/CD Autorabit",
                    "Javascript"
                ]
            },
        },
        {
            ROLE: "Lead Developer",
            COMPANY_NAME: "L'Oreal",
            DURATION: "2017 - 2019",
            DESCRIPTION: "Leading the development, Involving in requirement gathering, providing scalable solution and estimation, Leading a team of 6 in solving complex issues and enhancements for L’Oreal all Salesforce apps. Good interaction with Customer",
            DESCRIPTION_POINTS: [
                "Brought the existing Artist Community into the Lightning experience using custom components and redesigned old components to work with the Artist community such as a custom calendar in which Artists can book events and keep their profile up to date on both desktop and mobile devices.",
                "Embedding PowerBi Dashboards in Salesforce. Giving a dynamic view to user to choose dashboard accordingly.",
                "L’Oreal Sales Apps , Worked on integration with Twilio messaging.",
                "Developed Artist Survey in Salesforce(PPD EMS Survey) through connection with ClickTools",
                "Developed CAR Credit Card, A Payment Gateway Integration with XiPay for USA. Credit Cards for each account are added/displayed/modified/deleted in Salesforce and sent to SAP and Mosaic.",
                "Worked on Itegration with global Learning Management System (Docebo) to the US.",
                "Developed and Worked on SHOP Order Application, Implemented tab functionality for getting User Info along with Brand coded, Activity Codes and Order Reason codes, Next tab is to obtain Shipping Address Info and then Products and final adding approvers from list of approvers through custom approval process which is visible in Lightning UI, Implemented Address Validation through REST Integration with AddressDoctor (US), Upon saving order order is sent to SAP for Shipping via batch integration, Implemented Live Order Status functionality to track live orders using WebService(Inbound Integration)"
            ],
            TECHNOLOGIES_USED: {
                HEADING: 'Technologies used',
                LIST: [
                    "Salesforce.com",
                    "Lightning Components",
                    "Restful Integration",
                    "Triggers",
                    "HTML5/CSS3",
                    "VisualForce",
                    "Payment Gateway Integration",
                    "Asynchronous Apex",
                    "Sales Cloud",
                    "Service Cloud",
                    "Community Cloud",
                    "ClickTools",
                    "PowerBI",
                    "SOAP API",
                    "Javascript"
                ]
            }
        },
        {
            ROLE: "Salesforce Developer",
            COMPANY_NAME: "British Petroleum – (Castrol)",
            DURATION: "2016",
            DESCRIPTION: "Value Tracker acts as an intuitive tool for account managers to showcase Castrol’s services value to their customers, It provides the ability to track order performance by Castrol over a period of time, Castrol account managers can build customer’s technical services offer within the tool and update it with the passage of time, based on their customer's needs, Castrol account managers can co-create potential value targets for their customers in the form of future goals and are therefore able to associate $ value to benefits achieved using Castrol's services",
            DESCRIPTION_POINTS: [
                "Value Tracker is built as a Custom Lightning Application. Salesforce Lightning framework has been used to build the application, which is accessible from iPad browser, SF1 App, desktop/laptop browsers.",
                "Highcharts (charting library written in pure JavaScript) has been used for the complex graphical representation.",
                "Leveraged Lightning Design System to build complex tile related structure, tabular grid, etc.",
                "Used Agile methodology for development.",
            ],
            TECHNOLOGIES_USED: {
                HEADING: 'Technologies used',
                LIST: [
                    "Salesforce.com",
                    "Lightning Components",
                    "Apex",
                    "Javascript",
                    "HTML5/CSS3",
                    "SF1 App",
                    "Mobile device CSS",
                    "Lightning Design System"
                ]
            }
        },
    ]
}

export const EDUCATION_DATA = {
    ICON: SOCIAL + '/SOCIAL/education.svg',
    HEADING: "EDUCATION",
    LIST: [{
            NAME: "Master in Information Technology",
            UNIVERSITY_NAME: "Vellore Institute of Technology",
            DURATION: "2014 - 2018",
        },
        {
            NAME: "Bachelor in Computer Science",
            UNIVERSITY_NAME: "University of Mumbai",
            DURATION: "2011 - 2014",
        }
    ]
}

export const AWARDS_DATA = {
    ICON: SOCIAL + '/SOCIAL/awards.svg',
    HEADING: "AWARDS",
    LIST: [{
            NAME: "Inspiring performer from L'Oreal",
            DESCRIPTION: "Two times inspiring performer award and certificate from L'Oreal.",
        },
        {
            NAME: "Hero In the Rank(HITR) award from Appirio",
            DESCRIPTION: "Hero In the Rank(HITR) award from Appirio General Manager and Global Salesforce Head for outstanding contribution. Given only to one around the globe.",
        },
        {
            NAME: "Employee of quarter 2018 Q1 from BU",
            DESCRIPTION: "Employee of quarter 2018 Q1 from BU.",
        },
        {
            NAME: "Best team award from L'Oreal ",
            DESCRIPTION: "Best team award and certificate by hands of L’Oreal VP, awarded to L'Oreal SFDC team.",
        },
        {
            NAME: "Other Awards",
            DESCRIPTION: "Direct appreciation from Director of Salesforce L’Oreal for CAR Credit Card Project, Appirio Pat on Back award and certificate, Client recognitions and appreciations from Salesforce Head, Release Manager and Business Leads from Origin Energy, Direct Appreciation from BP Director",
        },

    ]
}

export const CERTIFICATION_DATA = {
    ICON: SOCIAL + '/SOCIAL/certification.svg',
    HEADING: "CERTIFICATIONS",
    LIST: [{
            NAME: "Salesforce Administrator",
        },
        {
            NAME: "Salesforce JavaScript Dev 1",
        },
        {
            NAME: "Salesforce Platform App Builder",
        },
        {
            NAME: "Salesforce Platform Developer 1",
        },
        {
            NAME: "Salesforce Platform Developer 2",
        },
        {
            NAME: "Salesforce Sales Cloud Consultant",
        },
        {
            NAME: "Salesforce Service Cloud Consultant",
        },
        {
            NAME: "Salesforce Community Cloud Consultant",
        },
    ]
}

export const LANGUAGES_DATA = {
    HEADING: "Languages",
    LIST: [{
            NAME: "English",
            LEVEL: "Native",
        },
        {
            NAME: "Hindi",
            LEVEL: "Professional",
        },
        {
            NAME: "Marathi",
            LEVEL: "Intermediate",
        },
        {
            NAME: "Urdu",
            LEVEL: "Intermediate",
        },
    ]
}

export const SKILLS_DATA = {
    HEADING: "SKILLS & TOOLS",
    SKILLS: [{
            HEADING: "FRONTEND",
            SKILLS_LIST: [{
                    NAME: "Aura Components",
                    LEVEL: "90"
                },
                {
                    NAME: "Web Components",
                    LEVEL: "50"
                },
                {
                    NAME: "JavaScript(ES5/ES6/ES7/ES8)",
                    LEVEL: "75"
                },
                {
                    NAME: "HTML5/CSS3",
                    LEVEL: "75"
                },
                {
                    NAME: "Mobile Apps",
                    LEVEL: "75"
                },
            ],
        },
        {
            HEADING: "BACKEND",
            SKILLS_LIST: [{
                    NAME: "Salesforce Apex Classes / Apex Triggers",
                    LEVEL: "85"
                },
                {
                    NAME: "Asynchronous Apex",
                    LEVEL: "80"
                },
                {
                    NAME: "Salesforce Integration",
                    LEVEL: "85"
                },
                {
                    NAME: "Salesforce Configuration",
                    LEVEL: "75"
                },
                {
                    NAME: "Email Functionality / Custom Approval processes",
                    LEVEL: "75"
                }
            ],
        },
        {
            HEADING: "CRM/CMS",
            SKILLS_LIST: [
                {
                    NAME: "Salesforce Custom App Cloud",
                    LEVEL: "80"
                },
                {
                    NAME: "Salesforce Sales Cloud",
                    LEVEL: "60"
                },
                {
                    NAME: "Salesforce Community Cloud",
                    LEVEL: "70"
                },
                {
                    NAME: "Salesforce Service Cloud",
                    LEVEL: "60"
                },
                {
                    NAME: "Workday",
                    LEVEL: "30"
                },
            ],
        }
    ],
    OTHERS_SKILLS: {
        HEADING: 'OTHERS',
        SKILLS_LIST: [
            "BitBucket",
            "AutoRabit",
            "Service Now",
            "Remedy",
            "Code Review / Peer Review",
            "SFDX / CI/CD",
            "JIRA",
            "Debugging of complex issues",
            "Unit Testing",
            "Flosum",
            "Confluence",
            "BootStrap",
            "Mentoring team",
            "Providing Estimation",
            "Developing Resuable Components",
            "Following Coding Best Practices"
        ]
    }
}

export const INTERESTS_DATA = {
    HEADING: "Interests",
    LIST: ["Gaming", "Instrumental Music", "Cricket"]
}