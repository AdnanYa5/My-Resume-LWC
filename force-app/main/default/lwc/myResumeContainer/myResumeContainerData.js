import SOCIAL from '@salesforce/resourceUrl/SOCIAL'
import adnan from '@salesforce/resourceUrl/adnan';
export const PROFILE_IMAGE = adnan

export const SOCIAL_LINKS = [
    {
        type: "linkedin",
        label: "linkedin/adnanuddin",
        link: "https://www.linkedin.com/in/adnanuddin-mohammed",
        icon: SOCIAL + '/SOCIAL/linkedin.svg'
    },
    /*{
        type: 'twitter',
        label: "twitter/mohdadnan58",
        link: "https://twitter.com/MohdAdnan58",
        icon: SOCIAL + '/SOCIAL/twitter.svg'
    },
    {
        type: "facebook",
        label: "facebook/adnanmohd",
        link: "https://www.facebook.com/profile.php?id=100006855346307",
        icon: SOCIAL + '/SOCIAL/facebook.svg'
    },*/
    {
        type: "github",
        label: "github/adnanya5",
        link: "https://github.com/AdnanYa5",
        icon: SOCIAL + '/SOCIAL/github.svg'
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
    ROLE: 'Salesforce Tech Lead / Lead Salesforce Developer',
    EMAIL: 'mohd.adnan58@gmail.com',
    //PHONE: '+61-401354064 / +91-9819432522'
    //Keeping only one number for privacy
    PHONE: '+61-401354064'
}

export const CAREER_SUMMARY = {
    HEADING: "CAREER SUMMARY",
    DESCRIPTION: "Adaptable IT professional with good knowledge of Enterprise Project Life cycle methodology, Dedicated Technical Lead well-versed in analyzing and mitigating risk and finding quality-focussed secure solutions. Having 11+ years of IT experience and in that 10+ years of Salesforce development and implementation experience along with domain expertise. Have good interaction and understanding of the client needs by providing the technical solutions for the requirements. Good attitude to learn new things with honesty, practical approach and good communications skills. Started working in Australia(Melbourne) from March 2019 approx. 7 years and before that from India (Pune) location.",
    KEYS_POINTS: [
        "Overall 10+ years of Salesforce development experience, During tenure worked for 15 different projects for 7 different clients ranging from Motoring Services, Financial Services, Energy, Healthcare, Retail and Consumer Goods domain.",
        "Currently working with a leading Automotive service provider of Australia as a Lead Salesforce Developer from Feb 2023 to Till Date.",
        "Exemplary Team Leader adept at fostering collaboration, while mentoring and developing team member's skills for collective success.",
        //"Currently working with one of the leading Financial Services client of Australia as a Tech Lead through Accenture Australia, Melbourne from Feb 2021 to Till Date.",
        "Worked with one of the leading Financial Services client of Australia as a Tech Lead through Accenture Australia, Melbourne from April 2021 to Feb 2023.",
        //"Worked with one of the leading Energy client of Australia as a Salesforce Developer through WIPRO Technologies, Melbourne from March 2019 to Feb 2021",
        "Before coming to Australia worked as Technical Lead(Senior Project Engineer) at WIPRO Technologies,  Pune for one of the leading Consumer Goods client in US.",
        "Good knowledge of Advanced Salesforce Development, Support and different processes involved in development and delivery.",
    ]
}

export const EXPERIENCE_DATA = {    
    HEADING: "Work Experience",
    EXPERIENCES: [{
            ROLE: "Lead Salesforce Developer",
            COMPANY_NAME: "Australian Motoring Services",
            DURATION: "Feb 2024 - Till Date",
            DESCRIPTION: "Leading, developing and maintaining Salesforce applications for Australian Motoring Services.",
            DESCRIPTION_POINTS: [
                "Leading the delivery of Call Center Case management system in Salesforce for AMS.",
                "Involved in MB project, right from the project planning phase till delivery and hypercare.",
                "Implemented and Streamlined Digital Dispatch framework within Salesforce.",
                "Solutionized, Lead and Delivered Geolocation capture via SMS for Call Center Agents for Roadside Assistance within Salesforce.",
                "Solutionized, Lead and Delivered Customer Care Product for AMS leveraging Knowledge Management.",
                "Involved in org maintainence.",
                "Maintaining Bitbucket pipelines, certificates, connected apps, SF pacakages, Genesys and MessageMedia configuration.",
                "Leveraging best practices and standardization including quality and security throughout the delivery.",
                "Being a Salesforce Technical Lead to review PR's, Production deployment, Maintaining documents, Training, Engaging with Business.",
                "Helping and providing guidance to team members."
            ],
            TECHNOLOGIES_USED: {
                HEADING: 'Technologies used',
                LIST: [
                    "Salesforce.com",
                    "Service Cloud",
                    "Lightning Web Components",
                    "Apex",
                    "Restful Integration",
                    "Platform Events",
                    "Frameworks",
                    "Bitbucket",
                    "YML pipelines",
                    "CI/CD",
                    "SFDX",
                    "Genesys",
                    "MessageMedia"
                ]
            },
        },{
            ROLE: "Salesforce Tech Lead",
            COMPANY_NAME: "ANZ Bank",
            DURATION: "April 2021 - Feb 2024",
            DESCRIPTION: "Leading and Developing Complaint Management System (CMOS).",
            DESCRIPTION_POINTS: [
                "Successfully developed and delivered Complaint Management System for ANZ Bank in Salesforce, Heavily involved in R2 release.",
                "Lead the transformation of current system to a low-code system with the introduction of OmniStudio",
                "Lead and Developed services, features such as Apex Email Services, Complaints capture, Framework based integrations within the delivery",
                //"Lead and Developed Apex Email Services, Customer Complaint capture in LWC, Revamping integration using framework amd processes including but not limited to Collections using Apex, Product management, Auto Indexing.",
                //"Extensively used LWC and Jest for Complaint capture.",
                //"Leveraging SFDX development model of ANZ, using Scratch Orgs and Epic Sandboxes for development.",
                //"Reviewing team members work(PRs), Giving knowledge transfer to new members in team.",
                "Mentored other developers on the team to help them complete their assigned development tasks and also help them understand the big picture.",
                "Worked with 5-10 member QA team to complete functional and regression testing of various releases.",
                "Worked with Businness side analysts as well as tech side analysts by providing strong technical and functional expertise to gather end to end business requirements and translates them to Salesforce technical functionalities.",
                "Coordinating with external system stake holders and developers to solutionize integrations between Salesforce and other applications at enterprise level.",
                "Being core member of Salesforce COE and helping Solution Architects with the design with Security at its core to be presented at Design Authority",
                "Implementing Salesforce best practices within the COE and delivery across the platform",
                "Leveraging CI/CD pipeline for pushing in different orgs and doing deployments.",
                "As a technical Lead worked on analyzing the list of metadata components, providing peer reviews to not just dedicated application but at overall engineering practice and coordinating deployments"
                //"Automating the delivery process"
                //"Good understanding of ANZ way of working. Including ANZ design and delivery processes."
            ],
            TECHNOLOGIES_USED: {
                HEADING: 'Technologies used',
                LIST: [
                    "Salesforce.com",
                    "Service Cloud",
                    "Lightning Web Components",
                    "Jest Testing",
                    "Apex",
                    "EmailServices",
                    "Restful Integration",
                    "Platform Events",
                    "Frameworks",
                    "GitHub",
                    "GitHub Actions",
                    "CI/CD",
                    "SFDX",
                    "OmniStudio"
                ]
            },
        }, {
            ROLE: "Senior Salesforce Developer",
            COMPANY_NAME: "Department of Health and Services (DHSS) Australia",
            DURATION: "2021 - 2 months",
            DESCRIPTION: "Developing Australia's vaccine management and distribution system in Salesforce.",
            DESCRIPTION_POINTS: [
                "Developed and Delivered successfully vaccine management system using Salesforce Community Cloud.",
                "Main processes includes onboarding of pharmacies, ordering of vaccines, waste management and fulfillment via external systems along with reporting.",
                "Used custom theme, onboarding forms, first time logins using unique code mapped via Accounts and Contacts.",
                "Extensively used Apex triggers for logic building, Lightning components for ordering vaccines, Salesforce Flow for different processes in Community and Web Services for Integrations.",
                "Deadline was just four weeks. Pressure from Government for delivery during peak Covid time. Worked with CTA and Lead of Accenture, Successfully delivered vaccines through the system developed and on time which was appreciated by President of DHSS himself."
            ],
            TECHNOLOGIES_USED: {
                HEADING: 'Technologies used',
                LIST: [
                    "Salesforce.com",
                    "Community Cloud",
                    "Lightning Components",
                    "Apex",
                    "Restful Integration",
                    "Triggers"
                ]
            },
        }, {
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
                "Worked on Integration with global Learning Management System (Docebo) to the US.",
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

export const RECOGNITIONS_DATA = {
    ICON: SOCIAL + '/SOCIAL/awards.svg',
    HEADING: "RECOGNITIONS",
    LIST: [{
            NAME: "ANZ Bank Salesforce Head",
            DESCRIPTION: "Impressed by the correctness and completeness of the Complaint Management components which included LWC, Jests, Integration Mocks, Framework based development, Catering positive and negative scenarios, etc. ",
        },
        {
            NAME: "ANZ Bank Technology Head",
            DESCRIPTION: "For the successful delivery of Complaint Management System (CMOS) R2 which included lots of components and integration with other systems",
        },
        {
            NAME: "DHSS Head",
            DESCRIPTION: "Quick delivery of the project in 3 weeks due to high demand from Government. Australia's first Covid Vaccine Ordering System",
        },
        {
            NAME: "Others",
            DESCRIPTION: "Direct appreciation from Director of Salesforce L’Oreal for CAR Credit Card Project, Client recognitions and appreciations from Salesforce Head, Release Manager and Business Leads from Origin Energy, Direct Appreciation from BP Director",
        },
    ]
}

export const AWARDS_DATA = {
    ICON: SOCIAL + '/SOCIAL/awards.svg',
    HEADING: "AWARDS",
    LIST: [{   
            NAME: "The force of the month award",
            DESCRIPTION: "Awarded in ANZ Bank.",
        },{
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
            NAME: "Appirio Pat on Back",
            DESCRIPTION: "Appirio Pat on Back award and certificate",
        },

    ]
}

export const CERTIFICATION_DATA = {
    ICON: SOCIAL + '/SOCIAL/certification.svg',
    HEADING: "16x CERTIFICATIONS",
    LIST: [{
            NAME: "Salesforce Certified System Architect",
        },
        {
            NAME: "Salesforce Certified Application Architect",
        },
    ]
}

export const TRAININGS_UNDERTAKEN_DATA = {
    HEADING: "Trainings Undertaken",
    LIST: [
        {
            NAME: "People Lead Series - Accenture",
            DESCRIPTION: "Four days training on people management in Accenture",
        },
        {
            NAME: "DX@Scale - Accenture",
            DESCRIPTION: "Automated package development model and deployment training",
        },
        {
            NAME: "Omnistudio - Accenture",
            DESCRIPTION: "Omnistudio consultant training",
        },
        {
            NAME: "Salesforce Engineering - Accenture",
            DESCRIPTION: "Weekly training session for Salesforce Engineering",
        },
    ]
}

export const TRAININGS_PROVIDED_DATA = {
    HEADING: "Trainings Provided",
    LIST: [{
            NAME: "UI/UX - Accenture",
            DESCRIPTION: "Continuous LWC and UI training within organisation for all levels",
        },
        {
            NAME: "Jest testing - ANZ Bank",
            DESCRIPTION: "Training team mates over Jest testing",
        },
        {
            NAME: "Salesforce Overall training - L'Oreal",
            DESCRIPTION: "Training team mates and new joiners over overall core Salesforce Development and Support",
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

export const RESUABLE_COMPONENTS_DATA = {
    HEADING: "Reusable Components",
    LIST: [{
            NAME: "APEX Access Checker",
            DESCRIPTION: "Reusable Utility Class which leverages stripInaccessible",
            GITHUB_LINK: "https://github.com/AdnanYa5/APEX_Access_Checker",
        },
        {
            NAME: "LWC File Upload",
            DESCRIPTION: "Reusable custom file upload component",
            GITHUB_LINK: "https://github.com/AdnanYa5/fileUploadLWC",
        },
    ]
}

export const SKILLS_DATA = {
    HEADING: "SKILLS & TOOLS",
    SKILLS: [{
            HEADING: "ARCHITECTURE / DESIGN / SOLUTIONING",
            SKILLS_LIST: [{
                    NAME: "Component Level Design (CLD)",
                    LEVEL: "70"
                },
                {
                    NAME: "Security",
                    LEVEL: "70"
                },
                {
                    NAME: "SFDX",
                    LEVEL: "75",
                    NOTES: "(SO, Branching Strategy, Sandbox management, Deployment, Setup, CI/CD etc.)"
                },
                {
                    NAME: "Frameworks",
                    LEVEL: "70"
                },
                {
                    NAME: "Integrations",
                    LEVEL: "70"
                },
                {
                    NAME: "AI adoption",
                    LEVEL: "25"
                }
            ],
        },
        {
            HEADING: "FRONTEND",
            SKILLS_LIST: [{
                    NAME: "Aura Components",
                    LEVEL: "70"
                },
                {
                    NAME: "Web Components",
                    LEVEL: "80"
                },
                {
                    NAME: "JEST Testing",
                    LEVEL: "70"
                },
                {
                    NAME: "JavaScript",
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
                    NAME: "Email Services / Custom Approval processes",
                    LEVEL: "75"
                },
                {
                    NAME: "Object Oriented Programming",
                    LEVEL: "60"
                },
            ],
        },
        {
            HEADING: "CRM/CMS",
            SKILLS_LIST: [{
                    NAME: "Salesforce Custom App Cloud",
                    LEVEL: "80"
                },
                {
                    NAME: "Omnistudio",
                    LEVEL: "70"
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
                    LEVEL: "80"
                },
                {
                    NAME: "Salesforce Data Cloud",
                    LEVEL: "20"
                },
                {
                    NAME: "Agentforce",
                    LEVEL: "20"
                }
            ],
        }
    ],
    OTHERS_SKILLS: {
        HEADING: 'OTHERS',
        SKILLS_LIST: [
            "People Management",
            //"Mentoring",
            "Project Management",
            //Explain different project management tools such as Service now, JIRA, Confluence
            "Continuous Integrations",
            "Continuous Deployments",
            //Explain Harness and doing deployments, AutoRabit / Flosum etc
            "Code Maintenance",
            //Explain Github, BitBucket, GithubActions
            "Error Logging",
            //Explain framework and Splunk
            //"Github",
            "UI Developer",
            //Explain Mobile development, W3CAG Accessibility, JS, CSS, Bootstrap 
            //"BitBucket",
            //"Doing Deployments",
            //"Service Now",
            //"Remedy",
            //"Code Review / Peer Review",
            "SFDX / CI/CD",
            //"JIRA",
            "Debugging of complex issues",
            //"Unit Testing",
            //"AutoRabit / Flosum",
            //"Confluence",
            //"BootStrap",
            "Mentoring team",
            "Providing Estimation",
            //"Developing Resuable Components",
            //"Following Coding Best Practices",
            
        ]
    }
}

export const INTERESTS_DATA = {
    HEADING: "Interests",
    LIST: ["Gaming", "Instrumental Music", "Cricket", "Motorcycle Riding"]
}