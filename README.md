# 💸 Personal Finance Visualizer

A sleek, full-featured web application to manage and visualize personal finances. Built with **Next.js**, **React**, **MongoDB**, **shadcn/ui**, and **Recharts**, it allows users to track expenses, categorize spending, set monthly budgets, and gain financial insights through intuitive visualizations.

---

## ✨ Features

### 🔹 Transaction Management
- Add, edit, and delete transactions with details like amount, description, and date
- View a complete, scrollable transaction list with recent highlights
- Built-in form validation for clean data entry

  ![Screenshot 2025-04-16 222309](https://github.com/user-attachments/assets/5200fc5a-f781-43c5-86fe-badff9649d18)
  ![Screenshot 2025-04-16 222406](https://github.com/user-attachments/assets/13e4aba6-061d-4b3d-9d90-387fe9e2ec40)

### 🔹 Smart Categorization
- Predefined spending categories like Groceries, Transport, Entertainment, etc.
- Filter and analyze transactions by category
- Automatically organize data for better insights

  ![Screenshot 2025-04-16 222455](https://github.com/user-attachments/assets/2cff65ae-1cea-4054-93d5-d13b5ae64357)

### 🔹 Visual Expense Analytics
- **Monthly Expenses Bar Chart** to visualize trends over time
- **Category-wise Pie Chart** to understand how spending is distributed
- Responsive and interactive charts using Recharts

### 🔹 Budget Tracking
- Set category-wise budgets on a monthly basis
- View **Budget vs Actual** spending side-by-side in a bar chart
- Automatically detect overspending or savings

  ![Screenshot 2025-04-16 222550](https://github.com/user-attachments/assets/585d32da-3e19-462a-873b-5fc8cb1bf048)
  ![Screenshot 2025-04-16 222558](https://github.com/user-attachments/assets/ba7ba8e8-e890-43fe-9093-80c3ee0e2f2b)
  

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
