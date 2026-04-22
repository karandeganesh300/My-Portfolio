$(document).ready(function () {
    
    // 1. Initialize Animate On Scroll (AOS)
    AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 50
    });

    // 2. Direct Data (Replacing AJAX/CORS dependency so it runs without a server)
    const profileData = {
        "name": "Ganesh Karande",
        "role": "Computer Science Student | Aspiring Software Developer",
        "about": "I am a Computer Science student who loves solving problems and understanding the logic behind how things work. I enjoy coding, building real-world projects, and continuously learning new technologies to improve my skills every day. Outside of coding, you will often find me playing chess, solving complex puzzles, and diving into logical games that keep my mind sharp!",
        "skills": [
            {"name": "C Language", "level": 85},
            {"name": "Python", "level": 80},
            {"name": "HTML/CSS", "level": 90},
            {"name": "JavaScript", "level": 85},
            {"name": "SQL", "level": 80}
        ],
        "projects": [
            {
                "title": "EcoScrap (In Progress)",
                "desc": "A comprehensive e-waste management platform where users can safely sell, buy, and recycle electronic waste materials.",
                "type": "College Project",
                "icon": "fa-recycle"
            },
            {
                "title": "Animal Awareness Website", 
                "desc": "An interactive web platform designed to spread awareness about animal welfare, care, and conservation.",
                "type": "College Project",
                "icon": "fa-paw"
            },
            {
                "title": "AI Voice Cloning Platform",
                "desc": "A machine learning audio application capable of seamlessly converting written text into custom cloned human voices.",
                "type": "Personal Project",
                "icon": "fa-microphone-lines"
            }
        ]
    };



    // Populate Hero & About Section
    $("#name").text(profileData.name);
    $("#role").text(profileData.role);
    $("#about-text").text(profileData.about);

    // Load Skills dynamically with a premium grid layout
    let skillsHTML = "<div class='row g-4 justify-content-center'>";
    const skillIcons = {
        'HTML/CSS': 'fab fa-html5',
        'JavaScript': 'fab fa-js',
        'Python': 'fab fa-python',
        'SQL': 'fas fa-database',
        'C Language': 'fas fa-c'
    };

    profileData.skills.forEach((skill, index) => {
        let delay = index * 100;
        let iconClass = skillIcons[skill.name] || 'fas fa-code';
        skillsHTML += `
        <div class="col-6 col-md-4 col-lg-3" data-aos="fade-up" data-aos-delay="${delay}">
            <div class="skill-card p-4 rounded-4 bg-white text-center border h-100 position-relative shadow-sm d-flex flex-column align-items-center justify-content-center">
                <div class="skill-icon-glow"></div>
                <div class="skill-icon-wrapper rounded-4 d-flex align-items-center justify-content-center text-white position-relative z-2 mb-3" style="width: 65px; height: 65px; background: var(--accent-gradient);">
                    <i class="${iconClass} fs-2"></i>
                </div>
                <span class="fw-bold text-dark tracking-wide position-relative z-2" style="font-size: 1.1rem;">${skill.name}</span>
            </div>
        </div>`;
    });
    skillsHTML += "</div>";
    $("#skills").html(skillsHTML);

    // Load Projects dynamically
    let projHTML = "";
    
    profileData.projects.forEach((p, index) => {
        let delay = index * 150;
        let iconClass = p.icon || 'fa-laptop-code';
        
        projHTML += `
        <div class="col-md-6 col-lg-5" data-aos="fade-up" data-aos-delay="${delay}">
            <div class="project-card">
                <div class="project-icon mb-3">
                    <i class="fas ${iconClass}"></i>
                </div>
                <h4 class="fw-bold mb-3">${p.title}</h4>
                <p class="text-secondary mb-0 lh-lg">${p.desc}</p>
            </div>
        </div>`;
    });
    $("#projects").html(projHTML);


    
    // 4. Navbar Background Effect on Scroll
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('shadow-sm');
            $('.navbar').css('background-color', 'rgba(255, 255, 255, 0.98)');
        } else {
            $('.navbar').removeClass('shadow-sm');
            $('.navbar').css('background-color', 'rgba(248, 250, 252, 0.8)');
        }
    });

});
