export const projectsData = [
    {
        id: 'urbancode-edutech',
        category: 'Education',
        title: 'Urbancode Edutech',
        websiteUrl: 'https://www.urbancode.in/',
        desc: 'Web Design',
        image: '/images/project-urbancode.png',
        span: 3,
        details: {
            industry: 'Edutech',
            date: 'Sep 2025',
            tools: 'Figma, Photoshop & Chatgpt',
            heroImage: '/images/UC.png',
            overview: 'This project focuses on designing a digital platform for a training and solutions provider that delivers skill-based education and career-oriented programs.',
            problem: [
                'Learners had difficulty finding relevant courses',
                'Program value and learning outcomes were not clearly communicated',
                'Enrollment flow was complex and hard to navigate'
            ],
            solution: [
                'Designed a structured and intuitive platform',
                'Simplified course discovery and navigation',
                'Created a seamless and guided enrollment flow'
            ],
            designProcessSteps: [
                { title: 'Research', desc: 'Understanding learner needs, goals, and pain points' },
                { title: 'User Flows', desc: 'Mapping clear paths from discovery to enrollment' },
                { title: 'Wireframing', desc: 'Structuring content for clarity and accessibility' },
                { title: 'Visual Design', desc: 'Creating a clean, education-focused UI with strong hierarchy' },
                { title: 'Iteration', desc: 'Refining designs based on usability and feedback' }
            ],
            secondaryImage: '/images/UC_2.png',
            keyFeatures: [
                'Clear course categorization and learning paths',
                'Program highlights with outcomes and career benefits',
                'Simple and guided enrollment experience',
                'Trust signals such as certifications, testimonials, and mentors',
                'Responsive design optimized for all devices'
            ],
            visuals: {
                fonts: ['Inter'],
                colors: {
                    primary: '#198754',
                    secondary: '#A1A1A1',
                    interColor: '#198754',
                    gradient: 'linear-gradient(to right, #198754, #A1A1A1)'
                }
            }
        }
    },
    {
        id: 'jobzenter',
        category: 'Education',
        title: 'Jobzenter software training and placement',
        websiteUrl: 'https://jobzenter.in/',
        desc: 'Web Design',
        image: '/images/project-jobzenter.png',
        span: 3,
        details: {
            industry: 'Education & Training',
            date: 'Nov 2025',
            tools: 'Figma, Photoshop & Chatgpt',
            heroImage: '/images/JZ.png',
            secondaryImage: '/images/JZ (2) (1).png',
            secondaryImageBg: '#000000',
            overview: 'Jobzenter is a career-focused training and placement platform showcasing industry-ready IT courses, career support services, student success stories, and guidance resources. The site emphasizes helping learners upskill, prepare for placements, and secure jobs with confidence. The UI blends career guidance content with calls-to-action for enrollment and support.',
            problem: [
                'Identify trusted training programs for IT careers.',
                'Understand which courses align with market demands.',
                'Get reliable placement support and interview readiness.',
                'Engage with career services in a seamless, intuitive way.'
            ],
            solution: [
                'Strong Hero Section & Value Proposition',
                'Clear Navigation & Sticky Header',
                'Interactive Chat Assistant',
                'Visual Trust Signals',
                'Course Showcase',
                'Service Selection & CTA',
                'FAQs & Flow Diagram',
                'Footer with Utility Links'
            ],
            designProcessSteps: [
                { title: 'User Research & Goal Definition', desc: 'Identified core users: learners, job seekers, freshers, career switchers. Defined key tasks: browse courses, discover services, request support, and sign up.' },
                { title: 'Information Architecture', desc: 'Structured main site sections (Home, Courses, About, Blogs, Contact). Prioritized quick access to career services via prominent header links.' },
                { title: 'Wireframes & Layout Planning', desc: 'Designed a high-impact hero section. Grouped related content (Courses, Trust Logos, Testimonials) into card grids for easy comprehension.' },
                { title: 'Visual Design', desc: 'Used consistent typography and spacing for readability. Employed trust cues (ratings, company logos, testimonials) to reinforce value. Balanced informative content and action-oriented CTAs ("Get Started", "Download Brochure").' },
                { title: 'Interactive Elements', desc: 'Added FAQ accordions, service selection toggles, and chat widget to engage users.' },
                { title: 'Responsive & Accessible Considerations', desc: 'Layout adapts to various viewport sizes with clear controls and readable fonts. Strong contrast and spacing ensure users can scan content quickly.' }
            ],
            keyFeatures: [
                'Hero Banner with Dual CTA for course exploration and direct engagement.',
                'Sticky Navigation for seamless access to core pages.',
                'Conversational Chat Assistant for real-time assistance.',
                'Trust Logos and Testimonials to build social proof.',
                'Card-Based Course Listings for easy browsing.',
                'FAQ Accordion for quick help without clutter.',
                'Visual Placement Flowchart to show outcomes.',
                'Engaging Footer with Useful Links & Contact Info.'
            ],
            visuals: {
                fonts: ['Inter'],
                colors: {
                    primary: '#F9F58B',
                    secondary: '#A1A1A1',
                    text: '#1a1a1a',
                    gradient: 'linear-gradient(90deg, #F9F58B 0%, #FFFFFF 100%)'
                }
            }
        }
    },
    {
        id: 'progz',
        category: 'Attendance Tracker',
        title: 'Progz',
        // desc: 'Full Web Design (Student Panel), (Instructor Panel), (Admin Panel)', // Keeping original or updating? User provided "Project Overview". I'll use a short desc or keep "Web Design" like others? User title was just "PROGZ". 
        // User didn't specify the short 'desc' on the card, but implied full page content. I'll keep the existing card desc or update if it conflicts. The user prompt text starts with "PROGZ Project Overview...".
        // I will use "LMS Platform" or similar for the card desc if I need to change it, but for now I'll stick to a generic "Web Design / LMS" or just keep the old one if it fits. 
        // Actually, let's look at the old one: "Full Web Design ...". It's fine.
        // Wait, I should probably update the `image` property for the card too if they provided a hero image. 
        // User said "add these two images on the progz internal page". 
        // `image` is for the card. `details.heroImage` is for the internal page.
        // I will set `details.heroImage` to `Progz.png`.
        // I will set `details.secondaryImage` to `Progz 2.png`.

        desc: 'Full Web Design (Student Panel), (Instructor Panel), (Admin Panel)',
        image: '/images/project-progz.png',
        span: 2,
        details: {
            industry: 'SaaS / Education',
            date: 'Dec 2025',
            tools: 'React, Node.js, MongoDB',
            heroImage: '/images/Progz.png',
            secondaryImage: '/images/Progz 2.png',
            overview: 'Progz is a comprehensive Learning Management System (LMS) designed to streamline educational workflows for training institutes. The platform serves three distinct user roles—Students, Trainers, and Administrators—each with tailored interfaces and functionalities. Built with a modern tech stack (React + Vite frontend, Node.js + Express + MongoDB backend), Progz provides an intuitive, responsive, and feature-rich environment for managing courses, batches, attendance, and student progress.',
            problem: [
                'Most training institutes struggle with:',
                'Disconnected tools for courses, attendance, and progress tracking',
                'Poor UX for non-technical users',
                'Manual attendance and unclear progress visibility',
                'Weak role-based access control'
            ],
            solution: [
                'Role-Based Dashboards',
                'Real-Time Attendance System',
                'Intuitive Course Navigation',
                'Visual Progress Tracking',
                'Smart Batch Management'
            ],
            designProcessSteps: [
                { title: 'Research & Discovery', desc: 'Interfaces were cluttered and overwhelming for non-technical users. Attendance and progress tracking lacked clear visual feedback. Outcome: Defined three clear user personas (Student, Trainer, Admin).' },
                { title: 'User Flow & IA', desc: 'Separate dashboards for Students, Trainers, and Admins. Logical grouping of actions (attendance, progress, batches).' },
                { title: 'Wireframing', desc: 'Clean dashboard layouts with card-based design. Horizontal tab navigation to reduce vertical scrolling.' },
                { title: 'Visual Design System', desc: 'Rounded cards with subtle shadows for depth. Scrollable tabs with separators and hover feedback.' },
                { title: 'Interaction & Motion', desc: 'Smooth horizontal scrolling with snap behavior. Fade overlays and chevron indicators for tab navigation.' },
                { title: 'Accessibility', desc: 'Keyboard navigation and ARIA labels.' }
            ],
            keyFeatures: [
                'Real-time attendance tracking',
                'Role-specific UX',
                'Mobile-first responsive design',
                'Clean, scalable component architecture',
                'Modern, production-ready LMS experience'
            ],
            visuals: {
                fonts: ['Inter'],
                colors: {
                    primary: '#198754',
                    secondary: '#E8E8E8',
                    interColor: '#198754',
                    gradient: 'linear-gradient(to right, #198754, #E8E8E8)'
                }
            }
        }
    },
    {
        id: 'kattraan',
        category: 'Education',
        title: 'Kattraan',
        desc: 'Web Design',
        image: '/images/project-kattraan-new.jpg',
        comingSoon: { type: 'blur' },
        span: 2
    },
    {
        id: 'bookqwik',
        category: 'Booking',
        title: 'Bookqwik Coworking Spaces',
        desc: 'Web Design',
        image: '/images/project-bookqwik-new.png',
        comingSoon: { type: 'blur' },
        span: 2
    },
    {
        id: 'wepenit',
        category: 'Blog',
        title: 'Wepenit',
        desc: 'Web Design',
        image: '/images/IMG-20260131-WA0010.jpg',
        comingSoon: { type: 'blur' },
        span: 2
    }
];

