# Git Practice Guide

This guide contains progressive exercises designed to simulate real-world Git scenarios as a solo developer. 
Follow the instructions to deliberately create changes, conflicts, and resolve them.

---

## Exercise 1: Basic Branching and Merging (No Conflict)
*Goal: Create a new feature and merge it cleanly into `main`.*

1. Make sure you are on the `main` branch and it is clean (`git status`).
2. Create and switch to a new branch for a feature: 
   ```bash
   git checkout -b feature/add-footer-links
   ```
3. Open `public/index.html` and add a dummy link to the footer:
   ```html
   <footer>
       <p>Git Practice To-Do App &copy; <span id="year"></span> | <a href="#">About</a></p>
   </footer>
   ```
4. Commit your changes:
   ```bash
   git add public/index.html
   git commit -m "feat: add about link to footer"
   ```
5. Switch back to `main`: `git checkout main`
6. Merge the feature branch: `git merge feature/add-footer-links`

---

## Exercise 2: Simple Merge Conflict (Frontend)
*Goal: Deliberately create a merge conflict in the same file and resolve it.*

1. From `main`, create a branch called `style/update-primary-color`:
   ```bash
   git checkout -b style/update-primary-color
   ```
2. Open `public/style.css`. Change `--primary-color: #4a90e2;` to a green color, e.g., `#2ecc71`.
3. Commit the change: `git commit -am "style: change primary color to green"`
4. Switch back to `main`: `git checkout main`
5. Create another branch from `main` called `style/update-primary-to-red`:
   ```bash
   git checkout -b style/update-primary-to-red
   ```
6. Open `public/style.css` and change `--primary-color: #4a90e2;` to a red color, e.g., `#e74c3c`.
7. Commit the change: `git commit -am "style: change primary color to red"`
8. Switch to `main` and merge the green branch:
   ```bash
   git checkout main
   git merge style/update-primary-color
   ```
   *(This will succeed).*
9. Now, attempt to merge the red branch:
   ```bash
   git merge style/update-primary-to-red
   ```
   *(This will cause a conflict!)*
10. **Resolve the conflict:** Open `public/style.css`, pick either color (or a completely new one), remove the conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`), and commit the resolution.

---

## Exercise 3: Backend and Config Conflict
*Goal: Resolve a conflict involving API logic and configuration files.*

1. From `main`, create branch `feat/change-port-8080`:
   ```bash
   git checkout -b feat/change-port-8080
   ```
2. Open `config.json` and change `"port": 3000` to `"port": 8080`.
3. Open `server/index.js` and change `console.log(\`[${config.appName}] Server running on port ${PORT}\`);` to include a start emoji: `console.log(\`🚀 [${config.appName}] Server running on port ${PORT}\`);`
4. Commit: `git commit -am "feat: change default port to 8080 and add emoji"`
5. Switch back to `main` and create branch `feat/change-port-4000`:
   ```bash
   git checkout -b feat/change-port-4000
   ```
6. Open `config.json` and change `"port": 3000` to `"port": 4000`.
7. Open `server/index.js` and change the same console log to: `console.log(\`[SERVER] Started gracefully on port ${PORT}\`);`
8. Commit: `git commit -am "feat: change default port to 4000 and update log message"`
9. Switch to `main`, merge `feat/change-port-8080`.
10. Attempt to merge `feat/change-port-4000`. 
11. **Resolve the conflict:** You will have conflicts in two files. Resolve both to keep port `4000` but use the `🚀` emoji in the log message. Add the files and commit.

---

## Exercise 4: Rebasing and Resolving Conflicts
*Goal: Practice `git rebase` instead of `git merge`.*

1. From `main`, create a branch `refactor/api-routes`:
   ```bash
   git checkout -b refactor/api-routes
   ```
2. Open `server/routes.js`. At the top of the file, add a comment: `// User Todo API Endpoints`.
3. Commit: `git commit -am "refactor: add api endpoint comment"`
4. Switch to `main`. Open `server/routes.js` and add a DIFFERENT comment at the top: `// --- Todo Application Routes ---`.
5. Commit directly to main (simulating someone else merging to main while you were working): `git commit -am "docs: update routes documentation"`
6. Switch back to your branch: `git checkout refactor/api-routes`
7. Rebase your branch onto main:
   ```bash
   git rebase main
   ```
   *(This will pause with a conflict).*
8. **Resolve the conflict:** Open `server/routes.js`, choose how to combine the comments, save, run `git add server/routes.js`, and then continue the rebase:
   ```bash
   git rebase --continue
   ```

---

## Exercise 5: Simulated Pull Request Workflow
*Goal: Complete a feature using a simulated PR workflow using squashing.*

1. From `main`, create `feat/dark-mode`.
2. Add some dark mode CSS to `public/style.css` in a few separate commits:
   - Commit 1: `body.dark-mode { background-color: #222; }`
   - Commit 2: `.container.dark-mode { background-color: #333; color: white; }`
   - Commit 3: `Fix typo in dark mode class`
3. Now pretend you are reviewing your own PR and want to clean up the commits before merging.
4. Perform an interactive rebase to squash these 3 commits into 1:
   ```bash
   git rebase -i HEAD~3
   ```
   *(Change `pick` to `squash` or `s` for the second and third commits, and update the commit message).*
5. Merge your clean branch into main!

---
*Happy practicing!*
