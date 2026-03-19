# 🔢 Workshop 3 – Calculator (HTML, CSS & JavaScript)
### Intro to Web Dev · March 19, 2026  
#### ‼️ Please read ALL the instructions below ‼️

---

## 🎯 Goal

Build a **fully functional on‑screen calculator** using the starter HTML and CSS, and wire it up with JavaScript.

You will:

- Use **HTML** for the calculator structure (already done for you)
- Use **CSS** to control layout and visual styling (already provided)
- Use **JavaScript** to:
  - Show numbers on the screen when buttons are clicked
  - Perform add/subtract/multiply/divide
  - Clear and delete input
  - (Challenge) Support decimals and divide‑by‑zero handling

---

## 📁 Files in This Workshop

| File        | Description |
|------------|-------------|
| `index.html` | ✅ Completed layout — calculator screen and buttons |
| `styles.css` | ✅ Completed styling — layout, colors, sizing |
| `script.js`  | 🧠 Your job — add JavaScript to make the calculator work |

You should **only edit `script.js`** for this workshop.  
You can peek at `index.html` and `styles.css` to understand the structure, but don’t change them unless you’re doing the advanced challenge.

---

## 🧱 What the Calculator Already Has

### HTML (`index.html`)

The HTML gives you:

- A centered calculator container
- A display area:  
  - `div#calcScreen` – shows the current value
- Control buttons:
  - `button#clearButton` – CLEAR
  - `button#deleteButton` – DELETE
- Number and operator buttons inside `div#numButtons`:
  - Number buttons: `button.num` (0–9)
  - Operator buttons: `button.sign` (`+`, `-`, `*`, `/`, `.`)
  - Equals button: `button.signEqual` (`=`)

You will **select these elements in JavaScript** and attach event listeners to them.

### CSS (`styles.css`)

The CSS already:

- Centers the calculator on the page using **flexbox** (`.bodyContainer`)
- Styles the main calculator (`.calculatorContainer`) with borders, background, and spacing
- Styles the screen (`#calcScreen`) to align numbers to the right
- Styles all buttons consistently:
  - Clear button: red
  - Delete button: blue
  - Number and operator buttons: light gray
  - Layout of buttons using `flex` and `flex-wrap`

You **do not need to change any CSS** to complete the core JavaScript logic.

---

## 🧠 Your Task in `script.js`

You will write JavaScript that:

1. Reads which button was clicked
2. Updates the calculator screen
3. Stores numbers and operators
4. Performs the correct calculation when `=` is pressed

You’ll work with:

- **DOM selection** (`getElementById`, `querySelectorAll`)
- **Event listeners** (`addEventListener("click", ...)`)
- **State variables** (`currentValue`, `previousValue`, `currentOperator`)
- **Functions** to organize your logic

---

## 🧩 Step‑by‑Step: What To Build

### 1️⃣ Select DOM Elements

In `script.js`, create variables to store references to:

- The screen:
  - `#calcScreen`
- All number buttons:
  - `.num`
- All operator buttons:
  - `.sign`
- Equals button:
  - `.signEqual`
- Clear button:
  - `#clearButton`
- Delete button:
  - `#deleteButton`

Use:

- `document.getElementById("...")`
- `document.querySelectorAll("...")`
- `document.querySelector("...")`

You’ll use these variables to attach **click** event listeners.

---

### 2️⃣ Create State Variables

Add three variables at the top of `script.js`:

- `currentValue` – string, starts as `"0"`  
  - Represents what is currently shown on the screen
- `previousValue` – string, starts as `""`  
  - Stores the first number in an operation
- `currentOperator` – starts as `null`  
  - Stores `"+"`, `"-"`, `"*"`, or `"/"` when an operator is clicked

These will be updated by your functions as the user interacts with the calculator.

---

### 3️⃣ `updateScreen()` – Show Text on the Screen

Create a function:

```js
function updateScreen() { ... }
