# 🛠️ The NexMinds — Setup & Deployment Instructions

This guide provides step-by-step instructions for running the website locally, pushing the complete source code to **GitHub**, deploying live on **Vercel**, and organizing deliverables for **Google Drive**.

---

## 1. Local Setup Instructions

The NexMinds is a modern, responsive static web application with zero heavy build steps required.

### Option A: Using Python (Recommended)
If Python is installed on your system:
```bash
# Open terminal in the project root directory
python -m http.server 3000
```
Open your browser and navigate to:
👉 `http://localhost:3000/`

### Option B: Using Node.js (npx)
If Node.js is installed:
```bash
npx serve .
```
Navigate to the local URL displayed in the terminal (usually `http://localhost:3000` or `5000`).

### Option C: Direct Browser Opening
You can directly open `index.html` in Chrome, Edge, Firefox, or Safari by double-clicking the file in File Explorer.

---

## 2. GitHub Repository Upload Instructions

To upload your complete source code to GitHub and obtain the repository URL:

### Step 1: Create a New Repository on GitHub
1. Go to [https://github.com/new](https://github.com/new).
2. Repository name: `NexMinds` (or `nexminds-website`).
3. Set visibility to **Public** (recommended so evaluators can review).
4. Leave "Add a README file", ".gitignore", and license **unchecked** (we already created them locally).
5. Click **Create repository**.

### Step 2: Push Local Code to GitHub
Run the following commands in your terminal inside the project directory:

```bash
# Initialize git (if not already initialized)
git init

# Stage all files
git add .

# Create the initial commit
git commit -m "feat: complete NexMinds website implementation with all 10 pages, tests, and deliverables"

# Ensure primary branch is main
git branch -M main

# Link to your new GitHub repository (replace with your actual GitHub username)
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/NexMinds.git

# Push the code
git push -u origin main
```

*(Note: When prompted, authenticate using your GitHub Personal Access Token or browser sign-in.)*

Your GitHub Link will look like:
`https://github.com/YOUR_GITHUB_USERNAME/NexMinds`

---

## 3. Vercel Live Deployment Instructions

Deploying on Vercel is free, takes under 60 seconds, and provides a fast live HTTPS webpage URL.

### Method 1: Deploy via GitHub (Easiest & Recommended)
1. Go to [https://vercel.com](https://vercel.com) and log in with your GitHub account.
2. Click **"Add New..."** &rarr; **"Project"**.
3. Select your `NexMinds` repository from the list and click **Import**.
4. In the Project Configuration:
   - **Framework Preset:** `Other` (or leave default Static)
   - **Root Directory:** `./`
   - **Build and Output Settings:** Leave default (no build command needed)
5. Click **Deploy**.
6. Within ~20 seconds, your site is live! You will receive a URL such as:
   👉 `https://nexminds.vercel.app` (or `https://nexminds-<username>.vercel.app`)

### Method 2: Deploy using Vercel CLI (Optional)
If you prefer deploying directly from the command line:
```bash
npx vercel
```
Follow the interactive prompts (select default options). Once completed, Vercel will output the live production URL.

---

## 4. Google Drive Submission Organization

For Requirement #3, prepare a Google Drive folder named:
📁 `NexMinds_Deliverables_Radhika`

Inside this folder, include:
1. 📁 `Screenshots/`
   - `desktop/` (All 10 desktop page screenshots: Homepage, Catalog, 5 Program Pages, Academic Projects, Apply Form, FAQ)
   - `mobile/` (All 10 responsive mobile page screenshots)
2. 📄 `TESTING_REPORT.md` (or exported PDF)
3. 📄 `SETUP_INSTRUCTIONS.md` (or exported PDF)
4. 📦 `NexMinds_SourceCode.zip` (Optional backup zip of source code)

### Sharing Settings:
- Right-click the folder in Google Drive &rarr; **Share**.
- Under General Access, change to: **"Anyone with the link" &rarr; Viewer**.
- Copy the link.

---

## 5. Final Submission Template for WhatsApp / Portal

Copy and paste this completed template to submit your deliverables:

```text
Hi Saikumar / Lavanya,

Here are my website development deliverables for The NexMinds project:

1. GitHub Repository Link:
https://github.com/YOUR_GITHUB_USERNAME/NexMinds

2. Vercel Live Webpage URL:
https://YOUR-PROJECT.vercel.app

3. Google Drive Deliverables Link:
https://drive.google.com/drive/folders/YOUR_FOLDER_ID?usp=sharing
(Contains screenshots of all 10 pages for desktop & mobile, comprehensive testing report, and setup instructions)

All pages, internal links, forms, and mobile responsive designs are fully tested and functional.

Thank you!
Best regards,
Radhika Peddareddy gari
```
