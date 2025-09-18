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

    <!-- Control Panel -->
    <a href="./index.php" class="ENG">
        <div class="control-panel">
            <button class="control-button lang-toggle" id="langToggle">
                <span class="lang-text">ENG</span>
            </button>
    </a>
    <button class="control-button theme-toggle" id="themeToggle">
        <i class="fas fa-sun"></i>
    </button>
    </div>

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
                <p class="profile-title" data-en="Software Developer Student" data-nl="Software Ontwikkelaar Student">Software Developer Student</p>
            </div>

            <ul class="nav-list">
                <li class="nav-item active" data-target="home">
                    <i class="fas fa-home"></i>
                    <span data-en="Home" data-nl="Home">Thuis</span>
                </li>
                <li class="nav-item" data-target="about">
                    <i class="fas fa-user"></i>
                    <span data-en="About Me" data-nl="Over Mij">Over mij</span>
                </li>
                <li class="nav-item" data-target="projects">
                    <i class="fas fa-code"></i>
                    <span data-en="Projects" data-nl="Projecten">Projecten</span>
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
                        <span class="typing-line">&lt; <span data-en="Hello, I'm" data-nl="Hallo, ik ben">Hallo, Ik ben</span> <span class="highlight">Olgun Hristov</span> /&gt;</span>
                    </h1>
                    <h2 class="typing-text">
                        <span class="typing-line">&lt; <span data-en="A Software Developer Student" data-nl="Een Software Ontwikkelaar Student">Een Software Developer Student</span> /&gt;</span>
                    </h2>
                    <p class="typing-text">
                        <span class="typing-line">&lt; <span data-en="Welcome to my portfolio site - Here you can see my projects and who I am" data-nl="Welkom op mijn portfolio site - Hier kun je mijn projecten zien en wie ik ben">Welcome op mijn portfolio site - Hier kan je mijn projecten zien en wie ik ben</span> /&gt;</span>
                    </p>
                    <div class="cta-buttons typing-text">
                        <a href="#projects" class="btn btn-primary" data-en="View My Work" data-nl="Bekijk Mijn Werk">Zie mijn werk</a>
                        <a href="#about" class="btn btn-outline" data-en="About Me" data-nl="Over Mij">Over mij</a>
                        <a href="./img/CVOlgun.png" class="btn btn-outline" target="_blank" data-en="Download CV" data-nl="Download CV">Download CV</a>
                    </div>
                </div>
            </section>

            <!-- About Section -->
            <section class="about" id="about">
                <div class="about-card">
                    <h2 data-en="About Me" data-nl="Over Mij">Over mij</h2>
                    <div class="about-content">
                        <div class="about-avatar">
                            <i class="fas fa-code"></i>
                        </div>
                        <div class="about-text">
                            <p data-en="I'm a passionate software developer student at Mediacollege Amsterdam, specializing in front-end development with a interest in robotics." data-nl="Ik ben een gepassioneerde software ontwikkelaar student aan het Mediacollege Amsterdam, gespecialiseerd in front-end ontwikkeling met interesse in robotica.">Ik ben een gepassioneerde software ontwikkelaar student aan het Mediacollege Amsterdam, gespecialiseerd in front-end ontwikkeling met interesse in robotica.</p>
                            <p data-en="I enjoy creating cool and interesting interfaces. My goal is to bridge the gap between beautiful design and functional code." data-nl="Ik vind het leuk om coole en interessante interfaces te maken. Mijn doel is om de kloof tussen mooi ontwerp en functionele code te overbruggen.">Ik vind het leuk om coole en interessante interfaces te maken. Mijn doel is om de kloof tussen mooi ontwerp en functionele code te overbruggen.</p>
                        </div>
                    </div>
                    <div class="skills-section">
                        <h3 data-en="Skills & Technologies" data-nl="Vaardigheden & Technologieën">Skills & Technologies</h3>
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
                                <div data-en="Robotics" data-nl="Robotica">Robotics</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Projects Section -->
            <section class="projects" id="projects">
                <div class="projects-container">
                    <h2 data-en="My Projects" data-nl="Mijn Projecten">Mijn Projecten</h2>
                    <div class="projects-grid">
                        <div class="project-card">
                            <img src="./img/greenline.png" alt="Project 1" class="ProjectsImg">
                            <div class="project-content">
                                <h3 class="project-title">GreenLine</h3>
                                <p class="project-description" data-en="I had a school project to work with LBS (a school in sweden). To make a game and a website where you can download the game" data-nl="Ik had een schoolproject om samen te werken met LBS (een school in Zweden). Om een spel en een website te maken waar je het spel kunt downloaden">Ik had een schoolproject om samen te werken met LBS (een school in Zweden). Om een spel en een website te maken waar je het spel kunt downloaden</p>
                                <div class="project-tech">
                                    <span class="tech-tag">HTML</span>
                                    <span class="tech-tag">CSS</span>
                                    <span class="tech-tag">JavaScript</span>
                                </div>
                                <div class="project-links">
                                    <a target="_blank" href="https://37277.hosts2.ma-cloud.nl/sweden/" class="project-link primary" data-en="Live Demo" data-nl="Live Demo">Live Demo</a>
                                    <a href="https://github.com/coo1boy2169/Web-Sweden" class="project-link secondary">GitHub</a>
                                </div>
                            </div>
                        </div>

                        <div class="project-card">
                            <img src="./img/facecord.png" alt="Project 2" class="ProjectsImgCord">
                            <div class="project-content">
                                <h3 class="project-title">Facecord</h3>
                                <p class="project-description" data-en="For a school project I needed to make a social media site with the same interface as Facebook and the color scheme of Discord" data-nl="Voor een schoolproject moest ik een social media site maken met dezelfde interface als Facebook en het kleurenschema van Discord">Voor een schoolproject moest ik een social media site maken met dezelfde interface als Facebook en het kleurenschema van Discord</p>
                                <div class="project-tech">
                                    <span class="tech-tag">HTML</span>
                                    <span class="tech-tag">CSS</span>
                                    <span class="tech-tag">JavaScript</span>
                                    <span class="tech-tag">PHP</span>
                                </div>
                                <div class="project-links">
                                    <a target="_blank" href="https://36889.hosts2.ma-cloud.nl/Media" class="project-link primary" data-en="Live Demo" data-nl="Live Demo">Live Demo</a>
                                </div>
                            </div>
                        </div>

                        <div class="project-card">
                            <img src="./img/cardgame.png" alt="Project 3" class="ProjectsImg">
                            <div class="project-content">
                                <h3 class="project-title" data-en="Card Game" data-nl="Kaartspel">Card Game</h3>
                                <p class="project-description" data-en="I made a card game with HTML JS and CSS it is a dutch version of UNO called pesten you play against a NPC try it out!" data-nl="Ik heb een kaartspel gemaakt met HTML JS en CSS het is een Nederlandse versie van UNO genaamd pesten je speelt tegen een NPC probeer het uit!">Ik heb een kaartspel gemaakt met HTML JS en CSS het is een Nederlandse versie van UNO genaamd pesten je speelt tegen een NPC probeer het uit!</p>
                                <div class="project-tech">
                                    <span class="tech-tag">HTML</span>
                                    <span class="tech-tag">JavaScript</span>
                                    <span class="tech-tag">CSS</span>
                                </div>
                                <div class="project-links">
                                    <a target="_blank" href="https://36889.hosts2.ma-cloud.nl/cardspel" class="project-link primary" data-en="Live Demo" data-nl="Live Demo">Live Demo</a>
                                </div>
                            </div>
                        </div>

                        <div class="project-card">
                            <img src="./img/falppyposter.jpg" alt="Project 4" class="ProjectsImgBird">
                            <div class="project-content">
                                <h3 class="project-title">FlappyBird</h3>
                                <p class="project-description" data-en="Me and 2 other classmates made a flappy bird with JS and Arduino with a sensor so every time you move the bird moves with you look at the live game play!" data-nl="Ik en 2 andere klasgenoten hebben een flappy bird gemaakt met JS en Arduino met een sensor zodat elke keer dat je beweegt de vogel met je meebeweegt kijk naar de live gameplay!">Ik en 2 andere klasgenoten hebben een flappy bird gemaakt met JS en Arduino met een sensor zodat elke keer dat je beweegt de vogel met je meebeweegt kijk naar de live gameplay!</p>
                                <div class="project-tech">
                                    <span class="tech-tag">Arduino</span>
                                    <span class="tech-tag">JavaScript</span>
                                    <span class="tech-tag">HTML</span>
                                    <span class="tech-tag">CSS</span>
                                </div>
                                <div class="project-links">
                                    <a target="_blank" href="./img/falppybird.mp4" class="project-link primary" data-en="Live Demo" data-nl="Live Demo">Live Demo</a>
                                    <a  target="_blank" href="https://github.com/SaadSaedd/M6BO.git" class="project-link secondary">GitHub</a>

                                </div>
                            </div>
                        </div>

                        <div class="project-card">
                            <img src="./img/pokeapi.png" alt="Project 5" class="ProjectsImgpoke">
                            <div class="project-content">
                                <h3 class="project-title">Pokemon API</h3>
                                <p class="project-description" data-en="I made a Pokemon API catch game so every time you refresh your page a pokemon appears and you can try to catch it try it out!" data-nl="Ik heb een Pokemon API vangspel gemaakt zodat elke keer als je je pagina ververst er een pokemon verschijnt en je kunt proberen hem te vangen probeer het uit!">Ik heb een Pokemon API vangspel gemaakt zodat elke keer als je je pagina ververst er een pokemon verschijnt en je kunt proberen hem te vangen probeer het uit!</p>
                                <div class="project-tech">
                                    <span class="tech-tag">API</span>
                                    <span class="tech-tag">JavaScript</span>
                                    <span class="tech-tag">HTML</span>
                                    <span class="tech-tag">CSS</span>
                                </div>
                                <div class="project-links">
                                    <a target="_blank" href="https://36889.hosts2.ma-cloud.nl/Portfolio/pokemon" class="project-link primary" data-en="Live Demo" data-nl="Live Demo">Live Demo</a>

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
        <span data-en="Scroll to explore" data-nl="Scroll om te ontdekken">Scroll voor meer</span>
        <i class="fas fa-chevron-down"></i>
    </div>

    <script src="script.js"></script>
</body>

</html>