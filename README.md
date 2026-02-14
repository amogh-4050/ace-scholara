# 🎓 Ace-Scholara Website

> Outcome-Backed Admissions for Premium Education

A modern, fast, and easy-to-maintain website built with [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com).

**Live Site:** [https://ace-scholara.com](https://ace-scholara.com)

---

## 📋 Table of Contents

- [Quick Start](#-quick-start)
- [For Non-Developers: How to Edit Content](#-for-non-developers-how-to-edit-content)
- [File Structure](#-file-structure)
- [Deployment](#-deployment)
- [Customization](#-customization)
- [Need Help?](#-need-help)

---

## 🚀 Quick Start

### Prerequisites

1. Install [Node.js](https://nodejs.org/) (version 18 or higher)
2. Install [Git](https://git-scm.com/)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/ace-scholara.git

# 2. Navigate to the project folder
cd ace-scholara

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

### Build for Production

```bash
npm run build
```

---

## ✏️ For Non-Developers: How to Edit Content

**You don't need to know coding to update the website!** Most content is stored in simple files that you can edit directly.

### 📁 Where to Find Content Files

| What to Edit | File Location | Format |
|--------------|---------------|--------|
| Site name, tagline, contact info | `src/config/site.yaml` | YAML |
| Testimonials | `src/data/testimonials.json` | JSON |
| Partner institutions | `src/data/partners.json` | JSON |
| Stats & numbers | `src/data/stats.json` | JSON |
| Blog posts | `src/content/blog/` | Markdown |

---

### 📝 Editing YAML Files (site.yaml)

YAML files use a simple format:

```yaml
site:
  name: "Ace-Scholara"           # ← Change text inside quotes
  tagline: "Your new tagline"    # ← Keep the quotes!
  
contact:
  email: "new-email@example.com"
  phone: "+91 98765 43210"
```

**Rules:**
- Keep the indentation (spaces at the start)
- Keep text inside quotes `"like this"`
- Don't delete the colons `:`

---

### 📝 Editing JSON Files (testimonials.json, partners.json)

JSON files look like this:

```json
{
  "testimonials": [
    {
      "name": "Dr. Ramesh Kumar",
      "role": "Director",
      "institution": "Presidency School",
      "quote": "This is the testimonial text...",
      "featured": true
    }
  ]
}
```

**To add a new testimonial:**

1. Copy an existing entry (everything between `{ }`)
2. Paste it after the last entry
3. Add a comma `,` after the previous entry
4. Change the details
5. Save the file

**Example - Adding a new testimonial:**

```json
{
  "testimonials": [
    {
      "name": "Existing Person",
      "quote": "Existing quote..."
    },
    {
      "name": "New Person",
      "role": "Principal",
      "institution": "New School Name",
      "quote": "Their testimonial goes here...",
      "featured": true
    }
  ]
}
```

**Common mistakes to avoid:**
- ❌ Forgetting commas between entries
- ❌ Using single quotes `'` instead of double quotes `"`
- ❌ Leaving trailing commas after the last item

---

### 📝 Adding Blog Posts

1. Create a new file in `src/content/blog/`
2. Name it `your-post-title.md`
3. Use this template:

```markdown
---
title: "Your Blog Post Title"
description: "A short description for SEO"
publishDate: 2025-01-15
author: "Author Name"
image: "/images/blog/your-image.jpg"
tags: ["admissions", "education"]
---

Your blog content goes here.

## Use Headings Like This

Write paragraphs normally.

- Bullet points work
- Like this

**Bold text** and *italic text* work too.
```

---

### 🖼️ Adding Images

1. **Partner logos:** Put in `public/images/partners/`
2. **Testimonial photos:** Put in `public/images/testimonials/`
3. **Blog images:** Put in `public/images/blog/`
4. **General images:** Put in `public/images/`

Then reference them in your content:
```json
"logo": "/images/partners/school-name.png"
```

**Image tips:**
- Use `.png` for logos (transparent background)
- Use `.jpg` for photos
- Keep images under 500KB for fast loading
- Recommended sizes:
  - Logos: 200x200 pixels
  - Photos: 800x600 pixels

---

## 📂 File Structure

```
ace-scholara/
├── public/                    # Static files (images, fonts)
│   └── images/
│       ├── partners/          # Partner logos
│       ├── testimonials/      # Testimonial photos
│       └── blog/              # Blog images
│
├── src/
│   ├── config/
│   │   └── site.yaml          # ⭐ Main site configuration
│   │
│   ├── data/
│   │   ├── testimonials.json  # ⭐ Testimonials
│   │   ├── partners.json      # ⭐ Partner institutions
│   │   └── stats.json         # ⭐ Statistics/numbers
│   │
│   ├── content/
│   │   └── blog/              # ⭐ Blog posts (Markdown)
│   │
│   ├── pages/                 # Website pages
│   │   ├── index.astro        # Homepage
│   │   ├── for-institutions.astro
│   │   ├── for-parents.astro
│   │   ├── about.astro
│   │   └── contact.astro
│   │
│   ├── components/            # Reusable components
│   ├── layouts/               # Page layouts
│   └── styles/                # CSS styles
│
├── package.json               # Dependencies
└── README.md                  # This file
```

**⭐ = Files you'll edit most often**

---

## 🌐 Deployment

### Option 1: Cloudflare Pages (Recommended - Free)

1. Push your code to GitHub
2. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
3. Connect your GitHub repository
4. Settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
5. Deploy!

### Option 2: Netlify (Free)

1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com/)
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repository
5. Settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Deploy!

### Option 3: Vercel (Free)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com/)
3. Import your repository
4. It auto-detects Astro settings
5. Deploy!

---

## 🎨 Customization

### Changing Colors

Edit `tailwind.config.mjs`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        600: '#2563eb',  // Main brand color
        700: '#1d4ed8',  // Darker shade (hover)
      }
    }
  }
}
```

### Changing Fonts

1. Add font to `src/layouts/Layout.astro`
2. Update `tailwind.config.mjs`

### Adding New Pages

1. Create a new `.astro` file in `src/pages/`
2. The filename becomes the URL:
   - `about.astro` → `/about`
   - `contact.astro` → `/contact`

---

## 🔧 Common Tasks

### Update the homepage headline

1. Open `src/pages/index.astro`
2. Find the `<h1>` tag in the Hero section
3. Change the text
4. Save and refresh

### Add a new partner institution

1. Open `src/data/partners.json`
2. Add a new entry:
```json
{
  "id": 6,
  "name": "New School Name",
  "type": "school",
  "city": "Chennai",
  "logo": "/images/partners/new-school.png",
  "featured": true
}
```
3. Add the logo to `public/images/partners/`
4. Save and refresh

### Update contact information

1. Open `src/config/site.yaml`
2. Find the `contact:` section
3. Update email, phone, or address
4. Save and refresh

---

## ❓ Need Help?

### Common Issues

**"npm command not found"**
→ Install Node.js from [nodejs.org](https://nodejs.org/)

**"Port 4321 already in use"**
→ Close other terminal windows or change port:
```bash
npm run dev -- --port 3000
```

**Changes not showing up**
→ Hard refresh your browser: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)

**JSON syntax error**
→ Use [JSONLint](https://jsonlint.com/) to check your JSON

### Getting Support

- 📧 Email: tech@ace-scholara.com
- 📖 Astro Docs: [docs.astro.build](https://docs.astro.build)

---

## 📄 License

MIT License - feel free to use this template for your own projects.

---

Built with ❤️ by the Ace-Scholara team