# 💎 Modern BMI Calculator (v2.0)

A high-end, responsive **Body Mass Index (BMI) Calculator** featuring a modern **Glassmorphism** UI. This version focuses on enhanced user experience (UX) through tactile button feedback, dynamic color-coded results, and a sleek translucent design.

## 🔗 Live Application
Experience the polished interface here:  
**[BMI Generator Project 2](https://mooraxx1.github.io/BMI-Generator-Project-2-better-/)**

---

## ✨ New in Version 2.0
* **Glassmorphism UI:** Utilizes `rgba` frosting and `backdrop-filter` effects for a premium, modern aesthetic.
* **Tactile Feedback:** Added `:active` scaling and `:hover` shadow transitions to the calculation button for a "native app" feel.
* **Dynamic Logic:** Real-time health categorization with synchronized color-coding (Green for Healthy, Red for Obese, etc.).
* **Refined Layout:** Optimized using nested Flexbox containers for perfect alignment of age, gender, and measurement inputs.
* **Input Sanitization:** Integrated `parseFloat` and strict validation to handle empty or invalid numeric entries.

## 🛠️ Built With
* **HTML5:** Semantic structure with accessible labels and radio-grouping.
* **CSS3:** Custom linear gradients, Flexbox layout, and advanced transition effects.
* **Vanilla JavaScript (ES6):** Mathematical logic, DOM manipulation, and conditional styling.

## 📐 The Formula
This tool uses the metric system to calculate health data accurately:
$$BMI = \frac{weight (kg)}{height (m)^2}$$

## 📁 File Structure
```text
├── index.html   # Revised semantic structure
├── style.css    # Advanced Glassmorphism & UI transitions
└── index.js     # Refined logic & input validation
