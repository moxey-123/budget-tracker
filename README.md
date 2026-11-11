
# SpendWise Dashboard

## Project Overview

SpendWise is a responsive personal finance dashboard built using HTML5 and CSS3.

The project demonstrates modern CSS layout techniques, including CSS Grid and Flexbox, to create a clean and organized financial dashboard.

The dashboard displays six financial categories with realistic static sample information.

## Features

- Responsive dashboard layout.
- Sidebar navigation menu.
- Dashboard header with welcome message and user profile.
- Six financial category cards:
  - Food
  - Transport
  - Rent
  - Entertainment
  - Savings
  - Utilities
- CSS Grid for the overall page layout.
- Flexbox for arranging dashboard components.
- CSS custom properties for consistent colors.
- Hover and keyboard focus animations.
- Responsive mobile layout.
- Dark theme using CSS media queries.

## Technologies Used

- HTML5
- CSS3
- CSS Grid
- CSS Flexbox
- CSS Custom Properties
- CSS Media Queries

## Project Structure

```text
budget-tracker/
│
├── index.html
├── style.css
└── README.md
```

## Explanation of Project Files

### 1. index.html

Contains the structure of the dashboard.

It includes:

- Sidebar and navigation links.
- Dashboard header.
- User profile.
- Six financial category cards.
- Footer.

### 2. style.css

Contains all the styling and layout rules.

It uses:

- CSS Grid to organize the dashboard and category cards.
- Flexbox to arrange the sidebar, navigation, header and card content.
- CSS variables to manage the application's color theme.
- Media queries to make the dashboard responsive.
- Hover and focus effects to improve user interaction.
- Dark theme support through `prefers-color-scheme`.

### 3. README.md

Provides project documentation, including the project overview, features, technologies and file structure.

## Responsive Design

The dashboard uses a CSS media query at 767px.

On smaller screens:

- The sidebar moves above the main content.
- Navigation links wrap onto multiple lines.
- The dashboard changes into a single-column layout.
- Category cards stack vertically.

## How to Run the Project

1. Clone the repository:

   ```bash
   git clone YOUR_GITHUB_REPOSITORY_URL
   ```

2. Open the project folder.

3. Open `index.html` in your web browser.

## Assignment Goal

The goal of this project is to demonstrate practical knowledge of CSS Grid, Flexbox, CSS custom properties, responsive design and CSS micro-interactions.

---

**Project:** SpendWise Dashboard Shell

**Author:** Salman

**Course:** CSS Layout - Week 4
