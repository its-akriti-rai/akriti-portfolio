/**
 * ==============================================================================
 * PORTFOLIO DATA & CONFIGURATION - AKRITI RAI
 * ==============================================================================
 * 
 * WELCOME, AKRITI!
 * This file controls all the content on your portfolio website.
 * To update your portfolio, simply edit the values in this configuration section.
 * You DO NOT need to edit index.html!
 * 
 * How to edit:
 * 1. Modify any text inside the quotation marks "" (e.g., your email, links, bio).
 * 2. To add new skills, projects, achievements, or certifications, follow the
 *    provided examples and comments.
 * 3. Save this file (Ctrl + S) and refresh index.html in your browser to see your changes!
 * ==============================================================================
 */

const portfolioData = {
  // ----------------------------------------------------------------------------
  // 1. PERSONAL INFORMATION (Displayed in Home / Hero & Header)
  // ----------------------------------------------------------------------------
  personalInfo: {
    name: "Akriti Rai",
    shortBadge: "AR",
    degree: "Bachelor of Technology (B.Tech)",
    branch: "Computer Science",
    currentYear: "1st Year",
    college: "JECRC University, Jaipur",
    location: "Jaipur, Rajasthan, India",
    
    // Short introduction shown in the Home section
    heroGreeting: "Hello, I'm",
    heroRoleTitle: "B.Tech Computer Science Student",
    shortIntroduction: "I am a first-year Computer Science student interested in technology, programming, artificial intelligence and learning new technical skills. Currently building my foundation in computer science and exploring different areas of technology through academics, projects and practical work.",
    
    // Call-to-action buttons in the Home section
    ctaPrimary: {
      text: "View My Projects",
      link: "#projects"
    },
    ctaSecondary: {
      text: "Get In Touch",
      link: "#contact"
    },

    // Quick stats badges shown in the Hero section
    quickHighlights: [
      { label: "Degree", value: "B.Tech CSE" },
      { label: "Current Year", value: "1st Year Student" },
      { label: "Institution", value: "JECRC University, Jaipur" }
    ]
  },

  // ----------------------------------------------------------------------------
  // 2. ABOUT ME SECTION
  // ----------------------------------------------------------------------------
  about: {
    sectionTitle: "About Me",
    sectionSubtitle: "My background, focus, and motivation as a student",
    
    // Natural, professional paragraphs suitable for a 1st-year student
    paragraphs: [
      "I am a Computer Science student who is interested in technology, programming, artificial intelligence and learning new technical skills. I am currently building my foundation in computer science and exploring different areas of technology through academics, projects and practical work.",
      "As a first-year undergraduate, I believe in staying curious, understanding fundamental concepts thoroughly, and applying what I learn through coursework and self-directed practice.",
      "I enjoy problem solving, working with code, and learning how modern software and AI technologies shape our world."
    ],

    // Quick overview cards
    highlights: [
      { label: "Academic Level", value: "1st Year B.Tech CSE" },
      { label: "College", value: "JECRC University, Jaipur" },
      { label: "Main Interests", value: "AI, Programming & Web" },
      { label: "Learning Focus", value: "Core CS Fundamentals" }
    ],

    // Areas of Interest (Add or remove topics anytime)
    interestsTitle: "Areas of Interest",
    interests: [
      { name: "Computer Science", icon: "💻" },
      { name: "Programming", icon: "⌨️" },
      { name: "Artificial Intelligence", icon: "🤖" },
      { name: "Generative AI", icon: "✨" },
      { name: "Web Development", icon: "🌐" },
      { name: "Learning New Technologies", icon: "🚀" },
      { name: "Problem Solving", icon: "🧩" },
      { name: "Creativity", icon: "🎨" }
    ]
  },

  // ----------------------------------------------------------------------------
  // 3. EDUCATION SECTION
  // ----------------------------------------------------------------------------
  education: {
    sectionTitle: "Education",
    sectionSubtitle: "My academic path and ongoing coursework",
    items: [
      {
        degree: "Bachelor of Technology (B.Tech)",
        branch: "Computer Science",
        currentYear: "1st Year",
        college: "JECRC University, Jaipur",
        duration: "2026 - 2030 (Currently in 1st Year)",
        description: "Currently developing my foundation in Computer Science through coursework, practical assignments and hands-on exploration of technologies.",
        highlights: [
          "Building core conceptual foundations in computer science and programming",
          "Engaging in regular laboratory practical sessions and coursework assignments",
          "Exploring foundational engineering concepts and computer systems"
        ]
      }
    ]
  },

  // ----------------------------------------------------------------------------
  // 4. SKILLS SECTION
  // (Beginner & foundational skills suitable for a 1st-year CS student)
  // ----------------------------------------------------------------------------
  skills: {
    sectionTitle: "Skills",
    sectionSubtitle: "Foundational and beginner-level technologies I am working with",
    note: "As a 1st-year Computer Science student, these represent foundational and beginner-level skills that I am actively practicing, learning, and developing through coursework and personal study.",
    
    // Categorized skills: you can add or remove skills in any list!
    categories: [
      {
        categoryName: "Programming Languages & Logic",
        icon: "💻",
        description: "Core programming syntax and algorithmic thinking",
        skillsList: [
          { name: "Python", level: "Beginner", description: "Syntax, fundamentals & problem solving" },
          { name: "C / C++", level: "Beginner", description: "Core concepts, logic & memory fundamentals" },
          { name: "Problem Solving", level: "Foundational", description: "Analytical thinking & computational logic" }
        ]
      },
      {
        categoryName: "Web Development",
        icon: "🌐",
        description: "Technologies for creating responsive web interfaces",
        skillsList: [
          { name: "HTML", level: "Beginner", description: "Semantic markup & page structure" },
          { name: "CSS", level: "Beginner", description: "Styling, Flexbox & responsive web layouts" },
          { name: "JavaScript", level: "Beginner", description: "Client-side interactivity & dynamic DOM" },
          { name: "Basic Web Development", level: "Beginner", description: "Building clean, mobile-friendly pages" }
        ]
      },
      {
        categoryName: "Tools & Emerging Technologies",
        icon: "🛠️",
        description: "Technical tools and modern utilities explored in study",
        skillsList: [
          { name: "AutoCAD", level: "Beginner", description: "Engineering drawing & design principles" },
          { name: "Generative AI Tools", level: "Beginner", description: "AI-assisted workflows & exploration" }
        ]
      }
    ]
  },

  // ----------------------------------------------------------------------------
  // 5. PROJECTS SECTION
  // (Card-based layout. To add a new project, copy an item inside items: [])
  // ----------------------------------------------------------------------------
  projects: {
    sectionTitle: "Projects",
    sectionSubtitle: "Hands-on projects created during my learning journey",
    items: [
      {
        title: "Personal Portfolio Website",
        category: "Web Development",
        status: "Active",
        description: "A responsive personal portfolio website created to showcase my education, skills, projects and learning journey.",
        technologies: ["HTML", "CSS", "JavaScript"],
        keyFeatures: [
          "Fully responsive design adapted for desktop, tablet, and mobile screens",
          "Centralized data configuration in script.js for easy content updates",
          "Modern styling with dark and light theme toggle support",
          "Semantic HTML and smooth section navigation"
        ],
        liveUrl: "#home",        // Links to current portfolio
        githubUrl: ""           // [Add your GitHub repo URL here when ready]
      }
      
      /*
       * EXAMPLE: TO ADD A NEW PROJECT LATER, COPY & UNCOMMENT THIS TEMPLATE:
       * 
       * ,{
       *   title: "Project Name",
       *   category: "Python / AI / Web Development",
       *   status: "Completed",
       *   description: "A short description of what this project does.",
       *   technologies: ["Python", "HTML", "CSS"],
       *   keyFeatures: [
       *     "Key feature or learning point 1",
       *     "Key feature or learning point 2"
       *   ],
       *   liveUrl: "https://your-demo-link.com",
       *   githubUrl: "https://github.com/your-username/repo-name"
       * }
       */
    ]
  },

  // ----------------------------------------------------------------------------
  // 6. ACHIEVEMENTS SECTION
  // (Placeholder shown until you add your achievements)
  // ----------------------------------------------------------------------------
  achievements: {
    sectionTitle: "Achievements",
    placeholderMessage: "More achievements will be added as I continue my learning journey.",
    items: []
  },

  // ----------------------------------------------------------------------------
  // 6b. CERTIFICATIONS SECTION
  // (Placeholder shown until you add your certifications)
  // ----------------------------------------------------------------------------
  certifications: {
    sectionTitle: "Certifications",
    placeholderMessage: "More certifications will be added as I continue my learning journey.",
    items: []
  },

  // ----------------------------------------------------------------------------
  // 7. CONTACT INFORMATION
  // (Clearly marked placeholders for information not yet provided)
  // ----------------------------------------------------------------------------
  contact: {
    sectionTitle: "Contact",
    sectionSubtitle: "Get in touch for academic connections, discussions, or inquiries",
    introMessage: "I am always excited to connect with fellow students, developers, and mentors. Whether you'd like to talk about computer science, collaborate on learning, or have advice for a first-year student, feel free to reach out!",
    
    name: "Akriti Rai",
    college: "JECRC University, Jaipur",
    location: "Jaipur, Rajasthan, India",
    
    // EDITABLE PLACEHOLDER (Update with your real email when ready):
    email: "akriti.fr@gmail.com"
  },

  // ----------------------------------------------------------------------------
  // 8. SOCIAL LINKS
  // (Clearly marked placeholders for your profiles)
  // ----------------------------------------------------------------------------
  socialLinks: [
  {
    platform: "Email",
    icon: "✉️",
    url: "#contact",
    displayValue: "akriti.fr@gmail.com",
    isPlaceholder: true
  },
  {
    platform: "GitHub",
    icon: "🐙",
    url: "https://github.com/its-akriti-rai",
    displayValue: "https://github.com/its-akriti-rai",
    isPlaceholder: false
  },
  {
    platform: "LinkedIn",
    icon: "💼",
    url: "https://www.linkedin.com/in/akriti-rai-986600411",
    displayValue: "https://www.linkedin.com/in/akriti-rai-986600411",
    isPlaceholder: false
  }
],

  // ----------------------------------------------------------------------------
  // 9. FOOTER
  // ----------------------------------------------------------------------------
  footer: {
    copyrightText: `© ${new Date().getFullYear()} Akriti Rai. All rights reserved.`,
    note: "Built with HTML, CSS & JavaScript · Designed for easy updates"
  }
};


