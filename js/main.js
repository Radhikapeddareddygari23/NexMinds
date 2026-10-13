/* ==========================================================================
   THE NEX MINDS - Core Application Interactions
   Mobile Navigation, Pre-select Handlers, Modals, Accordions, Form Logic
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function() {
  initNavbar();
  initFaqAccordion();
  initLeadMagnetModal();
  initFormPreselection();
  initApplicationForms();
  initWhatsAppTracking();
});

/* 1. Navbar Sticky & Mobile Drawer */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const toggleBtn = document.querySelector('.mobile-nav-toggle');
  const mobileDrawer = document.querySelector('.mobile-menu-drawer');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  });

  if (toggleBtn && mobileDrawer) {
    toggleBtn.addEventListener('click', () => {
      mobileDrawer.classList.toggle('active');
    });

    // Close on click link
    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('active');
      });
    });
  }
}

/* 2. FAQ Accordion Handling */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        // Close others
        faqItems.forEach(other => other.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });
}

/* 3. Lead Magnet Modal (Project Topic Guide) */
function initLeadMagnetModal() {
  const modal = document.getElementById('guideModal');
  const openButtons = document.querySelectorAll('[data-open-modal="guideModal"]');
  const closeButton = modal ? modal.querySelector('.modal-close') : null;
  const form = document.getElementById('guideDownloadForm');
  const successState = document.getElementById('guideSuccessState');

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (modal) modal.classList.add('active');
      if (window.NexAnalytics) window.NexAnalytics.trackCtaClick('lead_magnet_button', 'Download Project Guide');
    });
  });

  if (closeButton && modal) {
    closeButton.addEventListener('click', () => {
      modal.classList.remove('active');
    });
  }

  // Close on outside click
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active');
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('guideName')?.value;
      const email = document.getElementById('guideEmail')?.value;
      const college = document.getElementById('guideCollege')?.value;

      if (!name || !email || !college) {
        alert('Please fill all required fields.');
        return;
      }

      if (window.NexAnalytics) window.NexAnalytics.trackGuideDownload('Academic Projects');

      // Trigger automatic sample guide download
      downloadTopicGuidePdf();

      if (form) form.style.display = 'none';
      if (successState) successState.style.display = 'block';
    });
  }
}

function downloadTopicGuidePdf() {
  const content = `THE NEX MINDS - 50 FINAL YEAR PROJECT TOPIC IDEAS (2026 EDITION)
==============================================================
Domain 1: Artificial Intelligence & Machine Learning
1. Automated Brain Tumor Detection from MRI using CNNs
2. Real-Time Deepfake Video & Voice Detection System
3. Multi-Lingual Legal Document Summarizer using Transformer LLMs
4. Smart Precision Agriculture Pest Detection with Computer Vision
5. Predictive ICU Patient Vitals Monitoring with Edge AI

Domain 2: Enterprise Java & Spring Boot
6. Distributed Banking & Fraud Prevention Microservices Architecture
7. Multi-Tenant Healthcare ERP System with Spring Boot 3 & Hibernate
8. Real-Time Event-Driven Stock Trading Engine with Apache Kafka
9. Role-Based Scalable Hospital Management Portal
10. E-Commerce Order Fulfillment & Supply Chain Microservice

Domain 3: Full Stack & Cloud Web Apps
11. Collaborative AI-Assisted Document Editor with WebSockets
12. Decentralized Credential & Certificate Verification System
13. Serverless Cloud Task Automation Platform with React & AWS Lambda
14. Real-Time Remote Technical Interview & Code Execution Platform
15. Smart City IoT Environmental Sensor Telemetry Dashboard

Need full implementation guidance, source code, report & PPT documentation?
Contact The Nex Minds Project Guidance Cell:
Phone: +91 9398386471 | WhatsApp: +91 9398386471
Email: thenexminds@gmail.com | Location: Uppal, Hyderabad
`;

  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'TheNexMinds_50_Project_Topics_Guide.txt';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

/* 4. URL Parameter Pre-selection (e.g., ?program=java) */
function initFormPreselection() {
  const urlParams = new URLSearchParams(window.location.search);
  const program = urlParams.get('program');
  
  if (program) {
    const programSelect = document.getElementById('interestedProgram');
    if (programSelect) {
      for (let i = 0; i < programSelect.options.length; i++) {
        if (programSelect.options[i].value.toLowerCase() === program.toLowerCase()) {
          programSelect.selectedIndex = i;
          break;
        }
      }
    }
  }
}

/* 5. 6-Field Application Form Handling (Section 12 Spec) */
function initApplicationForms() {
  const form = document.getElementById('nexApplicationForm');
  const thankYouBox = document.getElementById('applicationThankYou');
  const formWrapper = document.getElementById('formWrapper');

  if (form) {
    // Track form start on first input focus
    let hasStarted = false;
    form.querySelectorAll('input, select').forEach(input => {
      input.addEventListener('focus', () => {
        if (!hasStarted) {
          hasStarted = true;
          if (window.NexAnalytics) window.NexAnalytics.trackFormStart('main_application_form');
        }
      });
    });

    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const fullName = document.getElementById('fullName')?.value.trim();
      const mobileNumber = document.getElementById('mobileNumber')?.value.trim();
      const email = document.getElementById('email')?.value.trim();
      const college = document.getElementById('college')?.value.trim();
      const interestedProgram = document.getElementById('interestedProgram')?.value;
      const contactMethod = document.querySelector('input[name="preferredContact"]:checked')?.value || 'WhatsApp';

      // Validation
      if (!fullName || !mobileNumber || !email || !college || !interestedProgram) {
        alert('Please fill in all required fields.');
        return;
      }

      // Mobile check (basic 10 digits)
      const cleanPhone = mobileNumber.replace(/[^0-9]/g, '');
      if (cleanPhone.length < 10) {
        alert('Please enter a valid 10-digit mobile number.');
        return;
      }

      const leadData = {
        fullName,
        mobileNumber: cleanPhone,
        email,
        college,
        interestedProgram,
        contactMethod,
        appliedAt: new Date().toISOString()
      };

      // Save to localStorage for demo persistence
      try {
        const existing = JSON.parse(localStorage.getItem('nexminds_enquiries') || '[]');
        existing.push(leadData);
        localStorage.setItem('nexminds_enquiries', JSON.stringify(existing));
      } catch (err) {
        console.warn('Storage error', err);
      }

      // Fire Analytics
      if (window.NexAnalytics) {
        window.NexAnalytics.trackFormSubmit(interestedProgram, contactMethod);
      }

      // Populate dynamic WhatsApp button in thank-you box
      const thankYouWaBtn = document.getElementById('thankYouWhatsAppBtn');
      if (thankYouWaBtn) {
        const message = encodeURIComponent(`Hi The Nex Minds, I just submitted my application for the ${interestedProgram} program. My name is ${fullName} (${college}). Looking forward to connecting!`);
        thankYouWaBtn.href = `https://wa.me/919398386471?text=${message}`;
      }

      // Switch to thank you state
      if (formWrapper) formWrapper.style.display = 'none';
      if (thankYouBox) thankYouBox.classList.add('active');
      thankYouBox.scrollIntoView({ behavior: 'smooth' });
    });
  }
}

/* 6. WhatsApp Event Tracking */
function initWhatsAppTracking() {
  document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
    link.addEventListener('click', () => {
      const source = link.getAttribute('data-source') || 'floating_button';
      if (window.NexAnalytics) window.NexAnalytics.trackWhatsAppClick(source);
    });
  });
}
