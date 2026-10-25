# Mess Menu

A responsive, student-facing website with a calendar and a balanced vegetarian Indian hostel menu. The 30-day meal plan repeats continuously, so selecting any date shows the corresponding day in the cycle.

## Publish on GitHub Pages

1. Add `index.html`, `styles.css`, `app.js`, and this README to a GitHub repository.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select your default branch and the `/ (root)` folder, then save.
4. Open the Pages URL after GitHub finishes deploying.

This is a static website with no login, database, build step, or package installation required. To change the dishes or the cycle's starting date, edit the `MENU_CYCLE` or `CYCLE_START_DATE` constants in `app.js`.