/**
 * ==============================================================================
 * DYNAMIC RENDERING & INTERACTION LOGIC
 * ==============================================================================
 * The functions below automatically read from `portfolioData` above and render
 * all content into the webpage.
 * ==============================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  renderPortfolio();
  initThemeToggle();
  initMobileMenu();
  initScrollSpy();
  initBackToTop();
});

/**
 * Main rendering coordinator
 */
function renderPortfolio() {
  const data = portfolioData;

  // Header Brand
  const logoNameEl = document.getElementById("logo-name");
  if (logoNameEl) logoNameEl.textContent = data.personalInfo.name;

  // 1. Home / Hero
  renderHero(data.personalInfo);

  // 2. About Me
  renderAbout(data.about);

  // 3. Education
  renderEducation(data.education);

  // 4. Skills
  renderSkills(data.skills);

  // 5. Projects
  renderProjects(data.projects);

  // 6. Achievements & Certifications
  renderAchievementsAndCertifications(data.achievements, data.certifications);

  // 7. Contact
  renderContact(data.contact, data.socialLinks);

  // Footer
  renderFooter(data.personalInfo, data.footer);
}

/**
 * Render Home / Hero Section
 */
function renderHero(personal) {
  const badgeText = document.getElementById("hero-status-text");
  if (badgeText) badgeText.textContent = `${personal.currentYear} ${personal.branch} Student · ${personal.college}`;

  const greetingEl = document.getElementById("hero-greeting");
  if (greetingEl) greetingEl.textContent = personal.heroGreeting;

  const nameEl = document.getElementById("hero-name");
  if (nameEl) nameEl.textContent = personal.name;

  const roleEl = document.getElementById("hero-role");
  if (roleEl) roleEl.textContent = `${personal.heroRoleTitle} · ${personal.college}`;

  const descEl = document.getElementById("hero-description");
  if (descEl) descEl.textContent = personal.shortIntroduction;

  const primaryBtn = document.getElementById("hero-cta-primary");
  if (primaryBtn) {
    primaryBtn.textContent = personal.ctaPrimary.text;
    primaryBtn.setAttribute("href", personal.ctaPrimary.link);
  }

  const secondaryBtn = document.getElementById("hero-cta-secondary");
  if (secondaryBtn) {
    secondaryBtn.textContent = personal.ctaSecondary.text;
    secondaryBtn.setAttribute("href", personal.ctaSecondary.link);
  }

  const metaBar = document.getElementById("hero-meta-bar");
  if (metaBar && Array.isArray(personal.quickHighlights)) {
    metaBar.innerHTML = personal.quickHighlights.map(item => `
      <div class="hero-meta-item">
        <span class="hero-meta-icon">✦</span>
        <span><strong>${escapeHTML(item.label)}:</strong> ${escapeHTML(item.value)}</span>
      </div>
    `).join("");
  }
}

