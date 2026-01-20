# GitHub Setup Guide

Your Options Scanner UI project is ready to be pushed to GitHub! Follow these steps to create and publish your repository.

## Step 1: Create Repository on GitHub

1. Go to [GitHub](https://github.com)
2. Click **New** (or go to https://github.com/new)
3. Fill in the details:
   - **Repository name:** `options-scanner-ui`
   - **Description:** `A modern React-based frontend for Options Scanner trading platform`
   - **Visibility:** Choose Public or Private
   - **Do NOT** initialize with README, .gitignore, or license (we already have these)
4. Click **Create repository**

## Step 2: Add Remote and Push

```bash
# Navigate to your project directory
cd /Users/ramana.rapally/ramana/learnings/Finance/options-scanner-ui

# Add GitHub as remote (replace USERNAME with your GitHub username)
git remote add origin https://github.com/ramanurs/options-scanner-ui.git

# Rename branch to main (optional but recommended)
git branch -M main

# Push to GitHub
git push -u origin main
```

### Using SSH (Alternative)

If you have SSH configured:

```bash
git remote add origin git@github.com:YOUR_USERNAME/options-scanner-ui.git
git branch -M main
git push -u origin main
```

## Step 3: Verify on GitHub

1. Go to your repository: `https://github.com/YOUR_USERNAME/options-scanner-ui`
2. Verify all files are there
3. Check that README.md is displayed properly

## Next Steps

### 1. Update GitHub Links in Documentation

Replace placeholders in files:
- `README.md`: Update GitHub links
- `CONTRIBUTING.md`: Update links if needed
- Backend repository links

### 2. Add GitHub Actions (CI/CD)

Create `.github/workflows/ci.yml`:

```yaml
name: CI

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v3
    - uses: actions/setup-node@v3
      with:
        node-version: '18'
    
    - name: Install dependencies
      run: npm install
    
    - name: Build
      run: npm run build
```

### 3. Add GitHub Pages for Demo (Optional)

1. Go to **Settings** → **Pages**
2. Select `main` branch as source
3. Deploy your production build

### 4. Add Topics to Repository

Go to **About** section and add topics:
- `react`
- `vite`
- `material-ui`
- `trading`
- `options`
- `finance`

### 5. Configure Branch Protection Rules

1. Go to **Settings** → **Branches**
2. Add rule for `main` branch:
   - Require pull request reviews
   - Require status checks to pass
   - Include administrators

## Useful Git Commands

```bash
# View remote
git remote -v

# Remove remote
git remote remove origin

# Create a new branch
git checkout -b feature/new-feature

# Push feature branch
git push -u origin feature/new-feature

# Create a pull request on GitHub after pushing

# After PR is merged, update local main
git checkout main
git pull origin main
```

## Branch Strategy

Recommended workflow:

```
main (production)
  └── develop (staging)
       └── feature/xyz (feature branches)
```

Create `.github/ISSUE_TEMPLATE/config.yml`:

```yaml
blank_issues_enabled: false
contact_links:
  - name: Question
    url: https://github.com/YOUR_USERNAME/options-scanner-ui/discussions
    about: Ask questions in discussions
```

## Additional Resources

- [GitHub Hello World](https://guides.github.com/activities/hello-world/)
- [Forking a Repository](https://docs.github.com/en/get-started/quickstart/fork-a-repo)
- [About README Files](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

---

Good luck with your project! 🚀
