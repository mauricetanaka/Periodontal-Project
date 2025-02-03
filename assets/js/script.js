document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-icon');
    const navMenu = document.querySelector('.navbar-2');
    const heroSection = document.querySelector('.hero-section');
    
    hamburger.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      
      // Animate hamburger icon
      const bars = this.querySelectorAll('div');
      this.classList.toggle('active');
      
      if (this.classList.contains('active')) {
        bars[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        bars[1].style.opacity = '0';
        bars[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        
        // Add margin to hero section when menu is open
        if (heroSection) {
          heroSection.style.marginTop = navMenu.offsetHeight + 'px';
        }
      } else {
        bars[0].style.transform = 'none';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'none';
        
        // Reset hero section margin
        if (heroSection) {
          heroSection.style.marginTop = '2rem';
        }
      }
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
      if (window.innerWidth > 768) {
        navMenu.classList.remove('active');
        heroSection.style.marginTop = '2rem';
        
        const bars = hamburger.querySelectorAll('div');
        bars.forEach(bar => bar.style.transform = 'none');
        bars[1].style.opacity = '1';
      }
    });
  });

  
  //Contact form validation
  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        contactNumber: document.getElementById('contactNumber').value,
        subject: document.querySelector('input[name="subject"]:checked').value,
        message: document.getElementById('message').value
    };

    // Clear previous errors
    document.querySelectorAll('.error-message').forEach(error => error.textContent = '');

    // Validate form
    let isValid = true;
    const errors = {};

    if (!formData.firstName) {
        errors.firstName = 'First name is required';
        isValid = false;
    }

    if (!formData.lastName) {
        errors.lastName = 'Last name is required';
        isValid = false;
    }

    if (!formData.email) {
        errors.email = 'Email is required';
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = 'Email is invalid';
        isValid = false;
    }

    if (!formData.contactNumber) {
        errors.contactNumber = 'Contact number is required';
        isValid = false;
    }

    if (!formData.message) {
        errors.message = 'Message is required';
        isValid = false;
    }

    // Display errors if any
    Object.keys(errors).forEach(field => {
        document.getElementById(`${field}Error`).textContent = errors[field];
    });

    if (isValid) {
        console.log('Form submitted:', formData);
        // Reset form
        this.reset();
    }
});

// Clear error when user starts typing
document.querySelectorAll('.form-input').forEach(input => {
    input.addEventListener('input', function() {
        const errorElement = document.getElementById(`${this.name}Error`);
        if (errorElement) {
            errorElement.textContent = '';
        }
    });
});


//FAQ Section
const faqData = [
    {
        question: "What is periodontal disease, how can I tell if I have it?",
        answer: "Periodontal disease, also known as gum disease, is an infection of the gums and jawbone that supports your teeth. It's usually caused by plaque buildup from poor brushing and flossing habits."
    },
    {
        question: "Do you offer finance options?",
        answer: "Yes, we offer various flexible financing options to help make your dental care more affordable. Please contact our office for detailed information about our current financing plans and payment options."
    },
    {
        question: "How often should I visit after my consultation?",
        answer: "The frequency of visits after your consultation depends on your individual dental needs. Generally, we recommend regular check-ups every 6 months, but some patients may need more frequent visits based on their oral health condition."
    },
    {
        question: "Why would I need deep cleaning (scaling and root planing)?",
        answer: "Deep cleaning may be necessary when regular cleaning isn't enough to address buildup below the gum line. This procedure helps prevent gum disease by removing tartar and bacteria from the roots of your teeth and smoothing the surfaces to prevent future buildup."
    }
];

const faqContainer = document.getElementById('faqContainer');

faqData.forEach((faq, index) => {
    const faqItem = document.createElement('div');
    faqItem.className = 'faq-item';
    
    faqItem.innerHTML = `
        <div class="faq-header">
            <button class="faq-button">
                <h3 class="question">${faq.question}</h3>
                <div class="toggle-icon"></div>
            </button>
            <div class="answer-container">
                <p class="answer">${faq.answer}</p>
            </div>
        </div>
        <div class="faq-divider"></div>
    `;

    faqContainer.appendChild(faqItem);

    const faqHeader = faqItem.querySelector('.faq-header');
    const faqButton = faqItem.querySelector('.faq-button');
    const answerContainer = faqItem.querySelector('.answer-container');

    faqButton.addEventListener('click', () => {
        const isActive = faqHeader.classList.contains('active');
        
        // Close all FAQs
        document.querySelectorAll('.faq-header').forEach(header => {
            header.classList.remove('active');
        });
        document.querySelectorAll('.answer-container').forEach(container => {
            container.classList.remove('active');
        });

        // Open clicked FAQ if it wasn't active
        if (!isActive) {
            faqHeader.classList.add('active');
            answerContainer.classList.add('active');
        }
    });
});

//About Us Section, Meet the team

document.querySelectorAll('.bio-toggle').forEach(toggle => {
    toggle.addEventListener('click', function() {
        const bioContent = this.nextElementSibling;
        bioContent.classList.toggle('active');
        this.style.transform = this.style.transform === 'rotate(45deg)' 
            ? 'rotate(0deg)' 
            : 'rotate(45deg)';
    });
});