/**
 * Render About Section
 */
function renderAbout(about) {
  const titleEl = document.getElementById("about-title");
  if (titleEl) titleEl.textContent = about.sectionTitle;

  const subtitleEl = document.getElementById("about-subtitle");
  if (subtitleEl) subtitleEl.textContent = about.sectionSubtitle;

  const bioContainer = document.getElementById("about-bio-container");
  if (bioContainer && Array.isArray(about.paragraphs)) {
    bioContainer.innerHTML = about.paragraphs
      .map(p => `<p>${escapeHTML(p)}</p>`)
      .join("");
  }

  const highlightsContainer = document.getElementById("about-highlights-container");
  if (highlightsContainer && Array.isArray(about.highlights)) {
    highlightsContainer.innerHTML = about.highlights.map(h => `
      <div class="highlight-item">
        <span class="highlight-label">${escapeHTML(h.label)}</span>
        <span class="highlight-value">${escapeHTML(h.value)}</span>
      </div>
    `).join("");
  }

  const interestsTitle = document.getElementById("interests-title");
  if (interestsTitle) interestsTitle.textContent = about.interestsTitle;

  const interestsContainer = document.getElementById("interests-container");
  if (interestsContainer && Array.isArray(about.interests)) {
    interestsContainer.innerHTML = about.interests.map(item => `
      <span class="interest-tag">
        <span class="interest-tag-icon">${escapeHTML(item.icon || "•")}</span>
        <span>${escapeHTML(item.name)}</span>
      </span>
    `).join("");
  }
}

