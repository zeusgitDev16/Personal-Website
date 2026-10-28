/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "ZeusDev",
  title: "Greetings! I'm Amando",
  subTitle: emoji(
   "Results-driven, tech-savvy developer focused on building impactful solutions through scalable and efficient techniques. I love exploring new ideas, building projects, and working seamlessly either with a team or on my own. Hit me up and let's talk about how my skills can add value to your business."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/zeusgitDev16",
  linkedin: "https://www.linkedin.com/in/amando-zeus-c-millete-24a522385/",
  gmail: "aezymillete16@gmail.com",
  gitlab: "https://gitlab.com/zeusgitDev16",
  facebook: "https://web.facebook.com/aezyy.millete/",
  medium: "https://medium.com/@aezymillete16",

  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Services I Offer",
  subTitle: "I do N8N Automation, Workflow Engineering, and Web Development with a passion for building scalable and efficient solutions.",
  skills: [
    emoji(
      " Develop highly automative workflows and integrations using N8N, Zapier, and other automation tools"
    ),
    emoji("create custom applications and solutions using modern web technologies"),
    emoji(
      "Automate repetitive tasks and streamline business processes to improve efficiency and productivity"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Systems Technology Institute",
      logo: require("./assets/images/stilogo.png"),
      subHeader: "Bachelor of Science in Information Technology",
      duration: "September 2022 - June 2026",
      desc: "Participated in the research of Oro High Portal.",
      descBullets: [
        "Top 2 in Computer Programming and Web Development",
      ]
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, // Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Associate Software Engineer",
      company: "Albay Electric Cooperative, Inc.",
      companylogo: require("./assets/images/alecoLogo.png"),
      date: "February 2026 - june 2026",
      desc: "Responsible for developing and maintaining software applications.",
      descBullets: [
        "Developed and maintained web applications using modern technologies.",
        "Collaborated with cross-functional teams to deliver high-quality software solutions."
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true// Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Developer Project",
  subtitle: "A power interruption system that allows users to report power outages and receive real-time updates on the status of the outage.",
  projects: [
    {
      image: require("./assets/images/apisph-logo.png"),
      projectName: "APISPH",
      projectDesc: "A power interruption system that allows users to report power outages and receive real-time updates on the status of the outage.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://apisph.org/",
        }
        //  you can add extra buttons here.
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications"),
  subtitle:
    "proof of my work, certifications, and accomplishments that showcase my skills and expertise.",

  achievementsCards: [
    {
      title: "Linux unhatched",
      subtitle: "A linux fundamental course.",
      image: require("./assets/images/linux-unhatched.png"),
      imageAlt: "Linux unhatched certification",
      issuer: "Linux Foundation",
      footerLink: [{name: "View Linux certification", url: "https://www.credly.com/badges/a0d75468-5575-43fb-ac5f-0705faab2e3d/public_url"}]
    },
    {
      title: "Introduction to Cybersecurity",
      subtitle: "A course on the fundamentals of cybersecurity.",
      image: require("./assets/images/cybersecurity-course.png"),
      imageAlt: "Introduction to Cybersecurity certification",
      issuer: "Credly",
      footerLink: [{name: "View Credly credential", url: "https://www.credly.com/badges/9d8956c9-b27f-4b99-8dc4-382868101ebb/public_url"}]
    },
   
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false// Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+63-994-391-7653",
  email_address: "aezymillete16@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false// Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
