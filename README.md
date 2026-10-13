# The NexMinds — Website Codebase & Implementation

This repository contains the reconstructed, high-conversion multi-page website for **The NexMinds**, developed in accordance with the **Week 3 Website & Conversion Audit Report**.

## 📁 Project Structure

```text
NexMinds/
├── index.html                   # 1. Homepage (All 9 sections)
├── style.css                    # Homepage stylesheet
├── Nm.jpeg                      # NexMinds Logo
│
├── css/
│   └── style.css                # Enterprise design system (Dark, Glassmorphism, Gold)
│
├── js/
│   ├── main.js                  # Interactions, query param pre-select, form handler, modals
│   └── analytics.js             # Audit Section 4.4 analytics event instrumentation
│
├── assets/
│   └── hero_workspace.jpg       # Hero image asset
│
├── internships/
│   ├── index.html               # 2. Internships Hub / Catalog
│   ├── java/
│   │   └── index.html           # 3.1 Java Internship (15 Sections)
│   ├── python/
│   │   └── index.html           # 3.2 Python Internship (15 Sections)
│   ├── full-stack/
│   │   └── index.html           # 3.3 Full Stack Internship (15 Sections)
│   ├── ai-ml/
│   │   └── index.html           # 3.4 AI & ML Internship (15 Sections)
│   └── data-science/
│       └── index.html           # 3.5 Data Science Internship (15 Sections)
│
├── academic-projects/
│   └── index.html               # 4. Academic Projects & 50 Ideas Topic Guide
│
├── apply/
│   └── index.html               # 5. Frictionless 6-Field Application Form
│
└── faq/
    └── index.html               # 6. Comprehensive Student FAQ & Schema Markup
```

## 🚀 Key Implemented Features

1. **Zero Placeholder Counters Removed**: All unverified counters (e.g. `0+`, `0 Domains`) have been replaced with 4 verified qualitative benefit pillars.
2. **Dedicated Program Pages**: Individual URLs targeting specific search intent (`/internships/java`, `/internships/python`, etc.) with the complete 15-section content model.
3. **Frictionless 6-Field Application Form**: Restricted strictly to 6 essential fields: Full Name, 10-digit Mobile, Email, College, Interested Program, Preferred Contact Method.
4. **Instant 24-Hour Assurance & WhatsApp**: Form transitions to a high-contrast thank-you state guaranteeing 24-hour response + direct WhatsApp handoff to `+91 93983 86471`.
5. **Academic Project Support Lead Magnet**: Dedicated section and 3-field modal to download the *50 Final-Year Project Topic Ideas Guide*.
6. **Mobile-First & Accessible**: Minimum 48px touch targets, responsive navigation drawer, and WCAG AA contrast.

## 💻 How to Run Locally

You can open `index.html` directly in any web browser, or serve it using Python or Node:

```bash
# Using Python
python -m http.server 3000

# Using Node (npx)
npx serve .
```

Visit `http://localhost:3000/`.
