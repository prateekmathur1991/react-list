# React List

A TODO List implementation done in React JS designed to learn React fundamental and core concepts.

# Implementation Plan

---

## 🏗️ Phase 1 — Project Setup

1. Make sure Node.js is installed on your machine. Run `node -v` in your terminal to confirm.
2. Use **Vite** to create a new React project. Google "create react app with vite" and follow the first result.
3. Open the project in VS Code.
4. Run the dev server and confirm you see the default Vite + React page in your browser.
5. Delete everything inside the `src` folder except `main.jsx`.
6. Create a fresh `App.jsx` file in `src` that just returns a `<h1>` that says "Task Manager".
7. Make sure `main.jsx` is importing and rendering `<App />` correctly. Confirm it shows in the browser.

---

## 🧱 Phase 2 — Static UI (No Logic Yet)

8. Inside `App.jsx`, write a hardcoded `<input>` field and an `<button>` that says "Add Task". Don't wire them up yet.
9. Below that, write a hardcoded `<ul>` with 2–3 `<li>` items that are just fake task names. Type them directly, no variables.
10. Create a new file `TaskItem.jsx` in `src`.
11. Move one `<li>` into `TaskItem` as a component. Have it accept a `name` prop and display it.
12. Back in `App.jsx`, render `<TaskItem name="Buy groceries" />` and confirm it shows up.
13. Render 2–3 `<TaskItem>` components in `App.jsx` with different hardcoded names.

---

## 📋 Phase 3 — Introduce a List with `.map()`

14. In `App.jsx`, create a hardcoded array of task objects *above* your JSX. Each object should have an `id` and a `name`.
15. Replace your hardcoded `<TaskItem>` components by using `.map()` over that array to render them dynamically.
16. Open your browser console and read the warning React gives you. Understand what it's asking for.
17. Add a unique `key` prop to each `<TaskItem>` inside your `.map()` to fix that warning.

---

## ⚡ Phase 4 — Your First `useState`

18. Move your hardcoded tasks array *inside* `App.jsx` as a `useState` variable. Name the state `tasks` and the setter `setTasks`.
19. Confirm the app still renders exactly the same. Nothing should change visually.
20. Add a second `useState` for the text input. Call it `inputValue`. Initialize it as an empty string.
21. Connect that state to your `<input>` field using `value` and `onChange`. Type in the box and make sure the input updates.
22. Add a `console.log(inputValue)` inside your component and watch it print every keystroke in the console.
23. Remove the `console.log` once you're satisfied it works.

---

## ➕ Phase 5 — Adding Tasks

24. Write a function called `handleAddTask` inside `App.jsx`.
25. Inside that function, just do a `console.log("button clicked")` for now.
26. Connect that function to your button's `onClick`. Confirm it logs on click.
27. Update `handleAddTask` to actually create a new task object using `inputValue`.
28. Use `setTasks` to add that new task to the list. Think about how to add to an array without mutating it.
29. Confirm new tasks appear in the list when you click "Add Task".
30. Clear the input field after a task is added by resetting `inputValue` to an empty string inside `handleAddTask`.
31. Add a guard clause so that clicking "Add Task" with an empty input does nothing.

---

## 🗑️ Phase 6 — Deleting Tasks

32. Add a "Delete" button inside `TaskItem.jsx`.
33. Add an `onDelete` prop to `TaskItem`. For now, just pass a dummy function from `App.jsx` and confirm clicking delete logs something.
34. Write a `handleDeleteTask` function in `App.jsx` that filters out a task by its `id`.
35. Pass `handleDeleteTask` down to each `<TaskItem>` as the `onDelete` prop.
36. Wire up the delete button in `TaskItem` to call `onDelete` with the correct task `id`.
37. Click delete on a task. Confirm it disappears from the list.

---

## ✅ Phase 7 — Completing Tasks

38. Add a `completed` property to each task object in your initial state. Set them all to `false`.
39. Add a checkbox to `TaskItem.jsx`. Pass a `completed` prop and set the checkbox's `checked` value to it.
40. Add an `onToggle` prop to `TaskItem` and wire it up to the checkbox's `onChange`.
41. Write a `handleToggleTask` function in `App.jsx` that flips the `completed` boolean for a specific task by `id`.
42. Pass `handleToggleTask` down as `onToggle`.
43. Click a checkbox and confirm the task's `completed` status toggles.
44. Add a strikethrough style on the task name in `TaskItem` when `completed` is `true`. Use a conditional inline style or a class.

---

## 🔍 Phase 8 — Filtering Tasks

45. Add a new `useState` for the current filter. Call it `filter`. Initialize it as `"all"`.
46. Add three buttons to `App.jsx`: **All**, **Active**, **Completed**.
47. Wire each button's `onClick` to set `filter` to `"all"`, `"active"`, or `"completed"`.
48. Create a variable called `filteredTasks` that derives the correct list from `tasks` based on the current `filter` value.
49. Replace `tasks` with `filteredTasks` in your `.map()`.
50. Test all three filter buttons and confirm the list updates correctly.
51. Highlight the currently active filter button so the user knows which filter is selected. Use the `filter` state to do this conditionally.

---

## 💾 Phase 9 — Persist with `useEffect`

52. Import `useEffect` from React.
53. Write a `useEffect` that runs whenever `tasks` changes and saves the tasks array to `localStorage`. Use `JSON.stringify`.
54. Write a second `useEffect` (or update your `useState` initial value) that *loads* tasks from `localStorage` when the app first opens. Use `JSON.parse`.
55. Add a task, then refresh the page. Confirm your task is still there.
56. Delete a task, then refresh. Confirm it stays deleted.

---

## 🪝 Phase 10 — Extract a Custom Hook

57. Create a new file called `useLocalStorage.js` inside `src`.
58. Read about what a custom hook is. A custom hook is just a function whose name starts with `use` and that calls other hooks inside it.
59. Move your `localStorage` logic from `App.jsx` into `useLocalStorage.js`. It should accept a `key` and an `initialValue` and return `[value, setValue]`, just like `useState`.
60. Replace the relevant state and effects in `App.jsx` with your new `useLocalStorage` hook.
61. Confirm everything still works exactly as before.

---

## 🏁 You're Done.

At this point you will have used **every core React concept** hands-on. From here you can extend it — add priority levels, due dates, drag-to-reorder — but the fundamentals are now yours.