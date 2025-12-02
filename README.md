# CryptoCreed – Cryptocurrency Tracking Web App

A React-based crypto market dashboard that provides real-time coin data, detailed charts, authentication, and latest crypto news.

---
## Live Demo
https://crypto-creed-one.vercel.app/
--

## 1. Tech Stack

### 🖥️ Frontend
- **React.js**
- **Material UI (MUI v4 & v5)**
- **Chart.js + react-chartjs-2**
- **Anime.js** (background animation)

---

### 🔥 Backend / Services
- **Firebase Authentication**
- **Firebase Firestore**
- **Firebase Hosting** (optional)

---

### 🌐 APIs Used
- **CoinGecko API** – Market data, charts, crypto prices  
- **CryptoCompare API** – Latest crypto news

---

### 🛠 Development Tools
- **Axios** – HTTP requests  
- **Jest + React Testing Library** – Automated testing  
- **Postman** – Manual API testing  
- **Git + GitHub**
- **Node.js + NPM**

---

### ⚙ Build & Deployment Tools
- **Vercel / Netlify** – Deployment  
- **create-react-app (react-scripts)** – Build system

---

## 2. Project Setup & Running Instructions

### Clone the Repository

``` bash
git clone 'https://github.com/NR-654/CryptoCreed'
cd CryptoCreed

```

### Install Dependencies

``` bash
npm install
```

### 🔧 Environment Variables (Firebase)
Create a .env file:

```
REACT_APP_FIREBASE_API_KEY=your_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

▶ Start the App
``` bash
npm start
```
---

## 3. Project Structure

```
CryptoCreed/
│── public/
|    ├──index.html
|    ├──bg.jpg
|    ├──manifest.json
|    ├──aboutus.png
|    ├──featureimg.png
|    ├──logo1.png
|    ├──logo2.png
|    ├──robots.txt
│── src/
│   ├── Components/
│   │   ├── Authentication/
|   │   ├──   ├── Admin/
|   │   ├──     |──AdminAuthModal.js
|   │   ├──     |──AdminData.js
|   │   ├──     |──Home.js
|   │   ├──     |──Login.js
|   │   ├──     |──UserData.js
|   │   ├──     |──UserMessage.js
|   │         ├── AuthModal.js
|   │         ├── Login.js
|   │         ├── Signup.js
|   │         ├── UserSidebar.js
|   │   ├── Bg/
|   │         ├── Anime.js
|   │         ├── Poster.js
│   │   ├── About.js
│   │   ├── Alert.js
│   │   ├── CoinInfo.js
│   │   ├── CoinTable.js
│   │   ├── Contact.js
│   │   ├── Features.js
│   │   ├── Footer.js
│   │   ├── Header.js
│   │   ├── News.js
│   │   ├── SelectButton.js
│   ├── config/
│   │   ├── api.js
│   │   ├── data.js
│   │   ├── FirebaseConfig.js
│   ├── Pages/
│   │   ├── ChangePassword.js
│   │   ├── CoinPage.js
│   │   ├── Dashboard.js
│   │   ├── ForgotPassword.js
│   │   ├── HomePage.js
│   ├── App.js
│   ├── App.css
│   ├── CryptoContext.js
│   ├── Firebase.js
│   ├── index.js
│── package.json
│── package-lock.json
│── .env
│── README.md

```


## 4. API Endpoints Used

### 1. Crypto News API (CryptoCompare)
``` 
https://min-api.cryptocompare.com/data/v2/news/?lang=EN&api_key=YOUR_API_KEY
```

### 2. CoinGecko Price APIs (No API key)
#### • Coin List
```
https://api.coingecko.com/api/v3/coins/markets
```

#### • Single Coin
```
https://api.coingecko.com/api/v3/coins/{id}
```
#### • Historical Chart
```
https://api.coingecko.com/api/v3/coins/{id}/market_chart
```
#### • Trending Coins
```
https://api.coingecko.com/api/v3/coins/markets?order=gecko_desc
```

