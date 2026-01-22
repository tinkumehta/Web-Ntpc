  // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const navLinks = document.getElementById('navLinks');
        
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuBtn.innerHTML = navLinks.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
        
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if(targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    // Close mobile menu if open
                    navLinks.classList.remove('active');
                    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                    
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Form submission handling
        const admissionForm = document.getElementById('admissionForm');
        
        admissionForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const formValues = Object.fromEntries(formData.entries());
            
            // In a real application, you would send this data to a server
            // For this demo, we'll just show an alert
            alert(`Thank you for your admission inquiry, ${formValues.parentName}! 
            \nWe have received your application for ${formValues.studentName} for Grade ${formValues.grade}.
            \nOur admissions team will contact you at ${formValues.phone} or ${formValues.email} within 2 working days.`);
            
            // Reset form
            admissionForm.reset();
            
            // Scroll to top of form
            document.getElementById('admissions').scrollIntoView({behavior: 'smooth'});
        });
        
        // Highlight active section in navigation
        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('section[id]');
            const scrollPosition = window.scrollY + 150;
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');
                
                if(scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    document.querySelector(`.nav-links a[href="#${sectionId}"]`)?.classList.add('active');
                } else {
                    document.querySelector(`.nav-links a[href="#${sectionId}"]`)?.classList.remove('active');
                }
            });
        });