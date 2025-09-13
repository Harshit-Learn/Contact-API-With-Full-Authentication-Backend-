# Contact-API-With-Full-Authentication-Backend-


# 📌 Contact API With Full Authentication (Backend)

This project is a **Node.js + Express.js backend** that provides secure authentication and contact management API.  
It includes **JWT authentication**, **bcrypt.js = To secure the password (by hashing)**, and secure **REST API endpoints**.

---

## 🚀 Live API Endpoint
🔗 [Contact API - Vercel Deployment](https://auth-file-contact-api.vercel.app/api/contact)

---

## 🛠️ Tech Stack
- **Node.js**
- **Express.js**
- **MongoDB & Mongoose**
- **JWT Authentication**
- **bcrypt Hashing**


---

## 📂 API Routes

### 🔑 Authentication
- `POST /api/auth/register` → Register new user  
- `POST /api/auth/login` → Login user & get token  

### 👤 User
- `GET /api/user/profile` → Get user profile (protected route)  

### 📞 Contact
- `POST /api/contact` → Add new contact (protected)  
- `GET /api/contact` → Get all contacts (protected)  
- `PUT /api/contact/:id` → Update contact (protected)  
- `DELETE /api/contact/:id` → Delete contact (protected)  

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/YourUsername/Contact-API-With-Full-Authentication-Backend.git

# Move into project folder
cd Contact-API-With-Full-Authentication-Backend



## 🧑‍💻 Author

* Harshit Barnwal(https://github.com/harshit barnwal)

```



क्या चाहोगे कि मैं तुम्हारे लिए इसमें एक **project workflow diagram (API request → middleware → DB → response)** भी README.md में add कर दूँ ताकि और professional लगे?
```