/**
 * Render Education Section
 */
function renderEducation(edu) {
  const titleEl = document.getElementById("education-title");
  if (titleEl) titleEl.textContent = edu.sectionTitle;

  const subtitleEl = document.getElementById("education-subtitle");
  if (subtitleEl) subtitleEl.textContent = edu.sectionSubtitle;

  const container = document.getElementById("education-container");
  if (container && Array.isArray(edu.items)) {
    container.innerHTML = edu.items.map(item => `
      <div class="education-card">
        <div class="education-header">
          <div>
            <h3 class="education-degree">${escapeHTML(item.degree)}</h3>
            <div class="education-branch">${escapeHTML(item.branch)}</div>
          </div>
          <span class="education-duration-pill">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            ${escapeHTML(item.duration)}
          </span>
        </div>

        <div class="education-institution">
          <span class="institution-icon">🏛️</span>
          <span>${escapeHTML(item.college)}</span>
        </div>

        <p class="education-description">${escapeHTML(item.description)}</p>

        ${Array.isArray(item.highlights) && item.highlights.length > 0 ? `
          <div class="education-highlights-list">
            ${item.highlights.map(point => `
              <div class="education-highlight-item">
                <span class="highlight-bullet">✓</span>
                <span>${escapeHTML(point)}</span>
              </div>
            `).join("")}
          </div>
        ` : ""}
      </div>
    `).join("");
  }
}

/**
 * Render Skills Section
 */
function renderSkills(skills) {
  const titleEl = document.getElementById("skills-title");
  if (titleEl) titleEl.textContent = skills.sectionTitle;

  const subtitleEl = document.getElementById("skills-subtitle");
  if (subtitleEl) subtitleEl.textContent = skills.sectionSubtitle;

  const container = document.getElementById("skills-container");
  if (container && Array.isArray(skills.categories)) {
    container.innerHTML = skills.categories.map(cat => `
      <div class="skill-category-card">
        <div class="skill-category-header">
          <h3 class="skill-category-title">
            <span>${escapeHTML(cat.icon || "💻")}</span>
            <span>${escapeHTML(cat.categoryName)}</span>
          </h3>
          <p class="skill-category-desc">${escapeHTML(cat.description)}</p>
        </div>

        <div class="skill-items-list">
          ${cat.skillsList.map(skill => `
            <div class="skill-item-card">
              <div class="skill-name-wrap">
                <span class="skill-name">${escapeHTML(skill.name)}</span>
                <span class="skill-desc">${escapeHTML(skill.description)}</span>
              </div>
              <span class="skill-level-badge">${escapeHTML(skill.level)}</span>
            </div>
          `).join("")}
        </div>
      </div>
    `).join("");
  }
}

/**
 * Render Projects Section
 */