export const personalProjects = [
    {
        id: 'yummy',
        category: 'Restaurant',
        title: 'Yummy',
        desc: 'Web Design',
        image: '/images/project-yummy-new.png',
        externalLink: 'https://www.behance.net/gallery/232224479/Yummy-Restaurant-Website',
        span: 3,
        details: {
            industry: 'Hospitality',
            date: 'Dec 2025',
            tools: 'Figma, HTML, CSS',
            overview: 'Yummy is a visually delightful restaurant discovery and reservation platform that emphasizes food photography and ease of booking.',
            problem: [
                'Generic restaurant websites with poor mobile usability',
                'Cluttered booking flows that lead to abandonment',
                'Inconsistent presentation of menu items'
            ],
            solution: [
                'Designed a mobile-first, clean layout',
                'Created a three-step reservation process',
                'Implemented a high-resolution menu gallery'
            ],
            designProcessSteps: [
                { title: 'Discovery', desc: 'Analyzing top food delivery and reservation apps' },
                { title: 'Branding', desc: 'Developing a warm and appetizing color palette' },
                { title: 'Layout', desc: 'Prioritizing menu visibility and booking accessibility' }
            ],
            keyFeatures: [
                'Interactive digital menu',
                'Mobile-responsive reservation system',
                'Customer review integration',
                'Dish of the day highlight'
            ]
        }
    },

    {
        id: 'go-drift',
        category: 'Car Rental',
        title: 'Go Drift',
        desc: 'Web Design',
        image: '/images/0def41278b95f4883d006781395e4c2d9ca2f059.png',
        externalLink: 'https://www.behance.net/gallery/232478033/Premium-Car-Rental-Website',
        span: 3,
        details: {
            industry: 'Automotive',
            date: 'Jan 2026',
            tools: 'Figma',
            overview: 'Premium car rental website design.'
        }
    }
];
