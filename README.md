# PharmaPlace

PharmaPlace is an online marketplace where users can buy and sell medicines. The platform includes role-based authentication for Admins, Sellers, and Users. It utilizes Firebase Authentication for secure access management.

## Features

### 🔹 Role-Based Authentication
- **Admin**: Manages users, categories, payments, sales reports, and advertisements.
- **Seller**: Manages medicine listings, payment history, and requests advertisements.
- **User**: Can purchase medicines and view their payment history.

### 🛠️ Tech Stack
- **Frontend**: React, React Router, React Hook Form, React Icons, Tailwind CSS, DaisyUI
- **Backend**: Express.js (planned integration)
- **Database**: MongoDB (planned integration)
- **Authentication**: Firebase
- **State Management**: TanStack React Query
- **API Calls**: Axios
- **UI Components**: SweetAlert2, Swiper
- **Linting & Formatting**: ESLint
- **Build Tool**: Vite

## 📂 Project Setup

### Prerequisites
- Node.js (Latest LTS Recommended)
- Firebase project setup (for authentication)

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/pharma-place.git
   cd pharma-place
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```

## 🚀 Usage
- **Admin Dashboard**: `/dashboard/adminHome`
- **Seller Dashboard**: `/dashboard/sellerHome`
- **User Payment History**: `/dashboard/userPaymentHistory`

## 📜 Dashboard Structure

The dashboard adapts to the user role:
- **Admin**
  - Manage Users
  - Manage Categories
  - Payment Management
  - Sales Reports
  - Banner Advertisements
- **Seller**
  - Manage Medicines
  - Payment History
  - Request Advertisement
- **User**
  - View Payment History

## 📦 Dependencies
### Main Dependencies
```json
{
  "@stripe/react-stripe-js": "^3.1.1",
  "@tanstack/react-query": "^5.64.2",
  "axios": "^1.7.9",
  "firebase": "^11.0.2",
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-helmet-async": "^2.0.5",
  "react-hook-form": "^7.54.1",
  "react-icons": "^5.4.0",
  "react-router-dom": "^7.0.2",
  "react-toastify": "^11.0.3",
  "sweetalert2": "^11.15.10",
  "swiper": "^11.2.2"
}
```

### Development Dependencies
```json
{
  "@vitejs/plugin-react": "^4.3.4",
  "eslint": "^9.15.0",
  "eslint-plugin-react": "^7.37.2",
  "tailwindcss": "^3.4.16",
  "vite": "^6.0.1"
}
```

## 📜 License
This project is licensed under the MIT License.

---

Feel free to contribute or report issues!

