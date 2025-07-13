// Enhanced smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.offsetTop;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Enhanced active navigation highlighting
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Enhanced contact form handling with animations
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const formObject = {};
    formData.forEach((value, key) => {
        formObject[key] = value;
    });
    
    // Show loading state
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Sending Message...';
    submitBtn.disabled = true;
    submitBtn.classList.add('loading');
    
    // Simulate form submission with realistic timing
    setTimeout(() => {
        submitBtn.innerHTML = '<i class="fas fa-check mr-2"></i>Message Sent Successfully!';
        submitBtn.classList.remove('loading');
        submitBtn.classList.remove('bg-gradient-to-r', 'from-yellow-400', 'to-orange-500');
        submitBtn.classList.add('bg-green-500');
        
        // Show success notification
        showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
        
        // Reset form
        this.reset();
        
        // Reset button after 3 seconds
        setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            submitBtn.classList.remove('bg-green-500');
            submitBtn.classList.add('bg-gradient-to-r', 'from-yellow-400', 'to-orange-500');
        }, 3000);
    }, 2000);
});

// Enhanced skill progress animation
function animateSkills() {
    const skillBars = document.querySelectorAll('.progress-fill');
    
    skillBars.forEach((bar, index) => {
        const targetWidth = bar.getAttribute('data-width') + '%';
        bar.style.width = '0%';
        
        setTimeout(() => {
            bar.style.width = targetWidth;
        }, index * 200);
    });
}

// Enhanced intersection observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            
            // Trigger specific animations based on section
            if (entry.target.id === 'skills') {
                setTimeout(() => animateSkills(), 500);
            }
            
            if (entry.target.id === 'achievements') {
                animateCounters();
            }
        }
    });
}, observerOptions);

// Observe all sections and cards
document.querySelectorAll('section, .card, .group').forEach(element => {
    element.classList.add('fade-in-up');
    observer.observe(element);
});

// Counter animation for achievements
function animateCounters() {
    const counters = document.querySelectorAll('.text-3xl, .text-2xl');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent.replace(/\D/g, ''));
        if (target && target > 0) {
            let current = 0;
            const increment = target / 100;
            
            const updateCounter = () => {
                if (current < target) {
                    current += increment;
                    counter.textContent = Math.floor(current) + (counter.textContent.includes('+') ? '+' : '');
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target + (counter.textContent.includes('+') ? '+' : '');
                }
            };
            
            updateCounter();
        }
    });
}

