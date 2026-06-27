// ===========================================================================
// Project data — edit this file to add, remove, or update your projects.
// Each project supports:
//   title       (string)  — project name
//   description (string)  — short summary
//   icon        (string)  — emoji shown on the card thumbnail
//   category    (string)  — one of: "web", "mobile", "tool"
//   tags        (array)   — tech/keywords shown as pills
//   demo        (string)  — live URL (use "" to hide the link)
//   source      (string)  — source code URL (use "" to hide the link)
//   image       (string)  — optional screenshot path; falls back to the
//                           emoji tile when omitted
// ===========================================================================

const REPO = "https://github.com/TDKasala/portfolio";

const projects = [
  {
    title: "School Connect Africa",
    description:
      "A web platform connecting schools, students, and educational resources across Africa. Live and serving real users.",
    icon: "🎓",
    category: "web",
    tags: ["Web Platform", "Education", "Africa"],
    demo: "https://www.schoolconnectafrica.co.za",
    source: "",
    // Branded preview tile — replace with a real screenshot of the live
    // site (e.g. assets/shots/school-connect.png) when you have one.
    image: "assets/shots/school-connect.svg",
  },
  {
    title: "Personal Portfolio",
    description:
      "This very website — a fast, responsive portfolio built with plain HTML, CSS, and JavaScript. Dark mode and filtering included.",
    icon: "🌐",
    category: "web",
    tags: ["HTML", "CSS", "JavaScript"],
    demo: "#",
    source: REPO,
  },
  {
    title: "Task Manager",
    description:
      "A clean to-do app with categories, due dates, active/done filtering, and persistence — your tasks are saved in the browser.",
    icon: "✅",
    category: "web",
    tags: ["JavaScript", "LocalStorage", "UI"],
    demo: "projects/task-manager/index.html",
    source: REPO + "/tree/main/projects/task-manager",
    image: "assets/shots/task-manager.png",
  },
  {
    title: "Weather Dashboard",
    description:
      "Search any city for live current conditions and a 7-day forecast. Powered by the free Open-Meteo API — no key required.",
    icon: "⛅",
    category: "web",
    tags: ["API", "Open-Meteo", "JavaScript"],
    demo: "projects/weather/index.html",
    source: REPO + "/tree/main/projects/weather",
    image: "assets/shots/weather.png",
  },
  {
    title: "Expense Tracker",
    description:
      "Log expenses, categorize spending, and see live totals plus a per-category breakdown chart. All data stays in your browser.",
    icon: "💸",
    category: "web",
    tags: ["JavaScript", "Charts", "LocalStorage"],
    demo: "projects/expense-tracker/index.html",
    source: REPO + "/tree/main/projects/expense-tracker",
    image: "assets/shots/expense-tracker.png",
  },
  {
    title: "Markdown Notes",
    description:
      "A distraction-free markdown editor with live preview, auto-save, and .md export — built with a dependency-free renderer.",
    icon: "📝",
    category: "tool",
    tags: ["JavaScript", "Markdown"],
    demo: "projects/markdown-notes/index.html",
    source: REPO + "/tree/main/projects/markdown-notes",
    image: "assets/shots/markdown-notes.png",
  },
];
