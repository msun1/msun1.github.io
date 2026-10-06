// Keep almost all copy here so future updates are easy.

// Update image `src` values as you add photos to public/images/.



export const portfolio = {

  name: 'Michelle Sun',

  headline: 'Software engineer, creative builder & designer',

  intro:

    'I’m a senior studying Computer Science at UIUC. I love building thoughtful software, designing user interfaces, and taking ideas from messy sketches to products people can actually use.',

  heroImage: './propic.png',

  education: {

    school: 'University of Illinois Urbana-Champaign',

    degree: 'B.S. Computer Science',

    extra: 'Minor in Business',

    graduation: 'Expected May 2027 Graduation',

    gpa: '3.97 / 4.0',

  },

  links: {

    email: 'msun55@illinois.edu',

    linkedin: 'https://www.linkedin.com/in/michelle-sun-171239217/',

    github: 'https://github.com/msun1',

    resume: './Michelle_Sun_Resume.pdf',

  },

  about: [

    {

      emoji: '🎨',

      title: 'I like making things',

      body:

        'Code is one medium, but not the only one. I also love illustration, digital design, stickers, scrapbooking, and turning tiny ideas into finished things people can actually use.',

      images: [

        { src: '/making.png', caption: 'printing stickers for my shop' },

      ],

    },

    {

      emoji: '🏃🏻‍♀️',

      title: 'I’m probably running',

      body:

        'I grew up running cross country and still run with friends and sign up for races. So far that has included a 10K and two half-marathons.',

      images: [

        { src: '/running.png', caption: '21 mile birthday run :)' },

      ],

    },

    {

      emoji: '💌',

      title: 'Community matters to me',

      body:

        'A lot of my favorite college memories come from Women in Computer Science, hackathons, campus organizations, and the friends who made hard technical work feel collaborative.',

      images: [

        { src: '/synchrony.png', caption: 'internship retreat (2024)' },

        { src: '/community_two.png', caption: 'Notion Campus Leader Community' },

      ],

    },

  ],

  values: ['collaboration', 'trust', 'innovation', 'loyalty'],

  experience: [

    {

      company: 'Salesforce',

      role: 'Software Engineer Intern',

      dates: 'Jun 2026 — Aug 2026',

      location: 'San Francisco, CA',

      summary:

        'Built internal developer tooling for Salesforce’s Core monorepo, focused on making required-reviewer lock decisions faster and more data-driven.',

      bullets: [

        'Built and shipped a cost analysis engine and dashboard measuring the productivity cost of required-reviewer locks.',

        'Architected the team’s lock-approval workflow and sped up approvals for sensitive files by 8× across 8,000+ engineers.',

        'Cut engine runtime by 40% through caching and optimized git log queries.',

      ],

    },

    {

      company: 'University of Illinois Urbana-Champaign',

      role: 'Course Assistant · CS 374',

      dates: 'Aug 2025 — Present',

      location: 'Champaign, IL',

      summary:

        'Help teach Algorithms and Models of Computation, a core CS course serving 500+ students.',

      bullets: [

        'Host office hours, answer Ed Discussion questions, and grade assignments for 500+ students.',

      ],

    },

    {

      company: 'John Deere',

      role: 'Part-Time Student Software Engineer',

      dates: 'Jan 2025 — Sep 2025',

      location: 'Champaign, IL',

      summary:

        'Worked full-stack on Deere’s Service Center platform, building interfaces for machine data and status monitoring.',

      bullets: [

        'Managed 20+ files and 1,300+ lines of code across full-stack feature work.',

        'Built React components using TypeScript, Python, React hooks, external APIs, and micro-frontends.',

      ],

    },

    {

      company: 'Synchrony Financial',

      role: 'Emerging Tech Center Intern · API Engineering',

      dates: 'May 2024 — Dec 2024',

      location: 'Champaign, IL',

      summary:

        'Built and tested API infrastructure in Apigee Edge while contributing to shared flows, proxies, logging, and tooling upgrades.',

      bullets: [

        'Worked with Python, XML, Git Bash, Node.js, Bitbucket, Postman, Splunk, and Apigee Edge.',

        'Completed 13+ Agile stories and contributed to two API train features.',

      ],

    },

  ],

  projects: [

    {

      title: 'Cozy Secrets Photobooth',

      kicker: 'design + frontend + illustration',

      description:

        'A hand-drawn photobooth experience that started as rough sketches and evolved through weeks of UI iteration, custom stickers, responsive testing, and a lot of iPad drawing.',

      details:

        'One of my favorite examples of owning a project end-to-end: concept, visual system, interaction design, implementation, testing, and refinement.',

      tags: ['React', 'Canvas API', 'UI/UX', 'Illustration'],

      featured: true,

      images: [

        { src: '/cozy_one.png', caption: 'add a Cozy Secrets screenshot' },

        { src: '/cozy_two.png', caption: 'add a photostrip / sticker screenshot' },

      ],

      backTitle: 'A photobooth I designed, drew & coded from scratch.',

      backBullets: [

        'Built a web photobooth where users can upload or capture four photos, choose from seven hand-drawn frame themes, add draggable stickers, and export a finished PNG.',

        'Created the image-processing pipeline with HTML5 Canvas and rendered downloads at 3× resolution for sharper output.',

        'Built a responsive positioning system that calculates background scale and offsets so buttons, stickers, and the photostrip stay aligned across different devices.',

        'Debugged a camera race condition caused by React rendering timing and fixed it by waiting for the video element to mount before attaching the MediaDevices stream.',

        'Hand-drew the backgrounds, frames, buttons, and stickers in Goodnotes and iterated on the interface for weeks to keep the nostalgic scrapbook feel consistent.',

      ],

      backMeta: 'React · JavaScript · HTML5 Canvas · CSS/Tailwind · React Router · MediaDevices API · Netlify',

      links: [

        {

          label: 'open photobooth ↗',

          href: 'https://cozy-secrets-photobooth-michelle.netlify.app/',

        },

        {

          label: 'GitHub ↗',

          href: 'https://github.com/msun1/michelle-photobooth',

        },

      ],

    },

    {

      title: 'GetLitty',

      kicker: 'event travel planner · full-stack',

      description:

        'A full-stack web app that combines event data with lodging prices to help users compare the cost of traveling to different events. Database Systems (CS411) Team Project.',

      details:

        'Built with Google Cloud Platform, MySQL, JavaScript, HTML/CSS, Node.js, and the Ticketmaster API. The database used 7 tables and 1,000+ rows, with stored procedures, triggers, and transactions for query and data management.',

      tags: ['Node.js', 'MySQL', 'GCP', 'JavaScript'],

      featured: true,

      images: [

        { src: '/getlitty_one.png', caption: 'GetLitty UI screenshot' },

        { src: '/getlitty_two.png', caption: 'Real-time API calls to Ticketmaster' },

      ],

      backTitle: 'One search instead of five tabs.',

      backBullets: [

        'Combined Ticketmaster event data with Chicago Airbnb lodging data to help users compare the most cost-effective event + stay combinations.',

        'Built smart event search, date/distance filters, a “Surprise Me” feature, an interactive lodging map, and a personal event dashboard.',

        'Designed a relational schema with 7 tables and 1,000+ rows of real-world event and lodging data.',

        'Implemented a stored procedure, conflict-prevention trigger, and atomic bulk-add transaction to move important data rules into the database layer.',

        'Used strategic indexing and stored procedures to reduce expensive query costs by up to 86% on complex joins.',

      ],

      backMeta: 'HTML/CSS · JavaScript · Node.js · MySQL · GCP Cloud SQL · Ticketmaster Discovery API · InsideAirbnb',

      links: [

        {

          label: 'GitHub ↗',

          href: 'https://github.com/msun1/getlittycs411project',

        },

      ],

    },

    {

      title: 'FoodForce',

      kicker: 'Salesforce FutureForce · 1st place team',

      description:

        'A Salesforce-powered AI agent concept for reducing food waste in restaurants and hospitality through demand forecasting, sustainability reporting, alerts, and user input.',

      details:

        'Built around Salesforce Core, Tableau Next, Net Zero Cloud, and Slack as part of the FutureForce Tech Accelerator pitch competition.',

      tags: ['Salesforce', 'AI', 'Sustainability'],

      featured: false,

      images: [

        { src: '/foodforce.png', caption: 'FoodForce pitch and presentation' },

      ],

      backTitle: 'Sustainability data turned into something actionable.',

      backBullets: [

        'Created for Salesforce’s FutureForce Tech Accelerator sustainability pitch competition and awarded 1st place as a team.',

        'Designed FoodForce as a digital AI agent for restaurant and hospitality teams to reduce ingredient waste.',

        'Used Salesforce Core for ingredient usage, Tableau Next for AI-driven demand forecasting, Net Zero Cloud for sustainability reporting, and Slack for alerts and user input.',

        'Focused the pitch on real-world impact, feasibility, product integration, and making sustainability reporting easier to act on.',

      ],

      backMeta: 'Salesforce Core · Tableau Next · Net Zero Cloud · Slack · AI agents',

      links: [],

    },

    {

      title: 'Stock Predictor',

      kicker: 'deep learning + sentiment analysis',

      description:

        'A Python project that scraped real-time financial and news data, cleaned it, and used semi-supervised learning for sentiment analysis.',

      details:

        'Used pandas, NumPy, BeautifulSoup, Google Colab, Yahoo News, and Yahoo Finance data as part of the pipeline.',

      tags: ['Python', 'Pandas', 'BeautifulSoup', 'ML'],

      featured: false,

      images: [
        { src: '/stock.png', caption: 'web scraping example' },

      ],

      backTitle: 'Turning messy news text into model input.',

      backBullets: [

        'Built as part of CS 124 Honors to predict the trajectory of Google stock using both textual data and historical quantitative stock data.',

        'Worked on the Sentiment Analysis Team, focusing on web scraping financial news and building sentiment-analysis models.',

        'Collected article data from sources such as Yahoo News and other search/news databases, cleaned it, and assembled model-ready datasets.',

        'Experimented with supervised learning and deep learning to predict sentiment for scraped, unlabeled data.',

        'Ran into real-world data issues including limited dataset size and scrapers that could fail as source sites changed.',

      ],

      backMeta: 'Python · Google Colab · Pandas · NumPy · BeautifulSoup · TensorFlow · NLTK · Keras',

      links: [],

    },

    {

      title: 'The “Hunger Games” Simulation',

      kicker: 'machine learning + simulation',

      description:

        'A predator-prey simulation exploring how perceptron-style models can create unpredictable but sensible hare and lynx behavior.',

      details:

        'I represented the organisms’ “brains” with learned decision structures and evaluated behavior through survival and hunting performance.',

      tags: ['Machine Learning', 'Perceptrons', 'Decision Trees', 'Simulation'],

      featured: false,

      images: [

        { src: '/hunger_games_1.png', caption: 'the simulation arena screenshot' },

        { src: '/hunger_games_2.png', caption: 'diagram of a single layer perceptron' },

      ],

      backTitle: 'Teaching virtual hares and lynxes how to react.',

      backBullets: [

        'Modeled organism behavior using perceptron concepts, with the model output interpreted as acceleration inside the simulation.',

        'Created the neural-network logic in the form of decision trees that acted as the decision-making center for each organism.',

        'Trained the hare and lynx behavior against a hand-coded default computer strategy rather than searching for one “perfect” model directly.',

        'Evaluated repeated training cycles by selecting behaviors that helped hares survive longer and lynxes catch more opposing hares.',

        'Explored how training separately, together, or against a fixed baseline can produce different behavior and performance.',

      ],

      backMeta: 'Machine learning · perceptrons · decision trees · predator-prey simulation',

      links: [],

    },

    {

      title: 'Breast Cancer Detection Model',

      kicker: 'Tech4U Hackathon · 1st place',

      description:

        'An image-classification project using neural networks to classify breast-cancer cell images and compare different modeling approaches.',

      details:

        'Built in Python and Google Colab using public image datasets, model evaluation, confusion matrices, and dimensionality-reduction visualizations.',

      tags: ['Python', 'TensorFlow', 'CNN', 'Image Classification'],

      featured: false,

      images: [

        { src: '/cancer_1.png', caption: 'PCA scatterplot of cells in dataset' },

        { src: '/cancer_2.png', caption: 'Bra Design Drawn with Krita' },

      ],

      backTitle: 'Comparing models instead of stopping at the first result.',

      backBullets: [

        'Split public clinical-cell image data into 80% training and 20% testing sets and compared multiple approaches.',

        'A KNN baseline reached roughly 20% accuracy; a CNN without transfer learning reached about 26%.',

        'The CNN with transfer learning performed substantially better, reaching about 69–70% accuracy and roughly a 92% ROC AUC score.',

        'Used PCA and t-SNE-style visualizations to inspect the dataset and model behavior.',

        'Documented limitations around dataset bias, skin-tone diversity, runtime, and real-world deployment practicality as future work.',

      ],

      backMeta: 'Python · Google Colab · TensorFlow · NumPy · Pandas · scikit-learn · Matplotlib',

      links: [

        {

          label: 'view Devpost ↗',

          href: 'https://devpost.com/software/cancher',

        },

      ],

    },

  ],

  community: [

    {

      title: 'Vice President · Women in Computer Science @ UIUC',

      body:

        'Currently serving as VP after previously serving as Treasurer and Corporate Co-Chair. I help lead the organization, support our officer board, organize events, and oversee sponsor-facing work and the Corporate Committee.',

      backBullets: [

        'Vice President (2026–27), Treasurer (2025–26), and Corporate Co-Chair (2024–25).',

        'Help organize General Meetings, the WCS Chicago Retreat, tech talks, coffee chats, and workshops.',

        'Oversee the Corporate Committee and support sponsor-facing planning and communication.',

      ],

      tags: ['leadership', 'community', 'corporate relations'],

      links: [],

      imagePlacement: 'back',

      images: [

        { src: '/wcs_retreat_2024.png', caption: 'WCS’s Annual Chicago Retreat, Feb. 2024' },

      ],

    },

    {

      title: 'michypoo’s shop',

      body:

        'My small creative business for stickers and illustrated products — one of my favorite places to combine design, experimentation, and entrepreneurship.',

      backBullets: [

        'A personal creative outlet where I get to turn drawings into physical products and learn the business side of making things.',

        'I design the visual identity, products, listings, and pop-up presentation myself.',

      ],

      tags: ['illustration', 'small business', 'design'],

      links: [

        { label: 'Etsy shop ↗', href: 'https://www.etsy.com/shop/MichypooShop' },

        { label: 'Instagram ↗', href: 'https://www.instagram.com/michypoo.poo/' },

      ],

      imagePlacement: 'back',

      images: [

        { src: '/shop.png', caption: 'sticker sheet from my shop' },
        { src: '/shop_2.png', caption: 'pop-up event on campus' },

      ],

    },

    {

      title: 'Campus Leader · Notion',

      body:

        'From Aug 2024 to May 2025, I represented Notion on campus and helped students learn the product through events, collaborations, and community-building.',

      backBullets: [

        'Hosted campus workshops, club collaborations, study sessions, and hackathon-style events.',
        'Shared practical ways students could use Notion for organization, productivity, and collaborative work.',

        'Worked across Slack, Discord, event hosting, marketing, team management, and corporate communications.',

      ],

      tags: ['Notion', 'event hosting', 'marketing', 'community'],

      links: [],

      imagePlacement: 'back',

      images: [

        { src: '/notion_1.png', caption: 'Notion event on campus' },

      ],

    },

    {

      title: 'Software Developer · Illini Blockchain',

      body:

        'Explored smart contracts and blockchain development as a member of the Explorations Team at UIUC.',

      backBullets: [

        'Worked with Neo and Ethereum blockchain concepts and Solidity.',

        'Completed the CryptoZombies curriculum while learning how smart contracts are written and deployed.',

        'Participated in the organization’s bootcamp and recurring technical meetings as part of the Explorations Team.',

      ],

      tags: ['blockchain', 'Solidity', 'Ethereum'],

      links: [],

      // imagePlacement: 'back',

      // images: [

      //   { src: '', caption: 'learning blockchain together' },

      // ],

    },

    {

      title: 'Girls Who Code · Co-President',

      body:

        'At IMSA, I managed three sub-groups, helped host two hackathons and 20+ learning sessions, and helped grow club membership by 200%.',

      backBullets: [

        'Co-President at the Illinois Mathematics and Science Academy from 2021–2023.',

        'Managed three sub-groups and coordinated technical learning sessions.',

        'Helped host two hackathons and 20+ learning-group meetings while growing membership by 200%.',

      ],

      tags: ['leadership', 'mentorship', 'STEM education'],

      links: [],

    },

  ],

  awards: [

    {

      title: 'La Fuerza Scholarship Recipient',

      issuer: 'Lambda Theta Phi Fraternity, Inc.',

      date: 'Oct 2023',

      description: [

        'The La Fuerza Scholarship was created by the Beta Sigma Chapter of Lambda Theta Phi Latin Fraternity, Inc. to assist incoming freshmen who are knowledgeable and experienced academically and socially.',

      ],

    },

    {

      title: 'AIM HIGH Grant Recipient',

      issuer: 'UIUC',

      date: 'Aug 2023',

      description: [

        'The AIM HIGH Grant program, funded by the State of Illinois, provides merit-based awards to undergraduate students.',

      ],

    },

    {

      title: 'Fred S. Bailey Scholarship Recipient',

      issuer: 'The YMCA at UIUC',

      date: 'May 2023',

      description: [

        'The YMCA of the University of Illinois awards scholarship funds to students demonstrating exceptional leadership in service and activism.',

      ],

    },

    {

      title: 'FutureForce Tech Accelerator — Pitch Competition, 1st Place Team',

      issuer: 'Salesforce',

      date: 'Jul 2025',

      description: [

        'Intern teams were challenged to create innovative AI agents addressing sustainability problems such as food waste, ocean plastics, air pollution, and carbon emissions. Projects were judged on innovation, impact and feasibility, clarity of pitch, use of Salesforce products, and collaboration.',

        'Our team created FoodForce, a Salesforce-powered AI agent for reducing food waste in restaurants and hospitality. It connects ingredient usage in Salesforce Core with Tableau Next demand forecasting, Net Zero Cloud sustainability reporting, and Slack alerts/input.',

      ],

    },

    {

      title: 'James Scholar · Grainger College of Engineering',

      issuer: 'UIUC',

      date: 'Aug 2023',

      description: [

        'The James Scholar Honors Program recognizes academically outstanding students and supports curricular and co-curricular growth within Grainger Engineering.',

      ],

    },

    {

      title: 'Tech4U Hackathon — 1st Place',

      issuer: 'Devpost',

      date: 'Aug 2021',

      description: [

        'My project was a Breast Cancer Detection model, built using background knowledge from the Inspirit AI Scholars Summer Program.',

      ],

    },

    {

      title: 'NologyHacks Hackathon — Best Project Demo',

      issuer: 'Devpost',

      date: 'Jul 2021',

      description: [

        'I built “Aerosol Bot,” a Node.js Discord bot focused on the challenge of education access in rural areas. It was my first time experimenting with the Discord API.',

      ],

    },

    {

      title: 'UN Global Goals · National Community Service Awards — Honor',

      issuer: 'Illinois Mathematics and Science Academy',

      date: 'Apr 2021',

      description: [

        'I completed 129 service hours through activities including sourcing Mandarin documents and STEM tutoring during a virtual school year.',

      ],

    },

    {

      title: '2020 Year-End Shutdown Entrepreneurship Challenge — 2nd Place (Solo)',

      issuer: 'Illinois Mathematics and Science Academy',

      date: 'Dec 2020',

      description: [

        'Participants created a video-game concept that could teach an academic subject. I designed “Equation Runner,” a Roblox game concept for learning topics from basic algebra through high-school trigonometry.',

      ],

    },

  ],

  publication: {

    title: 'The Molecular Interaction Between c-KIT Receptor Protein (STI-571) and Threonine',

    authors: 'A. Hall, M. Sun',

    venue: 'Illinois Mathematics and Science Academy Research Symposium · Chemistry Session (CHEM 04) · Apr 2022',

    summary:

      'Computational molecular modeling research using SPARTAN to study how atomic substitutions affect hydrogen bonding, molecular energy, and protein orientation.',

    backBullets: [

      'Advisor: Dr. Joseph Golab.',

      'Analyzed how atomic substitutions changed hydrogen-bond distance, molecular energy, and protein orientation.',

      'Evaluated structural stability using angstrom-scale distance changes and energy variations across modified molecular models.',

      'Found that proximity-based atomic changes can meaningfully alter hydrogen bonding and protein energetics, with implications for cancer-related protein interactions.',

    ],

    link: 'https://digitalcommons.imsa.edu/sir_presentations/2022/session1/39/',

  },

  skills: {

    'Languages': ['Java', 'Python', 'C#', 'C++', 'C', 'JavaScript', 'SQL', 'XML', 'Kotlin', 'MIPS Assembly', 'PowerShell', 'Verilog', 'TypeScript', 'R', 'PHP', 'Q#'],

    'Web & APIs': ['React', 'Next.js', 'Node.js', 'Spring Boot', 'Tailwind CSS', 'React Router', 'HTML5 Canvas API', 'MediaDevices API', 'WordPress', 'Apigee API Gateway', 'Postman'],

    'Data & analysis': ['TensorFlow', 'Keras', 'scikit-learn', 'MongoDB', 'SQLite', 'BeautifulSoup', 'NLTK', 'Google Colab', 'PostgreSQL', 'MySQL', 'Pandas', 'NumPy', 'Matplotlib', 'Tableau', 'Splunk'],

    'Cloud & dev tools': ['Google Cloud Platform', 'Docker', 'Git', 'GitHub', 'AWS', 'Jenkins', 'Datadog', 'LaunchDarkly', 'Netlify', 'Bitbucket', 'VS Code', 'IntelliJ'],

    'Developer & Collaboration Tools': ['Jira', 'Confluence', 'Slack', 'Notion', 'Microsoft Teams', 'Visual Studio', 'Android Studio', 'Eclipse', 'Git Bash'],
  
    'Other Tools': ['Arduino', 'SolidWorks/CAD']
  },

  funFacts: [

    'journaler',

    'scrapbooker',

    'matcha lover',

    'half-marathon x2',

    'sticker shop owner',

    'iPad doodler',

    'likes software with personality',

    'small business owner',

    'gym rat'

  ],

}
