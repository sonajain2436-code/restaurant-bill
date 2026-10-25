<div align="center">

# 🍽️ Royal Spice POS
### Modern Restaurant Billing & Order Management System

[![React](https://img.shields.io/badge/React-19.3-61dafb?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646cff?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

A feature-complete, modern, and responsive **Restaurant POS & Management System**. Built with React 19, TypeScript, and Tailwind CSS. Features live order tracking, visual table floor planning, pure veg/non-veg classification, automated GST tax calculation, thermal invoice generation, inventory tracking, and sales analytics.

[Features](#-key-features) • [B.Tech OOP Concept](#-btech-oop-concepts-translation) • [Live Demo](#-demo-credentials) • [Getting Started](#-getting-started) • [Calculations](#-billing-calculation-logic)

</div>

---

## 📖 Project Overview

Originally conceptualized as a college **B.Tech C++ Object-Oriented Programming (OOP)** terminal project, this web application transitions classical software engineering principles into an enterprise-grade GUI.

It eliminates manual paper ticketing, automates itemized GST billing with CGST and SGST splits, tracks real-time table turnover, and provides restaurant staff with an intuitive POS terminal.

---

## 🌟 Key Features

### 1. 🛒 Dual-Column POS & Rapid Order Entry
* **Split Layout**: Left pane displays an interactive food catalog; right pane displays the active cart with real-time recalculations.
* **Veg / Non-Veg Categorization**: Color-coded indicators (Green square with dot for Pure Veg, Red square with dot for Non-Veg) complying with food packaging norms.
* **Quick Filtering**: Filter by category (*Starters, Main Course, Breads, Rice, Beverages, Desserts*) or switch to *Pure Veg Only*.
* **Real-time Search**: Instant substring query by dish title, category, or ingredients.
* **Order Modes**: Seamless toggle between **Dine-In** (with table occupancy checks) and **Takeaway / Parcel**.
* **Cart Controls**: Direct `+` / `-` steppers, item removal, and special culinary instructions (e.g. *less spicy*, *no onion*).

### 2. 🪑 Table & Floor Plan Management
* **Visual Table Map**: 12 tables mapped across *Indoor Dining*, *Outdoor Patio*, and *Family VIP Booths*.
* **Status Badges**:
  - 🟢 **Available**: Ready to seat guests; click to launch an instant POS order or make a reservation.
  - 🟡 **Occupied**: Shows customer name, active order ticket, elapsed time, current bill amount, and quick checkout.
  - 🔵 **Reserved**: Displays guest reservation name and party size with check-in confirmation.

### 3. 🧾 Professional Thermal & Standard Invoices
* **Thermal Receipt Support**: Formatted for standard **80mm thermal receipt rolls** and standard A4 paper with tailored `@media print` rules.
* **Receipt Content**:
  - Restaurant Branding, tagline, Connaught Place address, phone, GSTIN, and FSSAI license.
  - Invoice Number (e.g. `RS-INV-1004`), order reference, table number, date & timestamp, cashier name.
  - Itemized table with quantity, unit rate, and total amount.
  - Subtotal, discounts, Central GST (CGST), State GST (SGST), and Grand Total in Indian Rupees (`₹`).
  - Barcode mockup and customizable footer note.
* **Export Options**: One-click **Print Invoice** (`window.print()`) and **Download Receipt (.txt)**.

### 4. 👨‍🍳 Kitchen Order Pipeline (KOT)
* **Lifecycle Tracking**: Advance tickets through stages:
  $$\text{Pending} \longrightarrow \text{Preparing} \longrightarrow \text{Ready} \longrightarrow \text{Completed}$$
* **Order Queue Filter**: Filter tickets by status (*Pending, Preparing, Ready, Completed, Cancelled*).
* **Direct Actions**: Advance status with one click, generate bills, or cancel tickets with automated table vacancy restoration.

### 5. 📦 Inventory & Low-Stock Alerts
* **Stock Tracking**: Monitors kitchen supplies including dairy (*Paneer, Butter, Cream*), poultry (*Chicken*), grains (*Aged Basmati Rice*), oils, packaging, and beverages.
* **Low-Stock Warnings**: Triggers warning banners on the dashboard and inventory tab when ingredients fall below the minimum threshold.
* **Quick Adjustments**: `+` and `-` controls for rapid stock replenishment.

### 6. 📊 Executive Analytics & Sales Reports
* **Financial Metrics**: Total revenue, total orders, and average order value (AOV).
* **7-Day Sales Trend**: SVG bar chart displaying weekly revenue curves and peak dinner services.
* **Bestseller Leaderboard**: Top-ordered dishes ranked by portions sold and revenue generated.
* **Channel Distribution**: Dine-in vs. Takeaway volume breakdown.
* **Payment Methods**: Split across UPI (GooglePay/PhonePe/QR), Cards, and Cash.
* **CSV Export**: One-click export of complete operational records into `.csv`.

### 7. ⚙️ Configurable Settings & Persistence
* **Customizable GST & Tax Rate**: Demonstrative tax rate configurable from Settings (default 5% with CGST/SGST split).
* **Branding & Receipts**: Configure restaurant title, contact, address, invoice prefix, currency, and footer notes.
* **Data Persistence**: Uses browser `LocalStorage` with pre-seeded data, ensuring changes survive refreshes. Designed with schemas ready for Supabase/PostgreSQL.

---

## 🏛️ B.Tech OOP Concepts Translation

| C++ OOP Concept | Modern Web Implementation | Description |
| :--- | :--- | :--- |
| **Classes & Objects** | TypeScript interfaces (`types/index.ts`) | Strong schemas for `MenuItem`, `Order`, `Bill`, `Table`, `InventoryItem`. |
| **Encapsulation** | React Context (`AppContext.tsx`) | Encapsulates state logic and exposes controlled mutators (`addToCart`, `createOrder`, `generateBillForOrder`). |
| **Inheritance & Hierarchy** | Derived types & polymorphic schemas | `OrderItem` extends `MenuItem`; `Bill` inherits order structures with tax audit trails. |
| **Data Abstraction** | Custom Hooks & Service API | UI components consume declarative actions without direct internal state tampering. |
| **File Handling / I/O** | `localStorage` & CSV Blob Engine | Replaces C++ `fstream` with persistent JSON browser storage and dynamic file generation. |
| **Polymorphism** | Configurable Tax & Discount rules | Interchangeable discount models (`%` vs. `₹`) and multi-channel payment processors (`UPI`, `Cash`, `Card`). |

---

## 📐 Billing Calculation Logic

$$\text{Item Total} = \text{Quantity} \times \text{Unit Price}$$

$$\text{Subtotal} = \sum_{i=1}^{n} \text{Item Total}_i$$

$$\text{Taxable Amount} = \text{Subtotal} - \text{Discount}$$

$$\text{GST / Tax} = \text{Taxable Amount} \times \left( \frac{\text{Configured Tax Rate}}{100} \right)$$

$$\text{CGST} = \frac{\text{GST}}{2}, \quad \text{SGST} = \frac{\text{GST}}{2}$$

$$\text{Grand Total} = \text{Taxable Amount} + \text{GST}$$

---

## 🛠️ Tech Stack

* **Frontend**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
* **Build Tool**: [Vite 8](https://vite.dev/)
* **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
* **Icons**: [Lucide React](https://lucide.dev/)
* **Typography**: Plus Jakarta Sans & JetBrains Mono

---

## 🚀 Getting Started

### Prerequisites
* [Node.js](https://nodejs.org/) (v18.0 or newer recommended)
* `npm` (comes with Node.js)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/restaurant-pos.git
   cd restaurant-pos
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```

4. **Open in your browser**:
   Navigate to **`http://localhost:5173`**

### Build for Production

```bash
# Compile TypeScript & bundle assets
npm run build

# Preview production build locally
npm run preview
```

---

## 🔐 Demo Credentials

Quick demo login buttons are available on the login page:

| Role | Username / Email | Password |
| :--- | :--- | :--- |
| **Manager / Admin** | `admin@royalspice.com` | `admin123` |
| **Billing Cashier** | `staff@royalspice.com` | `staff123` |

---

## 📂 Project Directory Structure

```text
restaurant-pos/
├── index.html                   # HTML entry point with fonts & meta
├── package.json                 # Project dependencies & scripts
├── tailwind.config.js           # Theme styling & palette extension
├── tsconfig.json                # TypeScript configuration
├── vite.config.ts               # Vite bundler configuration
└── src/
    ├── main.tsx                 # React application root
    ├── App.tsx                  # Core app router & modal coordinator
    ├── index.css                # Tailwind directives & print rules
    ├── types/
    │   └── index.ts             # TypeScript domain interfaces
    ├── data/
    │   └── mockData.ts          # Realistic seed dishes, tables, inventory
    ├── context/
    │   └── AppContext.tsx       # Central state store & LocalStorage persistence
    ├── components/
    │   ├── common/              # VegBadge, ToastContainer, ConfirmModal
    │   ├── layout/              # Navbar, Sidebar
    │   ├── pos/                 # MenuGrid, CartPanel
    │   ├── tables/              # TableDetailModal
    │   ├── billing/             # InvoiceModal, Thermal Receipt layout
    │   ├── menu/                # MenuItemModal
    │   └── inventory/           # InventoryItemModal
    └── pages/
        ├── LoginPage.tsx        # Authentication & demo pills
        ├── DashboardPage.tsx    # Live restaurant metrics & recent orders
        ├── PosPage.tsx          # Dual-column POS terminal
        ├── OrdersPage.tsx       # Kitchen status queue
        ├── BillingPage.tsx      # Invoices & searchable history
        ├── TablesPage.tsx       # Interactive floor plan
        ├── MenuManagementPage.tsx# Food item CRUD
        ├── InventoryPage.tsx    # Stock management
        ├── ReportsPage.tsx      # Analytics & CSV export
        └── SettingsPage.tsx     # Tax, branding & reset controls
```

---

## 📄 License

This project is open-source and licensed under the [MIT License](LICENSE).
