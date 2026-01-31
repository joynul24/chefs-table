# 🍳 Chefs-Table Project

## 📖 Overview
Chefs-Recipe is a web application designed to showcase recipes in a visually appealing and interactive way.  
The project follows a given Figma design and implements dynamic features like recipe cards, sidebar management, and cooking workflow.

---

## 🔗 Live Demo 
[Visit the Live Site](https://elegant-pie-joy.netlify.app/)

## 🎯 Main Requirements

### 1. Design
- Follow the provided Figma design.
- Colors can be customized, but must be **eye-pleasing**.

### 2. Navigation Bar
- Website name/logo on the **left**.
- **4 menu items** in the middle: `Home`, `Recipes`, `About`, `Search`.
- On the **right side**:
  - Search bar with search icon + text.
  - User icon.

### 3. Banner Section
- Background image.
- Title & short description (no lorem ipsum).
- Two buttons:
  - **Explore Now**
  - **Our Feedback**

### 4. JSON Data
- Create a JSON file with **minimum 6 recipes**.
- Each recipe must include:
  - Recipe image
  - `recipe_id`
  - Recipe name
  - Short description
  - Ingredients (array format)  
    Example:  
    ```json
    ["550 g chicken", "120 ml soy sauce", "200 g basil leaf", "400 g mushroom"]
    ```
  - Preparing time (e.g., `30 min`)
  - Calories (e.g., `320 calories`)

### 5. Our Recipes Section
- Heading + short description (no lorem ipsum).

### 6. Recipe Card Section
- Minimum **6 recipe cards** displayed on the left side.
- Each card must show:
  - Recipe image
  - Recipe name
  - Short description
  - Ingredients length + unordered list
  - Preparing time
  - Calories
  - Button: **Want to Cook**

### 7. Sidebar (Want to Cook Table)
- Clicking **Want to Cook** adds recipe to sidebar table.
- Features:
  - Count increases.
  - Each table row shows: Recipe name, preparation time, calories, and a **Preparing** button.
  - Prevent duplicate selection → show toast if clicked again.

---

## ⚡ Challenge Requirements
- Clicking **Preparing** button:
  - Removes recipe from Want to Cook table.
  - Decreases Want to Cook count.
  - Adds recipe to **Currently Cooking table**.
  - Each row shows: Recipe name, preparation time, calories.
  - Count increases in Currently Cooking table.

---

## 🌟 Optional (Recommended)
- Below tables:
  - Show **total preparation time**.
  - Show **total calories**.
- Make the website **responsive for mobile devices**.

---

## 🛠️ Tech Stack
- **HTML, CSS, JavaScript**
- **Tailwind CSS** (recommended for styling)
- JSON for recipe data
- Responsive design principles

---

## 🚀 How to Run
1. Clone the repository:
   ```bash
   git clone https://github.com/joynul24/chefs-table
