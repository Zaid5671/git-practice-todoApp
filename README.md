# Git Practice To-Do App

A simple, clean, and fully working To-Do application built specifically for practicing Git workflows as a solo developer.

## Purpose

This repository is designed to serve as a realistic codebase where you can repeatedly practice:
- Git branching
- Merging and Rebasing
- Pull-request style workflows
- Merge conflict resolution
- Cherry-picking, reverting, stashing

## Tech Stack

- **Frontend:** Vanilla HTML, CSS, JavaScript
- **Backend:** Node.js with Express
- **Database:** In-memory array (for simplicity, no external database required)

## Setup Instructions

1. **Ensure Node.js is installed** on your system.
2. Clone or open this repository in your terminal.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the server:
   ```bash
   npm start
   ```
   Or use `npm run dev` to start the app.
5. Open your browser and navigate to: [http://localhost:3000](http://localhost:3000) (or the port specified in `config.json`).

## How to use this for Git practice

Check out the [Git Practice Guide](./GIT_PRACTICE_GUIDE.md) for step-by-step progressive exercises. The guide will walk you through scenarios where you deliberately create and resolve merge conflicts in frontend, backend, and configuration files.

## Project Structure

- `/public`: Contains the frontend assets (`index.html`, `style.css`, `app.js`).
- `/server`: Contains the Node.js backend logic (`index.js`, `routes.js`).
- `config.json`: Application configuration.