// Enhanced resume content loading
// Enhanced resume content loading with schooling information
function loadResumeContent() {
    const resumeContent = document.getElementById('resume-content');
    
    resumeContent.innerHTML = `
        <div class="text-center mb-8">
            <h1>Desh Aditya Chelluboina</h1>
            <div class="contact-info">
                <span><i class="fas fa-map-marker-alt text-blue-600"></i> Tatipaka, AP</span>
                <span><i class="fas fa-envelope text-blue-600"></i> deshaditya7@gmail.com</span>
                <span><i class="fas fa-phone text-blue-600"></i> +91 9133623681</span>
            </div>
            <div class="flex justify-center space-x-6 text-sm mt-4">
                <span class="flex items-center"><i class="fab fa-github text-gray-600 mr-1"></i> desh-aditya</span>
                <span class="flex items-center"><i class="fab fa-linkedin text-blue-600 mr-1"></i> desh-aditya-ch</span>
                <span class="flex items-center"><i class="fas fa-globe text-green-600 mr-1"></i> g.dev/deshaditya</span>
            </div>
        </div>

        <h2>Professional Summary</h2>
        <p>
            Seeking an opportunity to enhance my creative and innovative abilities by contributing to impactful projects, 
            while continuously learning and applying new skills in a dynamic, growth-oriented environment. Skilled in 
            JavaScript, Node.js, and AI integration with demonstrated experience in developing innovative solutions for 
            education and travel domains. Strong problem-solving abilities with active participation in competitive programming.
        </p>

        <h2>Education</h2>
        <div class="education-item">
            <h3>B.Tech in Information Technology</h3>
            <p><strong>Vignan's Institute of Information Technology, Visakhapatnam</strong></p>
            <p>Current CGPA: 8.7/10.0 | July 2024 – Present</p>
            <p>Relevant Coursework: Data Structures, Algorithms, Web Technologies, Database Management Systems</p>
        </div>

        <div class="education-item">
            <h3>Diploma in Computer Science and Engineering</h3>
            <p><strong>SMT.B.Seetha Polytechnic College, Bhimavaram</strong></p>
            <p>Percentage: 87% | Graduated May 2024</p>
            <p>Specialized in computer programming fundamentals</p>
        </div>

        <div class="education-item">
            <h3>High School</h3>
            <p><strong>KVLP.Z.P High School, Mogalikuduru</strong></p>
            <p>2016 – 2021</p>
            <p>Core Subjects: Computer Science Fundamentals</p>
        </div>

        <h2>Technical Skills</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-3">
                <h3>Programming Languages</h3>
                <p>JavaScript, C++, Python, HTML5, CSS3</p>
                
                <h3>Frameworks & Libraries</h3>
                <p>Node.js, Express.js, React.js (learning)</p>
            </div>
            <div class="space-y-3">
                <h3>Databases</h3>
                <p>MongoDB, MongoDB Atlas, Firebase Firestore</p>
                
                <h3>Cloud & Authentication</h3>
                <p>Firebase, AWS, JWT Authentication, Google Sign-In</p>
            </div>
        </div>

        <h2>Projects</h2>
        <div class="project-item">
            <h3>AI-Driven Study Plan Generator</h3>
            <p>
                Developed responsive web application enabling students to generate personalized study plans using 
                AI integration with Hugging Face API. Implemented secure Firebase Authentication with Google Sign-In 
                and Firestore database for user-specific data management.
            </p>
            <h4 class="font-semibold mt-3 mb-2">Key Features:</h4>
            <ul class="list-disc list-inside space-y-1 text-sm">
                <li>AI-powered personalized study plan generation</li>
                <li>Secure Firebase authentication with Google Sign-In</li>
                <li>Intuitive dashboard with history viewing and plan deletion</li>
                <li>RESTful API endpoints for seamless frontend-backend communication</li>
            </ul>
            <div class="tech-stack">
                <span class="tech-item">HTML5</span>
                <span class="tech-item">CSS3</span>
                <span class="tech-item">JavaScript</span>
                <span class="tech-item">Node.js</span>
                <span class="tech-item">Firebase</span>
                <span class="tech-item">Hugging Face AI</span>
            </div>
        </div>

        <div class="project-item">
            <h3>AI Travel Itinerary Generator</h3>
            <p>
                Engineered comprehensive travel planning application that generates customized itineraries based on 
                user preferences. Integrated JWT-based authentication system ensuring secure user access and data 
                privacy protection. Implemented MongoDB database for persistent storage with full CRUD operations.
            </p>
            <h4 class="font-semibold mt-3 mb-2">Key Features:</h4>
            <ul class="list-disc list-inside space-y-1 text-sm">
                <li>AI-powered itinerary generation using Gemini 1.5 Flash API</li>
                <li>JWT-based authentication system with secure user access</li>
                <li>MongoDB database with full CRUD operations</li>
                <li>PDF generation functionality for offline access</li>
            </ul>
            <div class="tech-stack">
                <span class="tech-item">HTML5</span>
                <span class="tech-item">CSS3</span>
                <span class="tech-item">JavaScript</span>
                <span class="tech-item">Node.js</span>
                <span class="tech-item">MongoDB</span>
                <span class="tech-item">Gemini AI</span>
            </div>
        </div>

        <h2>Competitive Programming</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-blue-50 p-4 rounded-lg">
                <h3>LeetCode</h3>
                <p>Solved 247+ problems with 56-day current streak and 262 active days</p>
                <p class="text-sm text-gray-600 mt-1">Consistent daily practice with focus on algorithmic problem solving</p>
            </div>
            <div class="bg-purple-50 p-4 rounded-lg">
                <h3>CodeChef</h3>
                <p>Active participant with 1271 rating, regular contest participation</p>
                <p class="text-sm text-gray-600 mt-1">Strong foundation in competitive programming concepts</p>
            </div>
        </div>

        <h2>Certifications & Training</h2>
        <div class="space-y-3">
            <div class="flex items-start space-x-3">
                <i class="fas fa-certificate text-blue-600 mt-1"></i>
                <div>
                    <h4 class="font-semibold">Python Essentials Certification</h4>
                    <p class="text-sm text-gray-600">Cisco Networking Academy</p>
                    <p class="text-xs text-gray-500">Comprehensive Python programming course covering fundamentals and practical applications</p>
                </div>
            </div>
            <div class="flex items-start space-x-3">
                <i class="fas fa-cloud text-blue-600 mt-1"></i>
                <div>
                    <h4 class="font-semibold">AWS Cloud Computing Workshop</h4>
                    <p class="text-sm text-gray-600">APSSDC (15 Days)</p>
                    <p class="text-xs text-gray-500">Hands-on experience with AWS services, cloud architecture, and deployment strategies</p>
                </div>
            </div>
        </div>

        <h2>Hackathons & Events</h2>
        <div class="project-item">
            <h3>Vista Hackathon - Education Theme</h3>
            <p>
                Developed innovative solution addressing student challenges in finding quality educational resources. 
                Utilized full-stack development skills with HTML, CSS, JavaScript, Node.js, Firebase, and 
                Hugging Face AI. Enhanced collaborative development skills and learned agile project management principles.
            </p>
            <div class="flex items-center justify-between mt-3">
                <span class="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">Team of 4 members</span>
                <span class="text-sm text-gray-600">Full-stack solution development</span>
            </div>
        </div>

        <h2>Additional Information</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <h4 class="font-semibold mb-2">Languages</h4>
                <p>English (Fluent), Telugu (Native)</p>
            </div>
            <div>
                <h4 class="font-semibold mb-2">Interests</h4>
                <p>Artificial Intelligence, Machine Learning, Web Development, Open Source Contributions</p>
            </div>
        </div>
    `;
}
    const resumeContent = document.getElementById('resume-content');
    
    resumeContent.innerHTML = `
        <div class="text-center mb-8">
            <h1>Desh Aditya Chelluboina</h1>
            <div class="contact-info">
                <span><i class="fas fa-map-marker-alt text-blue-600"></i> Tatipaka, AP</span>
                <span><i class="fas fa-envelope text-blue-600"></i> deshaditya7@gmail.com</span>
                <span><i class="fas fa-phone text-blue-600"></i> +91 9133623681</span>
            </div>
            <div class="flex justify-center space-x-6 text-sm mt-4">
                <span class="flex items-center"><i class="fab fa-github text-gray-600 mr-1"></i> desh-aditya</span>
                <span class="flex items-center"><i class="fab fa-linkedin text-blue-600 mr-1"></i> desh-aditya-ch</span>
                <span class="flex items-center"><i class="fas fa-globe text-green-600 mr-1"></i> g.dev/deshaditya</span>
            </div>
        </div>

        <h2>Professional Summary</h2>
        <p>
            Seeking an opportunity to enhance my creative and innovative abilities by contributing to impactful projects, 
            while continuously learning and applying new skills in a dynamic, growth-oriented environment. Skilled in 
            JavaScript, Node.js, and AI integration with demonstrated experience in developing innovative solutions for 
            education and travel domains. Strong problem-solving abilities with active participation in competitive programming.
        </p>

        <h2>Education</h2>
        <div class="education-item">
            <h3>B.Tech in Information Technology</h3>
            <p><strong>Vignan's Institute of Information Technology, Visakhapatnam</strong></p>
            <p>Current CGPA: 8.7/10.0 | July 2024 – Present</p>
            <p>Relevant Coursework: Data Structures, Algorithms, Web Technologies, Database Management Systems</p>
        </div>

        <div class="education-item">
            <h3>Diploma in Computer Science and Engineering</h3>
            <p><strong>SMT.B.Seetha Polytechnic College, Bhimavaram</strong></p>
            <p>Percentage: 87% | Graduated May 2024</p>
            <p>Specialized in computer programming fundamentals</p>
        </div>

        <h2>Technical Skills</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-3">
                <h3>Programming Languages</h3>
                <p>JavaScript, C++, Python, HTML5, CSS3</p>
                
                <h3>Frameworks & Libraries</h3>
                <p>Node.js, Express.js, React.js (learning)</p>
            </div>
            <div class="space-y-3">
                <h3>Databases</h3>
                <p>MongoDB, MongoDB Atlas, Firebase Firestore</p>
                
                <h3>Cloud & Authentication</h3>
                <p>Firebase, AWS, JWT Authentication, Google Sign-In</p>
            </div>
        </div>

        <h2>Projects</h2>
        <div class="project-item">
            <h3>AI-Driven Study Plan Generator</h3>
            <p>
                Developed responsive web application enabling students to generate personalized study plans using 
                AI integration with Hugging Face API. Implemented secure Firebase Authentication with Google Sign-In 
                and Firestore database for user-specific data management.
            </p>
            <h4 class="font-semibold mt-3 mb-2">Key Features:</h4>
            <ul class="list-disc list-inside space-y-1 text-sm">
                <li>AI-powered personalized study plan generation</li>
                <li>Secure Firebase authentication with Google Sign-In</li>
                <li>Intuitive dashboard with history viewing and plan deletion</li>
                <li>RESTful API endpoints for seamless frontend-backend communication</li>
            </ul>
            <div class="tech-stack">
                <span class="tech-item">HTML5</span>
                <span class="tech-item">CSS3</span>
                <span class="tech-item">JavaScript</span>
                <span class="tech-item">Node.js</span>
                <span class="tech-item">Firebase</span>
                <span class="tech-item">Hugging Face AI</span>
            </div>
        </div>

        <div class="project-item">
            <h3>AI Travel Itinerary Generator</h3>
            <p>
                Engineered comprehensive travel planning application that generates customized itineraries based on 
                user preferences. Integrated JWT-based authentication system ensuring secure user access and data 
                privacy protection. Implemented MongoDB database for persistent storage with full CRUD operations.
            </p>
            <h4 class="font-semibold mt-3 mb-2">Key Features:</h4>
            <ul class="list-disc list-inside space-y-1 text-sm">
                <li>AI-powered itinerary generation using Gemini 1.5 Flash API</li>
                <li>JWT-based authentication system with secure user access</li>
                <li>MongoDB database with full CRUD operations</li>
                <li>PDF generation functionality for offline access</li>
            </ul>
            <div class="tech-stack">
                <span class="tech-item">HTML5</span>
                <span class="tech-item">CSS3</span>
                <span class="tech-item">JavaScript</span>
                <span class="tech-item">Node.js</span>
                <span class="tech-item">MongoDB</span>
                <span class="tech-item">Gemini AI</span>
            </div>
        </div>

        <h2>Competitive Programming</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-blue-50 p-4 rounded-lg">
                <h3>LeetCode</h3>
                <p>Solved 247+ problems with 56-day current streak and 262 active days</p>
                <p class="text-sm text-gray-600 mt-1">Consistent daily practice with focus on algorithmic problem solving</p>
            </div>
            <div class="bg-purple-50 p-4 rounded-lg">
                <h3>CodeChef</h3>
                <p>Active participant with 1271 rating, regular contest participation</p>
                <p class="text-sm text-gray-600 mt-1">Strong foundation in competitive programming concepts</p>
            </div>
        </div>

        <h2>Certifications & Training</h2>
        <div class="space-y-3">
            <div class="flex items-start space-x-3">
                <i class="fas fa-certificate text-blue-600 mt-1"></i>
                <div>
                    <h4 class="font-semibold">Python Essentials Certification</h4>
                    <p class="text-sm text-gray-600">Cisco Networking Academy</p>
                    <p class="text-xs text-gray-500">Comprehensive Python programming course covering fundamentals and practical applications</p>
                </div>
            </div>
            <div class="flex items-start space-x-3">
                <i class="fas fa-cloud text-blue-600 mt-1"></i>
                <div>
                    <h4 class="font-semibold">AWS Cloud Computing Workshop</h4>
                    <p class="text-sm text-gray-600">APSSDC (15 Days)</p>
                    <p class="text-xs text-gray-500">Hands-on experience with AWS services, cloud architecture, and deployment strategies</p>
                </div>
            </div>
        </div>

        <h2>Hackathons & Events</h2>
        <div class="project-item">
            <h3>Vista Hackathon - Education Theme</h3>
            <p>
                Developed innovative solution addressing student challenges in finding quality educational resources. 
                Utilized full-stack development skills with HTML, CSS, JavaScript, Node.js, Firebase, and 
                Hugging Face AI. Enhanced collaborative development skills and learned agile project management principles.
            </p>
            <div class="flex items-center justify-between mt-3">
                <span class="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">Team of 4 members</span>
                <span class="text-sm text-gray-600">Full-stack solution development</span>
            </div>
        </div>

        <h2>Additional Information</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <h4 class="font-semibold mb-2">Languages</h4>
                <p>English (Fluent), Telugu (Native)</p>
            </div>
            <div>
                <h4 class="font-semibold mb-2">Interests</h4>
                <p>Artificial Intelligence, Machine Learning, Web Development, Open Source Contributions</p>
            </div>
        </div>
    `;
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 transition-all duration-300 transform translate-x-full`;
    
    const bgColor = type === 'success' ? 'bg-green-500' : type === 'error' ? 'bg-red-500' : 'bg-blue-500';
    notification.classList.add(bgColor, 'text-white');
    
    notification.innerHTML = `
        <div class="flex items-center space-x-2">
            <i class="fas fa-${type === 'success' ? 'check' : type === 'error' ? 'times' : 'info'}-circle"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 100);
    
    // Animate out and remove
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 4000);
}

