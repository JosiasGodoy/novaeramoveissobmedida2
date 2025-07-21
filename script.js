// Mobile Navigation
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

// Smooth scrolling for navigation links
document.querySelectorAll("a[href^=\"#\"]").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            const headerOffset = 120;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    });
});

// Header scroll effect
window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    if (window.scrollY > 100) {
        header.style.background = "var(--header-bg)";
        header.style.boxShadow = "0 2px 30px var(--header-shadow)";
    } else {
        header.style.background = "var(--header-bg)";
        header.style.boxShadow = "0 2px 20px var(--header-shadow)";
    }
});

// Form submission
const contactForm = document.querySelector(".contact-form form");
if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = this.querySelector("input[type=\"text\"]").value;
        const email = this.querySelector("input[type=\"email\"]").value;
        const phone = this.querySelector("input[type=\"tel\"]").value;
        const service = this.querySelector("select").value;
        const message = this.querySelector("textarea").value;
        
        // Create WhatsApp message
        const whatsappMessage = `Olá! Gostaria de solicitar um orçamento:\n\n*Nome:* ${name}\n*E-mail:* ${email}\n*Telefone:* ${phone}\n*Serviço:* ${service}\n*Mensagem:* ${message}`;
        
        // Encode message for URL
        const encodedMessage = encodeURIComponent(whatsappMessage);
        
        // Open WhatsApp
        window.open(`https://wa.me/5551986009570?text=${encodedMessage}`, "_blank");
        
        // Reset form
        this.reset();
        
        // Show success message
        showNotification("Mensagem enviada! Você será redirecionado para o WhatsApp.", "success");
    });
}

// Notification system
function showNotification(message, type = "info") {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll(".notification");
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement("div");
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === "success" ? "#27ae60" : type === "error" ? "#e74c3c" : "#3498db"};
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = "translateX(0)";
    }, 100);
    
    // Add close functionality
    const closeBtn = notification.querySelector(".notification-close");
    closeBtn.addEventListener("click", () => {
        notification.style.transform = "translateX(100%)";
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = "translateX(100%)";
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener("DOMContentLoaded", () => {
    const animatedElements = document.querySelectorAll(".service-block, .feature, .contact-item");
    
    animatedElements.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        observer.observe(el);
    });
});

// Lazy loading for images
// document.addEventListener("DOMContentLoaded", () => {
//     const images = document.querySelectorAll("img[src]");
    
//     const imageObserver = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 const img = entry.target;
//                 img.style.opacity = "0";
//                 img.style.transition = "opacity 0.3s ease";
                
//                 img.onload = () => {
//                     img.style.opacity = "1";
//                 };
                
//                 imageObserver.unobserve(img);
//             }
//         });
//     });
    
//     images.forEach(img => imageObserver.observe(img));
// });

// Scroll to top functionality
let scrollToTopBtn;

function createScrollToTopButton() {
    scrollToTopBtn = document.createElement("button");
    scrollToTopBtn.innerHTML = "<i class=\"fas fa-arrow-up\"></i>";
    scrollToTopBtn.className = "scroll-to-top";
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 100px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: var(--footer-bg);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
        box-shadow: 0 4px 15px rgba(44, 62, 80, 0.3);
    `;
    
    scrollToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
    
    document.body.appendChild(scrollToTopBtn);
}

// Show/hide scroll to top button
window.addEventListener("scroll", () => {
    if (!scrollToTopBtn) {
        createScrollToTopButton();
    }
    
    if (window.pageYOffset > 300) {
        scrollToTopBtn.style.opacity = "1";
        scrollToTopBtn.style.visibility = "visible";
    } else {
        scrollToTopBtn.style.opacity = "0";
        scrollToTopBtn.style.visibility = "hidden";
    }
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll events
const debouncedScrollHandler = debounce(() => {
    // Header scroll effect with debounce
    const header = document.querySelector(".header");
    if (window.scrollY > 100) {
        header.style.background = "var(--header-bg)";
        header.style.boxShadow = "0 2px 30px var(--header-shadow)";
    } else {
        header.style.background = "var(--header-bg)";
        header.style.boxShadow = "0 2px 20px var(--header-shadow)";
    }
}, 10);

window.addEventListener("scroll", debouncedScrollHandler);

// Preload critical images
document.addEventListener("DOMContentLoaded", () => {
    const criticalImages = [
        "logo.svg",
        "NovaEraMóveis-Maio2025.jpg"
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
});

// Error handling for images
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("img");
    
    images.forEach(img => {
        img.addEventListener("error", function() {
            this.style.display = "none";
            console.warn(`Failed to load image: ${this.src}`);
        });
    });
});

// Add loading state to buttons
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".btn");
    
    buttons.forEach(btn => {
        btn.addEventListener("click", function(e) {
            if (this.classList.contains("loading")) {
                e.preventDefault();
                return;
            }
            
            // Add loading state for form submission
            if (this.type === "submit") {
                this.classList.add("loading");
                this.innerHTML = "<i class=\"fas fa-spinner fa-spin\"></i> Enviando...";
                
                setTimeout(() => {
                    this.classList.remove("loading");
                    this.innerHTML = "Enviar Mensagem";
                }, 2000);
            }
        });
    });
});

// Image Modal Functionality
const imageModal = document.getElementById("image-modal");
const modalImage = document.getElementById("modal-image");
const closeButton = imageModal.querySelector(".close-button");
const prevButton = imageModal.querySelector(".prev-button");
const nextButton = imageModal.querySelector(".next-button");
let currentImageIndex = 0;
let currentGalleryImages = [];

document.querySelectorAll(".gallery img").forEach(image => {
    image.addEventListener("click", function() {
        const category = this.dataset.category;
        currentGalleryImages = Array.from(document.querySelectorAll(`.gallery img[data-category="${category}"]`));
        currentImageIndex = currentGalleryImages.indexOf(this);
        
        modalImage.src = this.src;
        imageModal.classList.add("active");
    });
});

closeButton.addEventListener("click", () => {
    imageModal.classList.remove("active");
});

prevButton.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex - 1 + currentGalleryImages.length) % currentGalleryImages.length;
    modalImage.src = currentGalleryImages[currentImageIndex].src;
});

nextButton.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex + 1) % currentGalleryImages.length;
    modalImage.src = currentGalleryImages[currentImageIndex].src;
});

// Close modal when clicking outside the image
imageModal.addEventListener("click", (e) => {
    if (e.target === imageModal) {
        imageModal.classList.remove("active");
    }
});

// Theme Toggle Functionality
const themeToggleBtn = document.getElementById("theme-toggle");

function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
        themeToggleBtn.innerHTML = "<i class=\"fas fa-sun\"></i>";
    } else {
        themeToggleBtn.innerHTML = "<i class=\"fas fa-moon\"></i>";
    }
}

themeToggleBtn.addEventListener("click", () => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "dark") {
        setTheme("light");
    } else {
        setTheme("dark");
    }
});

// Set initial theme based on user preference or local storage
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        setTheme(savedTheme);
    } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setTheme("dark");
    } else {
        setTheme("light");
    }
});

// Social Media Modal Functionality
const socialModal = document.getElementById("social-modal");
const socialModalCloseButton = socialModal.querySelector(".close-button");

function showSocialModal() {
    socialModal.classList.add("active");
    setTimeout(() => {
        socialModal.classList.remove("active");
    }, 10000); // Show for 10 seconds
}

socialModalCloseButton.addEventListener("click", () => {
    socialModal.classList.remove("active");
});

// Show social modal after a delay on page load
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        showSocialModal();
    }, 5000); // Show after 5 seconds
});


