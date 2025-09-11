<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Olgun Hristov - Software Developer</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <!-- Background particles -->
    <div class="bg-particles" id="particles"></div>

    <!-- Mobile menu button -->
    <div class="mobile-menu" id="mobileMenu">
        <i class="fas fa-bars"></i>
    </div>

    <div class="container">
        <!-- Enhanced Sidebar -->
        <nav class="sidebar" id="sidebar">
            <div class="profile-section">
                <div class="profile-img">
                    <i class="fas fa-user"></i>
                </div>
                <h3 class="profile-name">Olgun Hristov</h3>
                <p class="profile-title">Software Developer Student</p>
            </div>

            <ul class="nav-list">
                <li class="nav-item active" data-target="home">
                    <i class="fas fa-home"></i>
                    <span>Home</span>
                </li>
                <li class="nav-item" data-target="about">
                    <i class="fas fa-user"></i>
                    <span>About Me</span>
                </li>
                <li class="nav-item" data-target="projects">
                    <i class="fas fa-code"></i>
                    <span>Projects</span>
                </li>
            </ul>

            <div class="contact-section">
                <a href="https://www.linkedin.com/in/olgun-hristov-a14733296" class="contact-link" target="_blank">
                    <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="mailto:hristovolgun@gmail.com" class="contact-link">
                    <i class="fas fa-envelope"></i>
                </a>
                <a href="https://github.com/coo1boy2169" class="contact-link" target="_blank">
                    <i class="fab fa-github"></i>
                </a>
            </div>
        </nav>

        <!-- Main Content -->
        <main class="main-content">
            <!-- Home Section -->
            <section class="home" id="home">
                <div class="hero-content">
                    <h1 class="typing-text">
                        <span class="typing-line">&lt; Hello, I'm <span class="highlight">Olgun Hristov</span> /&gt;</span>
                    </h1>
                    <h2 class="typing-text">
                        <span class="typing-line">&lt; A Software Developer Student /&gt;</span>
                    </h2>
                    <p class="typing-text">
                        <span class="typing-line">&lt; Welcome to my portfolio site - Here you can see my projects and who I am /&gt;</span>
                    </p>
                    <div class="cta-buttons typing-text">
                        <a href="#projects" class="btn btn-primary">View My Work</a>
                        <a href="#about" class="btn btn-outline">About Me</a>
                        <a href="./img/CVOlgun.png" class="btn btn-outline" target="_blank">Download CV</a>
                    </div>
                </div>
            </section>

            <!-- About Section -->
            <section class="about" id="about">
                <div class="about-card">
                    <h2>About Me</h2>
                    <div class="about-content">
                        <div class="about-avatar">
                            <i class="fas fa-code"></i>
                        </div>
                        <div class="about-text">
                            <p>I'm a passionate software developer student at Mediacollege Amsterdam, specializing in front-end development with a interest in robotics.</p>
                            <p>I enjoy creating cool and interasting interfaces and. My goal is to bridge the gap between beautiful design and functional code.</p>
                        </div>
                    </div>
                    <div class="skills-section">
                        <h3>Skills & Technologies</h3>
                        <div class="skills-grid">
                            <div class="skill-card">
                                <i class="fab fa-html5"></i>
                                <div>HTML</div>
                            </div>
                            <div class="skill-card">
                                <i class="fab fa-css3-alt"></i>
                                <div>CSS</div>
                            </div>
                            <div class="skill-card">
                                <i class="fab fa-js"></i>
                                <div>JavaScript</div>
                            </div>
                            <div class="skill-card">
                                <i class="fab fa-php"></i>
                                <div>PHP</div>
                            </div>
                            <div class="skill-card">
                                <i class="fas fa-database"></i>
                                <div>MySQL</div>
                            </div>
                            <div class="skill-card">
                                <i class="fas fa-mobile-alt"></i>
                                <div>Flutter</div>
                            </div>
                            <div class="skill-card">
                                <i class="fas fa-paint-brush"></i>
                                <div>Adobe XD</div>
                            </div>
                            <div class="skill-card">
                                <i class="fas fa-robot"></i>
                                <div>Robotics</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Projects Section -->
            <section class="projects" id="projects">
                <div class="projects-container">
                    <h2>My Projects</h2>
                    <div class="projects-grid">
                        <div class="project-card">
                                <img src="./img/greenline.png" alt="Project 1" class="ProjectsImg">

                            <div class="project-content">
                                <h3 class="project-title">GreenLine</h3>
                                <p class="project-description">I had a school project to work with LBS (a school in sweden). To make a game and a website where you can download the game</p>
                                <div class="project-tech">
                                    <span class="tech-tag">HTML</span>
                                    <span class="tech-tag">CSS</span>
                                    <span class="tech-tag">JavaScript</span>
                                </div>
                                <div class="project-links">
                                    <a target="_blank" href="https://37277.hosts2.ma-cloud.nl/sweden/" class="project-link primary">Live Demo</a>
                                    <a href="https://github.com/coo1boy2169/Web-Sweden" class="project-link secondary">GitHub</a>
                                </div>
                            </div>
                        </div>

                        <div class="project-card">
                            <div class="project-image">
                                <i class="fas fa-mobile-alt"></i>
                            </div>
                            <div class="project-content">
                                <h3 class="project-title">Flutter Mobile App</h3>
                                <p class="project-description">Cross-platform mobile application built with Flutter and Dart, featuring modern UI/UX design principles.</p>
                                <div class="project-tech">
                                    <span class="tech-tag">Flutter</span>
                                    <span class="tech-tag">Dart</span>
                                    <span class="tech-tag">Firebase</span>
                                </div>
                                <div class="project-links">
                                    <a href="#" class="project-link primary">View Details</a>
                                    <a href="#" class="project-link secondary">GitHub</a>
                                </div>
                            </div>
                        </div>

                        <div class="project-card">
                            <div class="project-image">
                                <i class="fas fa-database"></i>
                            </div>
                            <div class="project-content">
                                <h3 class="project-title">Web Application</h3>
                                <p class="project-description">Full-stack web application with PHP backend and MySQL database, featuring user authentication and dynamic content.</p>
                                <div class="project-tech">
                                    <span class="tech-tag">PHP</span>
                                    <span class="tech-tag">MySQL</span>
                                    <span class="tech-tag">Bootstrap</span>
                                </div>
                                <div class="project-links">
                                    <a href="#" class="project-link primary">Live Demo</a>
                                    <a href="#" class="project-link secondary">GitHub</a>
                                </div>
                            </div>
                        </div>

                        <div class="project-card">
                            <div class="project-image">
                                <i class="fas fa-robot"></i>
                            </div>
                            <div class="project-content">
                                <h3 class="project-title">Robotics Project</h3>
                                <p class="project-description">Exploring robotics and automation with Arduino and sensors. Building intelligent systems for real-world applications.</p>
                                <div class="project-tech">
                                    <span class="tech-tag">Arduino</span>
                                    <span class="tech-tag">IoT</span>
                                </div>
                                <div class="project-links">
                                    <a href="#" class="project-link primary">Learn More</a>
                                    <a href="#" class="project-link secondary">Documentation</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </div>

    <!-- Scroll indicator -->
    <div class="scroll-indicator" id="scrollIndicator">
        <span>Scroll to explore</span>
        <i class="fas fa-chevron-down"></i>
    </div>

    <script src="script.js"></script>
</body>

</html>