// Enhanced navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-lg');
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    } else {
        navbar.classList.remove('shadow-lg');
        navbar.style.background = 'rgba(255, 255, 255, 0.8)';
    }
});

// Typing effect for hero section
function typeWriter(element, text, speed = 80) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize everything on page load
document.addEventListener('DOMContentLoaded', function() {
    loadResumeContent();
    
    // Initialize typing effect
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
        const lines = heroTitle.innerHTML.split('<br>');
        heroTitle.innerHTML = '';
        
        let delay = 0;
        lines.forEach((line, index) => {
            const span = document.createElement('span');
            span.innerHTML = line;
            if (index < lines.length - 1) {
                span.innerHTML += '<br>';
            }
            heroTitle.appendChild(span);
            
            setTimeout(() => {
                typeWriter(span, span.textContent, 60);
            }, delay);
            
            delay += line.length * 60 + 500;
        });
    }
    
    // Initialize skill progress bars
    setTimeout(() => {
        if (window.scrollY < 100) {
            // Only animate if user hasn't scrolled yet
            const skillsSection = document.getElementById('skills');
            if (skillsSection) {
                observer.observe(skillsSection);
            }
        }
    }, 2000);
});

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const modal = document.getElementById('resume-modal');
        if (modal.open) {
            modal.close();
        }
    }
});

// Lazy loading for better performance
const lazyImages = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
        }
    });
});

lazyImages.forEach(img => imageObserver.observe(img));

// Performance monitoring
if ('performance' in window) {
    window.addEventListener('load', function() {
        setTimeout(() => {
            const perfData = performance.getEntriesByType('navigation')[0];
            if (perfData.loadEventEnd - perfData.loadEventStart > 3000) {
                console.log('Page load time is high, consider optimization');
            }
        }, 0);
    });
}