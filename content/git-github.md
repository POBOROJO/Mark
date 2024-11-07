---
title: Git and GitHub Tutorial
slug: git-github
description: Learn Git version control and GitHub collaboration.
---

Git is a version control system that allows you to track changes in your code and collaborate with others. GitHub is a platform for hosting and sharing Git repositories, making collaboration easier. This guide introduces the basics of using Git and GitHub effectively.

## Table of Contents

1. **Introduction to Git and GitHub**
2. **Setting Up Git**
3. **Creating and Cloning Repositories**
4. **Committing Changes**
5. **Branching and Merging**
6. **Handling Merge Conflicts**
7. **Using GitHub**
8. **Pull Requests**
9. **Git Commands Cheat Sheet**
10. **Git Best Practices**

## Introduction to Git and GitHub

Git is used for:

- **Version Control:** Keeping track of changes to your code.
- **Collaboration:** Working with multiple contributors.
- **Backup:** Ensuring code is safely stored and recoverable.

GitHub provides additional tools for collaboration, code review, and project management, enabling teams to work on projects remotely and manage contributions easily.

## Setting Up Git

Install Git and configure your user details:

```bash
# Install Git (if not already installed)
sudo apt install git  # for Linux
brew install git      # for macOS
```

# Configure user details

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

# Creating and Cloning Repositories
```bash
git init my-project  # Initialize a new repository
cd my-project
```
To clone an existing repository:
```bash
git clone https://github.com/username/repository-name.git
```

This command creates a local copy of the repository on your machine.

# Committing Changes
After making changes to your files, you’ll need to stage and commit them to save your work in the Git history.

```bash
git add .                    # Stage all changes
git commit -m "Initial commit"  # Commit with a message
```

`git add .` stages all modified files.`git commit` records the changes in the repository with a descriptive message.

# Branching and Merging
Branches allow you to work on features or fixes independently from the main codebase.

```bash
git branch new-feature      # Create a new branch
git checkout new-feature    # Switch to the new branch
```

You can also create and switch to a branch in one command:
```bash
git checkout -b new-feature
```

After finishing your work on the branch, you can merge it back into the main branch:

```bash
git checkout main
git merge new-feature
```

# Handling Merge Conflicts
When merging branches, you may encounter conflicts if the same code lines have been modified differently on each branch. To resolve conflicts:

1. Open the conflicting files and resolve the issues.
2. Stage the changes and commit them.

```bash
git add conflicted-file
```

3. Complete the merge with a commit:
```bash
git commit -m "Resolved merge conflict"
```

# Using GitHub
Once you have a local Git repository, you can push it to GitHub to share and collaborate with others.

## Adding a Remote Repository
First, add a remote repository link:

```bash
git remote add origin https://github.com/username/repository-name.git
```

## Pushing to GitHub
Push your code to GitHub:

```bash
git push -u origin main
```
The `-u` option sets the upstream branch, so you can just use `git push` in the future.

## Pull Requests

A Pull Request (PR) on GitHub is a request to merge changes from one branch into another, typically used for code review.

1. Push your branch to GitHub.
2. Go to your repository on GitHub and click "New Pull Request."
3. Select the branch you want to merge from and to, add a title and description, and submit the PR for review.

Team members can review the changes, discuss them, and make suggestions before merging.

## Git Commands Cheat Sheet

Here’s a quick reference of commonly used Git commands:

- Initialize a repository: `git init`
- Clone a repository: `git clone <url>`
- Check repository status: `git status`
- Stage changes: `git add <file>` or `git add .`
- Commit changes: `git commit -m "commit message"`
- View commit history: `git log`
- Create a branch: `git branch branch-name`
- Switch to a branch: `git checkout branch-name`
- Merge a branch: `git merge branch-name`
- Push to a remote repository: `git push origin branch-name`
- Pull changes from a remote: `git pull origin branch-name`

## Git Best Practices

To keep your Git history organized and your workflow smooth, follow these best practices:

- **Write meaningful commit messages:** Describe what changes were made and why.
- **Commit small, focused changes:** Avoid large commits; each commit should address a single change or fix.
- **Use branches for features and fixes:** Keep the main branch stable.
- **Push changes frequently:** Regular pushes reduce the risk of large, complex merges.
- **Review code with pull requests:** Use GitHub’s PR feature for code reviews and discussion.
