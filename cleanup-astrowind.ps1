# ============================================
# AstroWind Cleanup Script for Ace-Scholara
# Run this in your project root after cloning
# ============================================

Write-Host "🧹 Cleaning up AstroWind demo content..." -ForegroundColor Cyan

# 1. Remove demo pages (keep only essential structure)
$pagesToRemove = @(
    "src/pages/homes",
    "src/pages/landing",
    "src/pages/services.astro",
    "src/pages/pricing.astro"
)

foreach ($path in $pagesToRemove) {
    if (Test-Path $path) {
        Remove-Item -Recurse -Force $path
        Write-Host "  ✓ Removed $path" -ForegroundColor Green
    }
}

# 2. Remove demo blog posts (keep folder structure)
$blogPosts = Get-ChildItem "src/data/post" -Filter "*.md" -ErrorAction SilentlyContinue
$blogPostsMdx = Get-ChildItem "src/data/post" -Filter "*.mdx" -ErrorAction SilentlyContinue

if ($blogPosts -or $blogPostsMdx) {
    Remove-Item "src/data/post/*" -Force
    Write-Host "  ✓ Removed demo blog posts" -ForegroundColor Green
}

# 3. Create placeholder blog post
$placeholderPost = @"
---
publishDate: 2025-01-15T00:00:00Z
title: Welcome to Ace-Scholara
excerpt: Our first blog post - coming soon!
image: https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800
tags:
  - news
  - education
---

Stay tuned for updates on education admissions, tips for parents, and insights for institutions.
"@

New-Item -Path "src/data/post" -Name "welcome.md" -ItemType File -Value $placeholderPost -Force | Out-Null
Write-Host "  ✓ Created placeholder blog post" -ForegroundColor Green

# 4. Create data folders
$dataFolders = @("src/data", "src/config")
foreach ($folder in $dataFolders) {
    if (!(Test-Path $folder)) {
        New-Item -ItemType Directory -Path $folder -Force | Out-Null
        Write-Host "  ✓ Created $folder" -ForegroundColor Green
    }
}

# 5. Create minimal index.astro placeholder
$minimalIndex = @"
---
import Layout from '~/layouts/PageLayout.astro';

const metadata = {
  title: 'Ace-Scholara — Outcome-Backed Admissions',
};
---

<Layout metadata={metadata}>
  <section class="py-20">
    <div class="max-w-4xl mx-auto px-4 text-center">
      <h1 class="text-5xl font-bold mb-6">
        Ace-Scholara
      </h1>
      <p class="text-xl text-gray-600 mb-8">
        Outcome-backed admissions for premium education.
      </p>
      <p class="text-gray-500">
        Replace this with your homepage content.
      </p>
    </div>
  </section>
</Layout>
"@

# Backup original index
if (Test-Path "src/pages/index.astro") {
    Copy-Item "src/pages/index.astro" "src/pages/index.astro.bak"
}

Set-Content -Path "src/pages/index.astro" -Value $minimalIndex
Write-Host "  ✓ Created minimal index.astro (original backed up)" -ForegroundColor Green

# 6. Clean up about.astro
$minimalAbout = @"
---
import Layout from '~/layouts/PageLayout.astro';

const metadata = {
  title: 'About — Ace-Scholara',
};
---

<Layout metadata={metadata}>
  <section class="py-20">
    <div class="max-w-4xl mx-auto px-4">
      <h1 class="text-4xl font-bold mb-6 text-center">About Us</h1>
      <p class="text-xl text-gray-600 text-center">
        Coming soon...
      </p>
    </div>
  </section>
</Layout>
"@

Set-Content -Path "src/pages/about.astro" -Value $minimalAbout
Write-Host "  ✓ Created minimal about.astro" -ForegroundColor Green

# 7. Clean up contact.astro
$minimalContact = @"
---
import Layout from '~/layouts/PageLayout.astro';

const metadata = {
  title: 'Contact — Ace-Scholara',
};
---

<Layout metadata={metadata}>
  <section class="py-20">
    <div class="max-w-4xl mx-auto px-4">
      <h1 class="text-4xl font-bold mb-6 text-center">Contact Us</h1>
      <p class="text-xl text-gray-600 text-center">
        Coming soon...
      </p>
    </div>
  </section>
</Layout>
"@

Set-Content -Path "src/pages/contact.astro" -Value $minimalContact
Write-Host "  ✓ Created minimal contact.astro" -ForegroundColor Green

# 8. Update config.yaml to remove announcement
$configPath = "src/config.yaml"
if (Test-Path $configPath) {
    $config = Get-Content $configPath -Raw
    # Comment out announcement section
    $config = $config -replace "announcement:", "# announcement:"
    $config = $config -replace "  text:", "#   text:"
    $config = $config -replace "  link:", "#   link:"
    Set-Content -Path $configPath -Value $config
    Write-Host "  ✓ Disabled announcement banner" -ForegroundColor Green
}

Write-Host ""
Write-Host "✅ Cleanup complete!" -ForegroundColor Green
Write-Host ""
Write-Host "Remaining structure:" -ForegroundColor Cyan
Write-Host "  src/pages/"
Write-Host "    ├── index.astro        (minimal placeholder)"
Write-Host "    ├── about.astro        (minimal placeholder)"
Write-Host "    ├── contact.astro      (minimal placeholder)"
Write-Host "    ├── privacy.md         (keep - legal)"
Write-Host "    ├── terms.md           (keep - legal)"
Write-Host "    ├── 404.astro          (keep - error page)"
Write-Host "    └── [...blog]/         (keep - blog system)"
Write-Host ""
Write-Host "  src/components/widgets/  (all AstroWind components available)"
Write-Host "  src/layouts/             (all layouts available)"
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "  1. Replace src/pages/index.astro with your homepage"
Write-Host "  2. Update src/navigation.ts with your menu"
Write-Host "  3. Update src/components/Logo.astro with your logo"
Write-Host "  4. Run: pnpm dev"
Write-Host ""
