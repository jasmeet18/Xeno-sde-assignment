
# 🧠 Xeno Mini CRM Platform

This is a full-stack CRM platform built as part of the **Xeno SDE Internship Assignment – 2025**. It allows for customer segmentation, campaign management, personalized messaging, and AI-powered insights.

---

## 🚀 Features

### ✅ Data Ingestion APIs

* REST APIs to ingest `customers` and `orders` data.
* Built using **Node.js + Express**.
* Swagger/Postman collection provided.

### ✅ Campaign Creation UI

* Frontend in **React.js** with dynamic audience segment builder (AND/OR logic).
* Preview audience size before saving segment.
* Campaign history page with delivery stats.

### ✅ Campaign Delivery & Logging

* Asynchronous campaign processing using pub-sub (Kafka/Redis).
* Simulated delivery via dummy vendor API (\~90% success).
* Delivery Receipt API updates DB logs.

### ✅ Authentication

* **Google OAuth 2.0** login using Firebase or Passport.js.
* Only authenticated users can create/view campaigns.

### ✅ AI Integration

* Natural Language to Rules: Converts prompts like *"Users inactive for 60 days and spent > ₹5000"* to segment logic.
* Message Suggestions: Given a goal, suggests 2–3 variants using **OpenAI API**.
* Campaign Summary: Converts raw delivery stats into readable summaries.

---

## 🛠️ Tech Stack

| Layer     | Technology                     |
| --------- | ------------------------------ |
| Frontend  | React.js                       |
| Backend 1 | Node.js (Express)              |
| Backend 2 | Java (Spring Boot placeholder) |
| Database  | MySQL                          |
| Auth      | Google OAuth 2.0               |
| AI Layer  | OpenAI API                     |
| Optional  | Redis Streams / Kafka          |

---

## 🧪 Local Setup Instructions

### Prerequisites

* Node.js + npm
* Java + Maven (for Spring Boot)
* MySQL
* (Optional) Redis/Kafka if pub-sub is implemented

### Clone the repo

```bash
git clone https://github.com/your-username/xeno-crm.git
cd xeno-crm
```

### 1. Setup MySQL

```sql
CREATE DATABASE xeno_crm;
-- Import schema
source mysql/schema.sql;
```

### 2. Run Node.js backend

```bash
cd backend-node
npm install
node index.js
```

### 3. Run Java backend (optional for AI or future expansion)

```bash
cd backend-java
# Compile and run via IDE or CLI
```

### 4. Run React frontend

```bash
cd frontend
npm install
npm start
```