function renderProjects(projects) {
  const titleEl = document.getElementById("projects-title");
  if (titleEl) titleEl.textContent = projects.sectionTitle;

  const subtitleEl = document.getElementById("projects-subtitle");
  if (subtitleEl) subtitleEl.textContent = projects.sectionSubtitle;

  const container = document.getElementById("projects-container");
  if (container && Array.isArray(projects.items)) {
    container.innerHTML = projects.items.map(proj => `
      <article class="project-card">
        <div class="project-card-top">
          <span class="project-category-tag">${escapeHTML(proj.category || "Project")}</span>
          <span class="project-status-pill">
            <span class="pulse-dot"></span>
            ${escapeHTML(proj.status || "Active")}
          </span>
        </div>

        <h3 class="project-title">${escapeHTML(proj.title)}</h3>
        <p class="project-description">${escapeHTML(proj.description)}</p>

        ${Array.isArray(proj.keyFeatures) && proj.keyFeatures.length > 0 ? `
          <div class="project-features-list">
            ${proj.keyFeatures.map(feat => `
              <div class="project-feature-item">
                <span class="project-feature-icon">▹</span>
                <span>${escapeHTML(feat)}</span>
              </div>
            `).join("")}
          </div>
        ` : ""}

        <div class="project-tech-stack">
          ${proj.technologies.map(tech => `
            <span class="tech-badge">${escapeHTML(tech)}</span>
          `).join("")}
        </div>

        <div class="project-actions">
          <a href="${proj.liveUrl || "#home"}" class="btn btn-primary btn-sm">
            <span>View Demo</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
          ${proj.githubUrl ? `
            <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
              <span>Code</span>
            </a>
          ` : `
          `}
        </div>
      </article>
    `).join("");
  }
}

/**
 * Render Achievements & Certifications Section
 * Displays placeholder when empty, or cards when items are added.
 */
function renderAchievementsAndCertifications(achievements, certifications) {
  const container = document.getElementById("achievements-container");
  if (!container) return;

  const hasAchievements = Array.isArray(achievements.items) && achievements.items.length > 0;
  const hasCertifications = Array.isArray(certifications.items) && certifications.items.length > 0;

  if (hasAchievements || hasCertifications) {
    let html = '<div class="achievements-items-grid">';
    
    if (hasAchievements) {
      achievements.items.forEach(item => {
        html += `
          <div class="achievement-item-card">
            <h3 class="achievement-item-title">${escapeHTML(item.title)}</h3>
            <div class="achievement-item-issuer">${escapeHTML(item.event || "")} · ${escapeHTML(item.year || "")}</div>
            <p class="achievement-item-desc">${escapeHTML(item.description || "")}</p>
          </div>
        `;
      });
    }

    if (hasCertifications) {
      certifications.items.forEach(cert => {
        html += `
          <div class="achievement-item-card">
            <h3 class="achievement-item-title">${escapeHTML(cert.title)}</h3>
            <div class="achievement-item-issuer">${escapeHTML(cert.issuer || "")} · ${escapeHTML(cert.year || "")}</div>
            <p class="achievement-item-desc">${escapeHTML(cert.description || "")}</p>
          </div>
        `;
      });
    }

    html += '</div>';
    container.innerHTML = html;
  } else {
    // Clean placeholder card as requested by the user
    container.innerHTML = `
      <div class="achievements-placeholder-card">
        <div class="placeholder-icon-wrap" aria-hidden="true">🌱</div>
        <h3 class="placeholder-heading">Learning Journey In Progress</h3>
        <p class="placeholder-text">More achievements and certifications will be added as I continue my learning journey.</p>
      </div>
    `;
  }
}

/**
 * Render Contact Section & Social Links
 */
