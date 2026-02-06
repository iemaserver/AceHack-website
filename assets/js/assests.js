// ===================================
// GUESTS PAGE - COMPLETE JAVASCRIPT
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ===================================
    // CREATE END SKY BACKGROUND
    // ===================================
    (function createEndSky() {
        const container = document.getElementById('endSky');
        if (!container) return;

        // Stars
        for (let i = 0; i < 100; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.cssText = `
                left:${Math.random() * 100}%;
                top:${Math.random() * 100}%;
                width:${Math.random() * 4 + 2}px;
                height:${Math.random() * 4 + 2}px;
                animation-duration:${Math.random() * 3 + 2}s;
                animation-delay:${Math.random() * 3}s;
            `;
            container.appendChild(star);
        }

        // Purple glow
        const glow = document.createElement('div');
        glow.className = 'purple-glow';
        glow.style.cssText = `
            left:${Math.random() * 100}%;
            top:${Math.random() * 100}%;
            width:400px;
            height:400px;
            animation-duration:25s;
        `;
        container.appendChild(glow);

        // Clouds
        for (let i = 0; i < 50; i++) {
            const cloud = document.createElement('div');
            cloud.className = 'end-cloud';
            cloud.style.cssText = `
                left:${100 + Math.random() * 100}%;
                top:${Math.random() * 80}%;
                width:${Math.random() * 100 + 80}px;
                height:${Math.random() * 40 + 30}px;
                animation-duration:${Math.random() * 30 + 25}s;
            `;
            container.appendChild(cloud);
        }

        console.log('✓ End Sky background created');
    })();

    // ===================================
    // HAMBURGER MENU FUNCTIONALITY
    // ===================================
    (function initHamburgerMenu() {
        const hamburger = document.querySelector('.hamburger-menu');
        const mobileNav = document.querySelector('.mobile-nav-overlay');
        const backdrop = document.querySelector('.nav-backdrop');
        const mobileLinks = document.querySelectorAll('.mobile-nav-link');

        if (!hamburger || !mobileNav || !backdrop) return;

        function toggleMenu() {
            hamburger.classList.toggle('active');
            mobileNav.classList.toggle('active');
            backdrop.classList.toggle('active');
            
            if (mobileNav.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        }

        function closeMenu() {
            hamburger.classList.remove('active');
            mobileNav.classList.remove('active');
            backdrop.classList.remove('active');
            document.body.style.overflow = '';
        }

        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleMenu();
        });

        backdrop.addEventListener('click', closeMenu);

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                closeMenu();
            });
        });

        console.log('✓ Hamburger menu initialized');
    })();

    // ===================================
    // GUEST CARD INTERACTIONS
    // ===================================
    const guestCards = document.querySelectorAll('.guest-card');
    
    guestCards.forEach((card, index) => {
        
        // Mouse enter event
        card.addEventListener('mouseenter', function() {
            this.classList.add('card-active');
        });
        
        // Mouse leave event
        card.addEventListener('mouseleave', function() {
            this.classList.remove('card-active');
        });
        
        // 3D tilt effect on mouse move
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            const cardContent = this.querySelector('.card-content');
            
            cardContent.style.transform = `
                scale(1.05) 
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
    // MOBILE TOUCH SUPPORT
    // ===================================
    if ('ontouchstart' in window) {
        guestCards.forEach(card => {
            let isFlipped = false;
            
            card.addEventListener('click', function(e) {
                e.preventDefault();
                
                if (!isFlipped) {
                    this.classList.add('mobile-active');
                    isFlipped = true;
                } else {
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
                transform: scale(1.05) !important;
            }
        `;
        document.head.appendChild(style);
    }
    
    // ===================================
    // SCROLL-TRIGGERED ENTRANCE ANIMATION
    // ===================================
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -80px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach((entry, idx) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, idx * 100);
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    guestCards.forEach((card) => {
        observer.observe(card);
    });
    
    // ===================================
    // SOCIAL LINK INTERACTIONS
    // ===================================
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const platform = this.getAttribute('aria-label');
            
            this.style.transform = 'scale(0.9)';
            
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            console.log(`Navigating to ${platform} profile`);
        });
        
        link.addEventListener('mousedown', function(e) {
            e.preventDefault();
        });
    });
    
    // ===================================
    // KEYBOARD NAVIGATION SUPPORT
    // ===================================
    guestCards.forEach((card, index) => {
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'article');
        
        const guestName = card.querySelector('.guest-name');
        const guestRole = card.querySelector('.role-badge');
        
        if (guestName && guestRole) {
            card.setAttribute('aria-label', 
                `${guestName.textContent}, ${guestRole.textContent}`
            );
        }
        
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.classList.toggle('mobile-active');
            }
        });
        
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
    // PARALLAX BACKGROUND EFFECT
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
    // PRELOAD IMAGES FOR SMOOTHER TRANSITION
    // ===================================
    const realPhotos = document.querySelectorAll('.real-photo');
    realPhotos.forEach(img => {
        const tempImg = new Image();
        tempImg.src = img.src;
    });
    
    // ===================================
    // CUSTOM CURSOR EFFECT
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
    // COMING SOON TOAST NOTIFICATION
    // ===================================
    document.addEventListener('click', e => {
        const link = e.target.closest('a[data-soon="true"]');
        if (!link) return;

        e.preventDefault();
        const toast = document.getElementById('toast');
        if (toast) {
            toast.textContent = link.textContent.trim() + ' Coming Soon!';
            toast.classList.add('show');
            setTimeout(() => toast.classList.remove('show'), 2000);
        }
    });
    
    // ===================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ===================================
    let currentScroll = window.scrollY;
    let targetScroll = currentScroll;
    let ease = 0.08;
    let isUserScrolling = false;

    window.addEventListener("wheel", e => {
        e.preventDefault();
        targetScroll += e.deltaY;
        targetScroll = Math.max(
            0,
            Math.min(targetScroll, document.body.scrollHeight - window.innerHeight)
        );
        isUserScrolling = true;
    }, { passive: false });

    function smoothScroll() {
        if (isUserScrolling) {
            currentScroll += (targetScroll - currentScroll) * ease;
            window.scrollTo(0, currentScroll);
            
            if (Math.abs(targetScroll - currentScroll) < 0.5) {
                isUserScrolling = false;
            }
        }
        requestAnimationFrame(smoothScroll);
    }

    smoothScroll();

    // Handle anchor link clicks
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
            const targetId = a.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (!targetElement) return;
            
            e.preventDefault();
            
            const targetPosition = targetElement.offsetTop - 100;
            
            targetScroll = targetPosition;
            currentScroll = targetPosition;
            
            window.scrollTo(0, targetPosition);
            
            history.pushState(null, null, targetId);
        });
    });
    
    // ===================================
    // PERFORMANCE OPTIMIZATION: DEBOUNCE RESIZE
    // ===================================
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function() {
            console.log('Window resized, recalculating layout');
        }, 250);
    });
    
    // ===================================
    // ACCESSIBILITY: LIVE REGION FOR SCREEN READERS
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
            const name = this.querySelector('.guest-name');
            const role = this.querySelector('.role-badge');
            if (name && role) {
                liveRegion.textContent = `Viewing ${name.textContent}, ${role.textContent}`;
            }
        });
    });
    
    // ===================================
    // KONAMI CODE EASTER EGG
    // ===================================
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;
    
    document.addEventListener('keydown', function(e) {
        if (e.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            
            if (konamiIndex === konamiCode.length) {
                document.body.style.animation = 'rainbow 2s infinite';
                console.log('🎮 Minecraft mode activated!');
                
                const rainbowStyle = document.createElement('style');
                rainbowStyle.textContent = `
                    @keyframes rainbow {
                        0% { filter: hue-rotate(0deg); }
                        100% { filter: hue-rotate(360deg); }
                    }
                `;
                document.head.appendChild(rainbowStyle);
                
                const toast = document.getElementById('toast');
                if (toast) {
                    toast.textContent = '🎮 Cheat Code Activated!';
                    toast.classList.add('show');
                    setTimeout(() => toast.classList.remove('show'), 3000);
                }
                
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });
    
    // ===================================
    // PREVENT ACCIDENTAL NAVIGATION
    // ===================================
    document.querySelectorAll('.social-link').forEach(link => {
        link.addEventListener('dragstart', e => e.preventDefault());
    });
    
    // ===================================
    // ADD VISUAL FEEDBACK FOR INTERACTIONS
    // ===================================
    const interactiveElements = document.querySelectorAll('.social-link, .nav-sign, .mobile-nav-link');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mousedown', function() {
            this.style.filter = 'brightness(0.8)';
        });
        
        element.addEventListener('mouseup', function() {
            this.style.filter = '';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.filter = '';
        });
    });
    
    // ===================================
    // DETECT IF USER PREFERS REDUCED MOTION
    // ===================================
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        console.log('⚡ Reduced motion mode detected - disabling animations');
        
        const style = document.createElement('style');
        style.textContent = `
            * {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
            }
        `;
        document.head.appendChild(style);
    }
    
    // ===================================
    // LOG SUCCESSFUL INITIALIZATION
    // ===================================
    console.log('✓ Guests page initialized successfully');
    console.log(`✓ Total guests loaded: ${guestCards.length}`);
    console.log('✓ All interactions ready');
    
    // ===================================
    // DYNAMIC PAGE TITLE UPDATE
    // ===================================
    let originalTitle = document.title;
    let blurTimeout;
    
    window.addEventListener('blur', function() {
        blurTimeout = setTimeout(() => {
            document.title = '👋 Come back to meet our guests!';
        }, 2000);
    });
    
    window.addEventListener('focus', function() {
        clearTimeout(blurTimeout);
        document.title = originalTitle;
    });
    
    // ===================================
    // LAZY LOAD OPTIMIZATION FOR IMAGES
    // ===================================
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.style.opacity = '1';
                    imageObserver.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('.real-photo, .pixel-avatar').forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // ===================================
    // ADD LOADING STATE REMOVAL
    // ===================================
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        console.log('✓ All resources loaded');
    });
    
    // ===================================
    // HANDLE NETWORK STATUS
    // ===================================
    window.addEventListener('online', function() {
        console.log('✓ Connection restored');
    });
    
    window.addEventListener('offline', function() {
        console.log('⚠ Connection lost');
        const toast = document.getElementById('toast');
        if (toast) {
            toast.textContent = '⚠ No internet connection';
            toast.classList.add('show');
            setTimeout(() => toast.classList.remove('show'), 3000);
        }
    });
    
    // ===================================
    // RANDOM MINECRAFT AVATAR ROTATION (FUN FEATURE)
    // ===================================
    const pixelAvatars = document.querySelectorAll('.pixel-avatar');
    pixelAvatars.forEach(avatar => {
        avatar.addEventListener('click', function() {
            this.style.transform = `rotate(${Math.random() * 360}deg)`;
            setTimeout(() => {
                this.style.transform = 'rotate(0deg)';
            }, 300);
        });
    });
    
    // ===================================
    // FINAL READY STATE
    // ===================================
    setTimeout(() => {
        console.log('🎮 AceHack 5.0 Guests Page - Fully Loaded! 🎮');
    }, 1000);
});
