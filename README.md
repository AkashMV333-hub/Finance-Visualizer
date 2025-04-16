# 💸 Personal Finance Visualizer

A sleek, full-featured web application to manage and visualize personal finances. Built with **Next.js**, **React**, **MongoDB**, **shadcn/ui**, and **Recharts**, it allows users to track expenses, categorize spending, set monthly budgets, and gain financial insights through intuitive visualizations.

---

## ✨ Features

### 🔹 Transaction Management
- Add, edit, and delete transactions with details like amount, description, and date
- View a complete, scrollable transaction list with recent highlights
- Built-in form validation for clean data entry

### 🔹 Smart Categorization
- Predefined spending categories like Groceries, Transport, Entertainment, etc.
- Filter and analyze transactions by category
- Automatically organize data for better insights

### 🔹 Visual Expense Analytics
- **Monthly Expenses Bar Chart** to visualize trends over time
- **Category-wise Pie Chart** to understand how spending is distributed
- Responsive and interactive charts using Recharts

### 🔹 Budget Tracking
- Set category-wise budgets on a monthly basis
- View **Budget vs Actual** spending side-by-side in a bar chart
- Automatically detect overspending or savings

### 🔹 Personalized Spending Insights
- Receive real-time suggestions like:
  - "You overspent by ₹500 on Food"
  - "Congrats, you saved ₹300 in Transport"
  - "Set a budget for Health to track spending"
- Insights delivered in visually distinct cards for quick understanding

### 🔹 Modern UI & UX
- Built with [shadcn/ui](https://ui.shadcn.com/) for clean and accessible design
- Fully mobile-responsive and optimized for all screen sizes
- User-friendly navigation with a toggling Navbar

---

## 🛠 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Frontend:** React, Tailwind CSS, shadcn/ui
- **Database:** MongoDB (Mongoose ORM)
- **Charts:** Recharts
- **API:** RESTful API routes via Next.js

---

## 📦 Getting Started

```bash
# Clone the repo
git clone https://github.com/yourusername/finance-visualizer.git
cd finance-visualizer

# Install dependencies
npm install

# Add MongoDB URI to .env.local
touch .env.local
.env.local
MONGODB_URI=your_mongodb_connection_string

Then run:
npm run dev
