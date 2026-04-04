/**
 * Theme Toggle Logic (Checkbox Switch)
 */
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

const setTheme = (theme) => {
  if (theme === 'dark') {
    htmlElement.classList.add('dark');
    htmlElement.classList.remove('light');
    themeToggle.checked = true;
  } else {
    htmlElement.classList.remove('dark');
    htmlElement.classList.add('light');
    themeToggle.checked = false;
  }
  localStorage.setItem('theme', theme);
  if (window.lucide) lucide.createIcons();
};

// Initial theme set
const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
setTheme(savedTheme);

themeToggle.addEventListener('change', () => {
  setTheme(themeToggle.checked ? 'dark' : 'light');
});

/**
 * Dynamic GitHub Repository Fetching
 */
async function fetchGitHubRepos() {
  const container = document.getElementById('github-repos');
  const username = 'Uwami-Mgxekwa';
  
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=pushed&per_page=6`);
    const repos = await response.json();
    
    container.innerHTML = '';
    
    repos.forEach(repo => {
      const card = document.createElement('article');
      card.className = 'project-card';
      card.innerHTML = `
        <div class="project-content">
          <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem;">
             <i data-lucide="folder" style="color: var(--primary); width: 24px; height: 24px;"></i>
             <div style="display: flex; gap: 0.5rem;">
                <span style="font-size: 0.8rem; opacity: 0.7;"><i data-lucide="star" style="width: 12px; height: 12px; display: inline-block; vertical-align: middle;"></i> ${repo.stargazers_count}</span>
             </div>
          </div>
          <h3 style="margin-bottom: 0.5rem; font-size: 1.1rem;"><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
          <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 1.5rem; min-height: 3em;">
            ${repo.description || 'No description provided.'}
          </p>
          <div class="tags">
            <span class="tag">${repo.language || 'Code'}</span>
          </div>
        </div>
      `;
      container.appendChild(card);
    });
    
    lucide.createIcons();
  } catch (error) {
    container.innerHTML = '<p>Failed to load repositories. Please check back later.</p>';
  }
}

fetchGitHubRepos();

/**
 * Contact Form Handling with EmailJS
 */
const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const formStatus = document.getElementById('formStatus');

// Initialize EmailJS (Note: Public Key is required, using a placeholder if not provided)
// The user should ideally call emailjs.init("YOUR_PUBLIC_KEY")
// If they have it in their existing setup, this will just work.
if (contactForm && submitBtn) {
  const btnText = submitBtn.querySelector('.btn-text');
  const btnLoading = submitBtn.querySelector('.btn-loading');
  
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    if (name && email && phone && message) {
      // Show loading state
      submitBtn.disabled = true;
      btnText.style.display = 'none';
      btnLoading.style.display = 'inline-block';
      formStatus.style.display = 'none';

      // Get current time
      const now = new Date();
      const time = now.toLocaleString('en-ZA', {
        dateStyle: 'medium',
        timeStyle: 'short'
      });

      // EmailJS template parameters
      const templateParams = {
        name: name,
        email: email,
        phone: phone,
        message: message,
        time: time
      };

      // Send email using EmailJS
      // replace "YOUR_PUBLIC_KEY" if known or initialized elsewhere
      emailjs.send('service_swdllg9', 'template_m749al5', templateParams)
        .then((response) => {
          // Show success message
          formStatus.innerHTML = '<i data-lucide="check-circle" style="vertical-align: middle;"></i> Message sent successfully! I\'ll get back to you soon.';
          formStatus.style.background = 'rgba(16, 185, 129, 0.1)';
          formStatus.style.color = '#10b981';
          formStatus.style.display = 'block';
          
          // Reset form
          contactForm.reset();
          
          // Reset button state
          submitBtn.disabled = false;
          btnText.style.display = 'inline-block';
          btnLoading.style.display = 'none';
          
          if (window.lucide) lucide.createIcons();

          // Hide success message after 5 seconds
          setTimeout(() => {
            formStatus.style.display = 'none';
          }, 5000);
        })
        .catch((error) => {
          // Show error message
          formStatus.innerHTML = '<i data-lucide="alert-circle" style="vertical-align: middle;"></i> Failed to send message. Please try again or reach out on WhatsApp.';
          formStatus.style.background = 'rgba(239, 68, 68, 0.1)';
          formStatus.style.color = '#ef4444';
          formStatus.style.display = 'block';
          
          // Reset button state
          submitBtn.disabled = false;
          btnText.style.display = 'inline-block';
          btnLoading.style.display = 'none';

          if (window.lucide) lucide.createIcons();
        });
    }
  });
}

/**
 * Scroll Reveal Effect
 */
function reveal() {
// ... existing reveal logic
  const reveals = document.querySelectorAll('.reveal');
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active');
    }
  }
}

window.addEventListener('scroll', reveal);
// Run on load
reveal();

// Navbar Visibility Control
let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        navbar.classList.add('hidden');
    } else {
        navbar.classList.remove('hidden');
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80, // Offset for fixed navbar
        behavior: 'smooth'
      });
    }
  });
});

// Add a simple parallax effect to blobs
window.addEventListener('mousemove', (e) => {
    const blobs = document.querySelectorAll('.blob');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    blobs.forEach((blob, index) => {
        const speed = (index + 1) * 20;
        blob.style.transform = `translate(${mouseX * speed}px, ${mouseY * speed}px)`;
    });
});

// Update Copyright Year
const yearElement = document.getElementById("currentYear");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
