// ===================================
// GUEST CARD INTERACTIONS
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ===================================
    // Initialize all guest cards
    // ===================================
    const guestCards = document.querySelectorAll('.guest-card');
    
    // ===================================
    // Enhanced hover interactions
    // ===================================
    guestCards.forEach((card, index) => {
        
        // Mouse enter event
        card.addEventListener('mouseenter', function() {
            // Add active class for additional styling if needed
            this.classList.add('card-active');
        });
        
        // Mouse leave event
        card.addEventListener('mouseleave', function() {
            // Remove active class
            this.classList.remove('card-active');
        });
        
        // ===================================
        // 3D tilt effect on mouse move
        // ===================================
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 15;
            const rotateY = (centerX - x) / 15;
            
            const cardContent = this.querySelector('.card-content');
            
            // Apply subtle 3D rotation
            cardContent.style.transform = `
                scale(1.08) 
                rotateX(${rotateX}deg) 
                rotateY(${rotateY}deg)
            `;
        });
        
        // Reset rotation on mouse leave
        card.addEventListener('mouseleave', function() {
            const cardContent = this.querySelector('.card-content');
            cardContent.style.transform = 'scale(1) rotateX(0) rotateY(0)';
        });
    });
    
    // ===================================
    // Mobile touch support
    // ===================================
    if ('ontouchstart' in window) {
        guestCards.forEach(card => {
            let isFlipped = false;
            
            card.addEventListener('click', function(e) {
                e.preventDefault();
                
                if (!isFlipped) {
                    // Activate hover state
                    this.classList.add('mobile-active');
                    isFlipped = true;
                } else {
                    // Deactivate hover state
                    this.classList.remove('mobile-active');
                    isFlipped = false;
                }
            });
        });
        
        // Add mobile-specific CSS
        const style = document.createElement('style');
        style.textContent = `
            .mobile-active .minecraft-layer {
                opacity: 0 !important;
            }
            .mobile-active .photo-layer {
                opacity: 1 !important;
            }
            .mobile-active .info-overlay {
                opacity: 1 !important;
                transform: translateY(0) !important;
            }
            .mobile-active .card-content {
                transform: scale(1.08) !important;
            }
        `;
        document.head.appendChild(style);
    }
    
    // ===================================
    // Scroll-triggered entrance animation
    // ===================================
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -80px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Stagger animation delay
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                
                // Unobserve after animation
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Set initial state and observe cards
    guestCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(40px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // ===================================
    // Social link interactions
    // ===================================
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the aria-label to determine which platform
            const platform = this.getAttribute('aria-label');
            
            // Add click animation
            this.style.transform = 'scale(0.9)';
            
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // Log for demo purposes (replace with actual navigation)
            console.log(`Navigating to ${platform} profile`);
            
            // In production, you would navigate to the actual social profile:
            // window.open(this.getAttribute('href'), '_blank');
        });
        
        // Prevent text selection on double-click
        link.addEventListener('mousedown', function(e) {
            e.preventDefault();
        });
    });
    
    // ===================================
    // Keyboard navigation support
    // ===================================
    guestCards.forEach((card, index) => {
        // Make cards focusable
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'article');
        
        // Get guest name for accessibility
        const guestName = card.querySelector('.guest-name');
        const guestRole = card.querySelector('.role-badge');
        
        if (guestName && guestRole) {
            card.setAttribute('aria-label', 
                `${guestName.textContent}, ${guestRole.textContent}`
            );
        }
        
        // Handle keyboard events
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                
                // Toggle mobile-active class for keyboard users
                this.classList.toggle('mobile-active');
            }
        });
        
        // Focus styles
        card.addEventListener('focus', function() {
            this.style.outline = '3px solid #FFD700';
            this.style.outlineOffset = '5px';
        });
        
        card.addEventListener('blur', function() {
            this.style.outline = '';
            this.style.outlineOffset = '';
        });
    });
    
    // ===================================
    // Parallax background effect
    // ===================================
    const minecraftBackgrounds = document.querySelectorAll('.minecraft-background');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        
        minecraftBackgrounds.forEach((bg, index) => {
            const speed = 0.3;
            const yPos = -(scrolled * speed);
            bg.style.backgroundPositionY = `${yPos}px`;
        });
    });
    
    // ===================================
    // Performance optimization: Debounce resize
    // ===================================
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function() {
            // Recalculate card dimensions if needed
            console.log('Window resized, recalculating layout');
        }, 250);
    });
    
    // ===================================
    // Preload images for smoother transition
    // ===================================
    const realPhotos = document.querySelectorAll('.real-photo');
    realPhotos.forEach(img => {
        const tempImg = new Image();
        tempImg.src = img.src;
    });
    
    // ===================================
    // Add custom cursor effect (optional)
    // ===================================
    guestCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            document.body.style.cursor = 'pointer';
        });
        
        card.addEventListener('mouseleave', function() {
            document.body.style.cursor = 'default';
        });
    });
    
    // ===================================
    // Smooth scroll to sections (if navigation exists)
    // ===================================
    const sectionHeaders = document.querySelectorAll('.section-title');
    sectionHeaders.forEach(header => {
        header.style.cursor = 'default';
    });
    
    // ===================================
    // Console log for successful initialization
    // ===================================
    console.log('Minecraft Guests page initialized successfully');
    console.log(`Total guests loaded: ${guestCards.length}`);
    
    // ===================================
    // Add Easter egg: Konami code
    // ===================================
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;
    
    document.addEventListener('keydown', function(e) {
        if (e.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            
            if (konamiIndex === konamiCode.length) {
                // Easter egg activated
                document.body.style.animation = 'rainbow 2s infinite';
                console.log('Minecraft mode activated!');
                
                // Add rainbow animation
                const rainbowStyle = document.createElement('style');
                rainbowStyle.textContent = `
                    @keyframes rainbow {
                        0% { filter: hue-rotate(0deg); }
                        100% { filter: hue-rotate(360deg); }
                    }
                `;
                document.head.appendChild(rainbowStyle);
                
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });
    
    // ===================================
    // Accessibility: Announce dynamic content
    // ===================================
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.style.position = 'absolute';
    liveRegion.style.left = '-10000px';
    liveRegion.style.width = '1px';
    liveRegion.style.height = '1px';
    liveRegion.style.overflow = 'hidden';
    document.body.appendChild(liveRegion);
    
    guestCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const name = this.querySelector('.guest-name').textContent;
            const role = this.querySelector('.role-badge').textContent;
            liveRegion.textContent = `Viewing ${name}, ${role}`;
        });
    });
});
