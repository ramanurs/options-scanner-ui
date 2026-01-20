# Contributing to Options Scanner UI

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing.

## Code of Conduct

Be respectful and constructive in all interactions.

## How to Contribute

### Reporting Bugs

Before creating a bug report, check if it already exists. When you create a bug report, include:

- **Clear title and description**
- **Steps to reproduce** the problem
- **Expected behavior** vs **actual behavior**
- **Screenshots** if applicable
- **Environment** (OS, Node version, etc.)
- **Logs** from the browser console

### Suggesting Features

- Use a clear, descriptive title
- Provide a detailed description of the suggested feature
- Explain the use case and benefits
- List any related features or examples

### Pull Requests

1. **Fork** the repository
2. **Create a branch** for your feature: `git checkout -b feature/my-feature`
3. **Make your changes** following the code style
4. **Test** your changes thoroughly
5. **Commit** with clear messages: `git commit -m 'Add my feature'`
6. **Push** to your fork: `git push origin feature/my-feature`
7. **Open a Pull Request** with a description of your changes

## Development Setup

```bash
# Clone and setup
git clone https://github.com/yourusername/options-scanner-ui.git
cd options-scanner-ui
npm install

# Start development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Code Style

- Use **ESLint** for code linting
- Use **Prettier** for code formatting
- Follow **React** best practices
- Use meaningful variable and function names
- Add comments for complex logic

## Commit Messages

```
type(scope): subject

body (optional)

footer (optional)
```

**Types:**
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Build, dependencies, etc.

**Examples:**
```
feat(stock): add edit functionality
fix(api): handle network timeout errors
docs: update CORS configuration guide
```

## Testing

Before submitting a PR, test your changes:

```bash
# Check for errors
npm run build

# Test in different browsers
npm run dev
```

## Questions?

Feel free to open a discussion or issue for questions.

Thank you for contributing! 🎉
