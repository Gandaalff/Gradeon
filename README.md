# 📊 Gradeon

**Gradeon** is a lightweight application for managing grades. It allows users to add, edit, and delete grade entries, as well as customize percentage ranges for grade thresholds. The project is actively developed and will be expanded with additional features in the future.

## 🚀 Technologies

- Angular
- TypeScript
- Angular Material
- [Playwright](https://playwright.dev/) (for testing)
- JSON Server (mock API)

## 🌍 Project Status

🟢 Public project under active development. No demo is currently available.

## ⚙️ Requirements

- Node.js version **20.19.0**
- npm version **10.8.2** or higher

## 🛠️ Installation & Setup

1. **Clone the repository**
  ```git clone <your-repo-link>```
  ```cd gradeon```

2. **Install dependencies**
  ```npm install```

3. **Start the mock API (JSON Server)**
  ```npx json-server --watch db.json --port 3000```

4. **Run the Angular application (in a separate terminal)**
  ```npm run start```
The application will be available at: http://localhost:4200

## 🧪 Testing
This project uses Playwright for end-to-end testing.

**To run tests, use the following command:**
  ```npx playwright test```