function renderContact(contact, socialLinks) {
  const titleEl = document.getElementById("contact-title");
  if (titleEl) titleEl.textContent = contact.sectionTitle;

  const subtitleEl = document.getElementById("contact-subtitle");
  if (subtitleEl) subtitleEl.textContent = contact.sectionSubtitle;

  const msgEl = document.getElementById("contact-message-text");
  if (msgEl) msgEl.textContent = contact.introMessage;

  // Render Contact Info List
  const detailsContainer = document.getElementById("contact-details-container");
  if (detailsContainer) {
    detailsContainer.innerHTML = `
      <div class="contact-detail-row">
        <div class="contact-detail-icon">👤</div>
        <div class="contact-detail-meta">
          <span class="contact-detail-label">Name</span>
          <span class="contact-detail-value">${escapeHTML(contact.name)}</span>
        </div>
      </div>

      <div class="contact-detail-row">
        <div class="contact-detail-icon">🏛️</div>
        <div class="contact-detail-meta">
          <span class="contact-detail-label">College</span>
          <span class="contact-detail-value">${escapeHTML(contact.college)}</span>
        </div>
      </div>

      <div class="contact-detail-row">
        <div class="contact-detail-icon">📍</div>
        <div class="contact-detail-meta">
          <span class="contact-detail-label">Location</span>
          <span class="contact-detail-value">${escapeHTML(contact.location)}</span>
        </div>
      </div>

      <div class="contact-detail-row">
        <div class="contact-detail-icon">✉️</div>
        <div class="contact-detail-meta">
          <span class="contact-detail-label">Email Address</span>
          <span class="contact-detail-value">
            ${escapeHTML(contact.email)}
            ${contact.email.includes("[") ? '<span class="contact-placeholder-badge">Editable</span>' : ''}
          </span>
        </div>
      </div>
    `;
  }

  // Render Social Links
  const socialContainer = document.getElementById("social-links-container");
  if (socialContainer && Array.isArray(socialLinks)) {
    socialContainer.innerHTML = socialLinks.map(social => `
      <a href="${social.url}" class="social-chip" ${social.url.startsWith("http") ? 'target="_blank" rel="noopener noreferrer"' : ''}>
        <span>${escapeHTML(social.icon)}</span>
        <span>${escapeHTML(social.platform)}</span>
        ${social.displayValue ? `<span class="social-chip-badge">${escapeHTML(social.displayValue)}</span>` : ""}
      </a>
    `).join("");
  }
}

/**
 * Render Footer Section
 */
function renderFooter(personal, footer) {
  const footerNameEl = document.getElementById("footer-name");
  if (footerNameEl) footerNameEl.textContent = personal.name;

  const footerRoleEl = document.getElementById("footer-role");
  if (footerRoleEl) footerRoleEl.textContent = `${personal.currentYear} ${personal.degree} (${personal.branch}) · ${personal.college}`;

  const footerCopyEl = document.getElementById("footer-copyright");
  if (footerCopyEl) footerCopyEl.textContent = footer.copyrightText;

  const footerNoteEl = document.getElementById("footer-note");
  if (footerNoteEl) footerNoteEl.textContent = footer.note;
}

/**
 * Theme toggle handler (Dark / Light mode with local persistence)
 */
function initThemeToggle() {
  const themeToggleBtn = document.getElementById("theme-toggle");
  const htmlRoot = document.documentElement;

  // Retrieve existing user choice or default to dark
  const savedTheme = localStorage.getItem("akriti_portfolio_theme") || "dark";
  htmlRoot.setAttribute("data-theme", savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const currentTheme = htmlRoot.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      htmlRoot.setAttribute("data-theme", newTheme);
      localStorage.setItem("akriti_portfolio_theme", newTheme);
    });
  }
}

/**
 * Mobile navigation toggle handler
 */
function initMobileMenu() {
  const menuBtn = document.getElementById("mobile-menu-btn");
  const navMenu = document.getElementById("nav-menu");

  if (!menuBtn || !navMenu) return;

  menuBtn.addEventListener("click", () => {
    const isExpanded = menuBtn.getAttribute("aria-expanded") === "true";
    menuBtn.setAttribute("aria-expanded", !isExpanded);
    menuBtn.classList.toggle("active");
    navMenu.classList.toggle("open");
  });

  // Close mobile navigation when a nav link is clicked
  const navLinks = navMenu.querySelectorAll(".nav-link");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      menuBtn.classList.remove("active");
      menuBtn.setAttribute("aria-expanded", "false");
      navMenu.classList.remove("open");
    });
  });
}

/**
 * ScrollSpy to highlight active navigation link as user scrolls
 */
function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");
  const header = document.getElementById("navbar");

  window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY || window.pageYOffset;

    // Header shadow on scroll
    if (header) {
      if (scrollPos > 40) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }

    // Active link highlighting
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }, { passive: true });
}

/**
 * Back to top floating button logic
 */
function initBackToTop() {
  const backToTopBtn = document.getElementById("back-to-top");
  if (!backToTopBtn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add("visible");
    } else {
      backToTopBtn.classList.remove("visible");
    }
  }, { passive: true });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

/**
 * Utility helper to prevent HTML injection in rendered strings
 */
function escapeHTML(str) {
  if (typeof str !== "string") return str;
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
